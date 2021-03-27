import FormView from '@Screens/FormView';
import Manual from '@Screens/Manual';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/manual" component={Manual} />
      <Route component={FormView} />
    </Switch>
  );
};

export default Router;
