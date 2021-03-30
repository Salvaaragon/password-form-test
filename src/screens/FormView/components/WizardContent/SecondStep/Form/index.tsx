import CustomInput from '@Components/CustomInput';
import CustomText from '@Components/CustomText';
import {
  ACCEPT_TERMS_STEP,
  REQUEST_STATUS_STEP,
} from '@Constants/passwordForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { DataContainer } from '@Screens/FormView/components/WizardContent/styles';
import WizardFooter from '@Screens/FormView/components/WizardFooter';
import {
  POST_FORM,
  SET_ACTIVE_STEP,
  SET_HINT,
  SET_PASSWORD,
  SET_REPEAT_PASSWORD,
  SET_SHOW_PASSWORD,
  SET_SHOW_REPEAT_PASSWORD,
} from '@Store/constants/passwordForm';
import { RootState } from '@Store/reducers';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import {
  HINT_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from './constants';
import { FormValues } from './types';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const storedPassword = useSelector(
    (state: RootState) => state.passwordFormReducer.password,
  );
  const storedRepeatPassword = useSelector(
    (state: RootState) => state.passwordFormReducer.repeatPassword,
  );
  const storedHint = useSelector(
    (state: RootState) => state.passwordFormReducer.hint,
  );
  const storedShowPassword = useSelector(
    (state: RootState) => state.passwordFormReducer.showPassword,
  );
  const storedShowRepeatPassword = useSelector(
    (state: RootState) => state.passwordFormReducer.showRepeatPassword,
  );

  const defaultValues = {
    password: storedPassword,
    repeatPassword: storedRepeatPassword,
    passwordHint: storedHint,
  };

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(i18n.t('secondStep:required-field'))
      .min(PASSWORD_MIN_LENGTH, i18n.t('secondStep:password-error-length-min'))
      .max(PASSWORD_MAX_LENGTH, i18n.t('secondStep:password-error-length-max'))
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/,
        i18n.t('secondStep:password-error-format'),
      ),
    repeatPassword: yup
      .string()
      .required(i18n.t('secondStep:required-field'))
      .oneOf(
        [yup.ref('password'), null],
        i18n.t('secondStep:repeat-password-error-match'),
      ),
    passwordHint: yup
      .string()
      .max(HINT_MAX_LENGTH, i18n.t('secondStep:hint-error-length-max')),
  });

  const handleClickIconPassword = () => {
    dispatch({ type: SET_SHOW_PASSWORD, payload: !storedShowPassword });
  };

  const handleClickIconRepeatPassword = () =>
    dispatch({
      type: SET_SHOW_REPEAT_PASSWORD,
      payload: !storedShowRepeatPassword,
    });

  const onClickCancel = () => {
    dispatch({ type: SET_ACTIVE_STEP, payload: ACCEPT_TERMS_STEP });
  };

  const onSubmit = (data: FormValues) => {
    dispatch({ type: SET_PASSWORD, payload: data.password });
    dispatch({ type: SET_REPEAT_PASSWORD, payload: data.repeatPassword });
    dispatch({ type: SET_HINT, payload: data.passwordHint });
    dispatch({
      type: POST_FORM,
      payload: {
        password: data.password,
        repeatPassword: data.repeatPassword,
        hint: data.passwordHint,
      },
    });
    dispatch({ type: SET_ACTIVE_STEP, payload: REQUEST_STATUS_STEP });
  };

  const { handleSubmit, errors, control, formState } = useForm<FormValues>({
    defaultValues,
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <DataContainer container justify="space-between">
        <DataContainer className="input-item" item xs={12} md={5}>
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                label={i18n.t('secondStep:password-label')}
                placeholder={i18n.t('secondStep:password-placeholder')}
                type={storedShowPassword ? 'text' : 'password'}
                icon={storedShowPassword ? Visibility : VisibilityOff}
                iconClick={handleClickIconPassword}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                errors={errors.password?.message}
                fullWidth
              />
            )}
          ></Controller>
        </DataContainer>

        <DataContainer className="input-item" item xs={12} md={5}>
          <Controller
            control={control}
            name="repeatPassword"
            rules={{ required: true }}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                label={i18n.t('secondStep:repeat-password-label')}
                placeholder={i18n.t('secondStep:repeat-password-placeholder')}
                type={storedShowRepeatPassword ? 'text' : 'password'}
                icon={storedShowRepeatPassword ? Visibility : VisibilityOff}
                iconClick={handleClickIconRepeatPassword}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                errors={errors.repeatPassword?.message}
                fullWidth
              />
            )}
          ></Controller>
        </DataContainer>
      </DataContainer>

      <DataContainer className="text-item" item xs={12}>
        <CustomText text={i18n.t('secondStep:hint-info')} fontSize="0.9rem" />
      </DataContainer>

      <DataContainer className="bottom-item">
        <DataContainer className="input-item" item xs={12}>
          <Controller
            control={control}
            name="passwordHint"
            rules={{ required: true }}
            render={({ onChange, value, onBlur }) => (
              <CustomInput
                label={i18n.t('secondStep:hint-label')}
                placeholder={i18n.t('secondStep:hint-placeholder')}
                onBlur={onBlur}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(event.target.value)
                }
                value={value}
                errors={errors.passwordHint?.message}
                fullWidth
              />
            )}
          ></Controller>
        </DataContainer>
      </DataContainer>

      <WizardFooter
        onClickCancel={onClickCancel}
        disableButton={!formState.isValid}
      />
    </form>
  );
};

export default Form;
