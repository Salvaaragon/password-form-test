import CustomCheckInput from '@Components/CustomCheckInput';
import { SET_PASSWORD } from '@Components/WizardForm/constants';
import { DataContainer } from '@Components/WizardForm/WizardContent/styles';
import WizardFooter from '@Components/WizardForm/WizardFooter';
import { yupResolver } from '@hookform/resolvers/yup';
import i18n from '@Services/i18n';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormProps } from './types';

type FormValues = {
  checkTerms: boolean;
};

const defaultValues = {
  checkTerms: false,
};

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { setStep } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: FormValues) => {
    setStep(SET_PASSWORD);
  };

  const schema = yup.object().shape({
    checkTerms: yup
      .boolean()
      .oneOf([true], i18n.t('firstStep:check-terms-error')),
  });

  const { handleSubmit, errors, control } = useForm<FormValues>({
    defaultValues: defaultValues,
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
              label={i18n.t('firstStep:check-terms')}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChange(event.target.checked)
              }
              checked={value}
              errors={errors.checkTerms?.message}
              inputRef={ref}
            />
          )}
        ></Controller>
      </DataContainer>
      <WizardFooter />
    </form>
  );
};

export default Form;
