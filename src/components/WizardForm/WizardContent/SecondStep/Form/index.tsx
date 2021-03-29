import CustomInput from '@Components/CustomInput';
import CustomText from '@Components/CustomText';
import { ACCEPT_TERMS, REQUEST_STATUS } from '@Components/WizardForm/constants';
import { DataContainer } from '@Components/WizardForm/WizardContent/styles';
import WizardFooter from '@Components/WizardForm/WizardFooter';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import {
  HINT_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from './constants';
import { FormProps } from './types';

type FormValues = {
  password: string;
  repeatPassword: string;
  passwordHint: string;
};

const defaultValues = {
  password: '',
  repeatPassword: '',
  passwordHint: '',
};

const Form: React.FC<FormProps> = (props: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const { setStep } = props;
  const { i18n } = useTranslation();

  const handleClickIconPassword = () => setShowPassword(!showPassword);
  const handleClickIconRepeatPassword = () =>
    setShowRepeatPassword(!showRepeatPassword);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: FormValues) => {
    console.log('submit');
    setStep(REQUEST_STATUS);
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

  const { handleSubmit, errors, control } = useForm<FormValues>({
    defaultValues: defaultValues,
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
            render={({ onChange, value }) => (
              <CustomInput
                label={i18n.t('secondStep:password-label')}
                placeholder={i18n.t('secondStep:password-placeholder')}
                type={showPassword ? 'text' : 'password'}
                icon={showPassword ? Visibility : VisibilityOff}
                iconClick={handleClickIconPassword}
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
            render={({ onChange, value }) => (
              <CustomInput
                label={i18n.t('secondStep:repeat-password-label')}
                placeholder={i18n.t('secondStep:repeat-password-placeholder')}
                type={showRepeatPassword ? 'text' : 'password'}
                icon={showRepeatPassword ? Visibility : VisibilityOff}
                iconClick={handleClickIconRepeatPassword}
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
            render={({ onChange, value }) => (
              <CustomInput
                label={i18n.t('secondStep:hint-label')}
                placeholder={i18n.t('secondStep:hint-placeholder')}
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
      <WizardFooter onClickCancel={() => setStep(ACCEPT_TERMS)} />
    </form>
  );
};

export default Form;
