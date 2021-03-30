import LanguageSelector from '@Components/LanguageSelector';
import React from 'react';
import WizardContent from './components/WizardContent';
import WizardHeader from './components/WizardHeader';
import { FormContainerGrid, FormViewGrid, WizardFormGrid } from './styles';

const FormView: React.FC = () => {
  return (
    <FormViewGrid container justify="flex-end" alignContent="flex-start">
      <LanguageSelector />
      <FormContainerGrid container justify="center" alignContent="flex-start">
        <WizardFormGrid container item xs={11} sm={8} md={8} lg={6}>
          <WizardHeader />
          <WizardContent />
        </WizardFormGrid>
      </FormContainerGrid>
    </FormViewGrid>
  );
};

export default FormView;
