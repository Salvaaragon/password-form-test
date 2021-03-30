import LanguageSelector from '@Components/LanguageSelector';
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import WizardContent from './components/WizardContent';
import WizardHeader from './components/WizardHeader';
import { FormContainerGrid, FormViewGrid, WizardFormGrid } from './styles';

const FormView: React.FC = () => {
  return (
    <FormViewGrid container alignContent="flex-start">
      <Grid item xs={12} container justify="flex-end">
        <LanguageSelector />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="xl" disableGutters>
          <FormContainerGrid
            container
            justify="center"
            alignContent="flex-start"
          >
            <WizardFormGrid
              container
              item
              xs={11}
              sm={10}
              md={10}
              lg={8}
              xl={6}
            >
              <WizardHeader />
              <WizardContent />
            </WizardFormGrid>
          </FormContainerGrid>
        </Container>
      </Grid>
    </FormViewGrid>
  );
};

export default FormView;
