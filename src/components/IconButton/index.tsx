import React from 'react';
import { CustomIcon, CustomIconButton } from './styles';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { ariaLabel, disabled, iconAlt, iconSrc, iconWidth, onClick } = props;

  return (
    <CustomIconButton
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      <CustomIcon src={iconSrc} alt={iconAlt} width={iconWidth} />
    </CustomIconButton>
  );
};

export default IconButton;
