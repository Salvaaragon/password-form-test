import WizardForm from '@Components/WizardForm';
import React from 'react';
import { FormViewGrid } from './styles';

const FormView: React.FC = () => {
  return (
    <FormViewGrid container justify="center" alignContent="flex-start">
      <WizardForm />
    </FormViewGrid>
  );
};

export default FormView;
