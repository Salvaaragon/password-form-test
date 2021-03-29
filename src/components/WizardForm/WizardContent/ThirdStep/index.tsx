import StatusInfo from '@Components/StatusInfo';
import { ACCEPT_TERMS } from '@Components/WizardForm/constants';
import { Grid } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThirdStepProps } from './types';

const ThirdStep: React.FC<ThirdStepProps> = (props: ThirdStepProps) => {
  const { setStep, type } = props;
  const { i18n } = useTranslation();

  return (
    <Grid>
      {type === 'success' && (
        <StatusInfo
          description={i18n.t('thirdStep:description-ok')}
          icon={CheckCircleOutlineIcon}
          onClickLink={() => setStep(ACCEPT_TERMS)}
          textLink={i18n.t('thirdStep:link-ok')}
          title={i18n.t('thirdStep:title-ok')}
          type="success"
        />
      )}
      {type === 'error' && (
        <StatusInfo
          description={i18n.t('thirdStep:description-ko')}
          icon={ErrorOutlineIcon}
          onClickLink={() => setStep(ACCEPT_TERMS)}
          textLink={i18n.t('thirdStep:link-ko')}
          title={i18n.t('thirdStep:title-ko')}
          type="error"
        />
      )}
    </Grid>
  );
};

export default ThirdStep;
