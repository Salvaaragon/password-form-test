import CustomText from '@Components/CustomText';
import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataContainer } from '../styles';
import Form from './Form';
import { SecondStepProps } from './types';

const SecondStep: React.FC<SecondStepProps> = (props: SecondStepProps) => {
  const { setStep } = props;
  const { i18n } = useTranslation();

  return (
    <Grid>
      <DataContainer className="top-item" item xs={12}>
        <CustomText
          text={i18n.t('general:form-title')}
          fontSize="1.4rem"
          fontWeight="bold"
        />
      </DataContainer>
      <DataContainer className="text-item" item xs={12}>
        <CustomText text={i18n.t('general:how-work-info')} fontSize="0.9rem" />
      </DataContainer>
      <Grid item>
        <Form setStep={setStep} />
      </Grid>
    </Grid>
  );
};

export default SecondStep;
