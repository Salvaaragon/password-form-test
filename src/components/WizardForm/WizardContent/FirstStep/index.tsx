import CustomText from '@Components/CustomText';
import TextWithIcon from '@Components/TextWithIcon';
import { Grid } from '@material-ui/core';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import LockIcon from '@material-ui/icons/Lock';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataContainer } from '../styles';
import Form from './Form';
import { InfoIconContainer, InfoTextContainer } from './styles';
import { FirstStepProps } from './types';

const FirstStep: React.FC<FirstStepProps> = (props: FirstStepProps) => {
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
      <DataContainer container item xs={12} justify="center">
        <InfoIconContainer item xs={12} md={6} justify="center">
          <TextWithIcon
            icon={EnhancedEncryptionIcon}
            text={i18n.t('firstStep:info-save')}
          />
        </InfoIconContainer>
        <InfoIconContainer item xs={12} md={6} justify="center">
          <TextWithIcon
            icon={LockIcon}
            text={i18n.t('firstStep:info-master-password')}
          />
        </InfoIconContainer>
      </DataContainer>
      <InfoTextContainer item xs={12}>
        <Grid item xs={12}>
          <CustomText
            text={i18n.t('firstStep:how-work')}
            fontSize="0.9rem"
            fontWeight="bold"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomText
            text={i18n.t('general:how-work-info')}
            fontSize="0.9rem"
          />
        </Grid>
      </InfoTextContainer>
      <InfoTextContainer item xs={12}>
        <Grid item xs={12}>
          <CustomText
            text={i18n.t('firstStep:what-saved')}
            fontSize="0.9rem"
            fontWeight="bold"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomText
            text={i18n.t('firstStep:what-saved-info')}
            fontSize="0.9rem"
          />
        </Grid>
      </InfoTextContainer>
      <Grid item xs={12}>
        <Form setStep={setStep} />
      </Grid>
    </Grid>
  );
};

export default FirstStep;
