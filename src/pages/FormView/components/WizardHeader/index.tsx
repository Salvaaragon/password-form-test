import WizardStepper from '@Components/WizardStepper';
import { RootState } from '@Store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import { steps } from './constants';
import { WizardHeaderGrid } from './styles';

const WizardHeader: React.FC = () => {
  const activeStep = useSelector(
    (state: RootState) => state.passwordFormReducer.activeStep,
  );

  return (
    <WizardHeaderGrid container justify="center" alignContent="center">
      <WizardStepper activeStep={activeStep} steps={steps} />
    </WizardHeaderGrid>
  );
};

export default WizardHeader;
