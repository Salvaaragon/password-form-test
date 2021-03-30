import CustomText from '@Components/CustomText';
import { Grid } from '@material-ui/core';
import {
  DataContainer,
  TitleLine,
} from '@Screens/FormView/components/WizardContent/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from './Form';

const SecondStep: React.FC = () => {
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
      <TitleLine item></TitleLine>
      <DataContainer className="text-item" item xs={12}>
        <CustomText text={i18n.t('general:how-work-info')} fontSize="0.9rem" />
      </DataContainer>
      <Grid item>
        <Form />
      </Grid>
    </Grid>
  );
};

export default SecondStep;
