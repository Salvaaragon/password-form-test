import FormView from '@Pages/FormView';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route component={FormView} />
    </Switch>
  );
};

export default Router;
