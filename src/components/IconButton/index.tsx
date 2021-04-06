import React from 'react';
import { CustomIcon, CustomIconButton } from './styles';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const {
    ariaLabel,
    disabled,
    iconAlt,
    iconSrc,
    iconWidth,
    id,
    onClick,
  } = props;

  return (
    <CustomIconButton
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      <CustomIcon src={iconSrc} alt={iconAlt} width={iconWidth} />
    </CustomIconButton>
  );
};

IconButton.defaultProps = {
  id: '',
};

export default IconButton;
