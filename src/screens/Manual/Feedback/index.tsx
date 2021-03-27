import React from 'react';
import error from './error.png';
import success from './success.png';

type Step3Props = {
  success?: boolean;
};

const Step3: React.FC<Step3Props> = (props: { success?: boolean }) => (
  <img src={props.success ? success : error} />
);

export default Step3;
