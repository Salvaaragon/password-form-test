import React from 'react';
import { CustomBtn } from './styles';
import { CustomButtonProps } from './types';

const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps,
) => {
  const { icon, text } = props;
  const Icon = icon;

  return (
    <CustomBtn {...props} className={Icon !== undefined ? 'have-icon' : ''}>
      {text}
      {Icon && <Icon />}
    </CustomBtn>
  );
};

CustomButton.defaultProps = {
  icon: undefined,
};

export default CustomButton;
