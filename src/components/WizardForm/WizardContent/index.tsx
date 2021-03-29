import React from 'react';
import { ACCEPT_TERMS, REQUEST_STATUS, SET_PASSWORD } from '../constants';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { WizardContentGrid } from './styles';
import ThirdStep from './ThirdStep';
import { WizardContentProps } from './types';

const WizardContent: React.FC<WizardContentProps> = (
  props: WizardContentProps,
) => {
  const { activeStep, setStep } = props;

  return (
    <WizardContentGrid container justify="center" alignContent="center">
      {activeStep === ACCEPT_TERMS && <FirstStep setStep={setStep} />}
      {activeStep === SET_PASSWORD && <SecondStep setStep={setStep} />}
      {activeStep === REQUEST_STATUS && (
        <ThirdStep type="success" setStep={setStep} />
      )}
    </WizardContentGrid>
  );
};

export default WizardContent;
