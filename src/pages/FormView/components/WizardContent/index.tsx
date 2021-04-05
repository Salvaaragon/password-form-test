import {
  ACCEPT_TERMS_STEP,
  REQUEST_STATUS_STEP,
  SET_PASSWORD_STEP,
} from '@Constants/passwordForm';
import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { WizardContentGrid } from './styles';
import ThirdStep from './ThirdStep';

const WizardContent: React.FC = () => {
  const activeStep = useSelector(
    (state: RootState) => state.passwordFormReducer.activeStep,
  );

  return (
    <WizardContentGrid container justify="center" alignContent="center">
      {activeStep === ACCEPT_TERMS_STEP && <FirstStep />}
      {activeStep === SET_PASSWORD_STEP && <SecondStep />}
      {activeStep === REQUEST_STATUS_STEP && <ThirdStep />}
    </WizardContentGrid>
  );
};

export default WizardContent;
