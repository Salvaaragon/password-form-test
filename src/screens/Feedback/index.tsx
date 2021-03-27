import React from 'react';
import error from './error.png';
import success from './success.png';

const Step3 = (props: { success?: boolean }) => (
  <img src={props.success ? success : error} />
);

export default Step3;
