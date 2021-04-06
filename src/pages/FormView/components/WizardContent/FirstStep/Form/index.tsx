import CustomCheckInput from '@Components/CustomCheckInput';
import { SET_PASSWORD_STEP } from '@Constants/passwordForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { DataContainer } from '@Pages/FormView/components/WizardContent/styles';
import WizardFooter from '@Pages/FormView/components/WizardFooter';
import { CHECK_TERMS, SET_ACTIVE_STEP } from '@Store/constants/passwordForm';
import { RootState } from '@Store/reducers';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { FormValues } from './types';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const storedCheckTerms = useSelector(
    (state: RootState) => state.passwordFormReducer.checkTerms,
  );

  const defaultValues = {
    checkTerms: storedCheckTerms,
  };

  const schema = yup.object().shape({
    checkTerms: yup.boolean().oneOf([true], 'firstStep:check-terms-error'),
  });

  const onSubmit = (data: FormValues) => {
    dispatch({ type: CHECK_TERMS, payload: data.checkTerms });
    dispatch({ type: SET_ACTIVE_STEP, payload: SET_PASSWORD_STEP });
  };

  const { handleSubmit, errors, control, formState } = useForm<FormValues>({
    defaultValues,
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <DataContainer className="bottom-item" item xs={12}>
        <Controller
          control={control}
          name="checkTerms"
          rules={{ required: true }}
          render={({ onChange, value, ref }) => (
            <CustomCheckInput
              id="check-terms"
              label={i18n.t('firstStep:check-terms')}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChange(event.target.checked)
              }
              checked={value}
              errors={
                errors.checkTerms?.message && i18n.t(errors.checkTerms.message)
              }
              inputRef={ref}
            />
          )}
        ></Controller>
      </DataContainer>
      <WizardFooter disableButton={!formState.isValid} />
    </form>
  );
};

export default Form;
