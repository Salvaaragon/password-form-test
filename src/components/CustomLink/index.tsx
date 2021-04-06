import CustomText from '@Components/CustomText';
import React from 'react';
import { Link } from './styles';
import { CustomLinkProps } from './types';

const CustomLink: React.FC<CustomLinkProps> = (props: CustomLinkProps) => {
  const { id, icon, onClick } = props;
  const Icon = icon;

  return (
    <Link id={id} onClick={onClick} color={props.color}>
      <CustomText {...props} fontSize="0.9rem" fontWeight="bold" />
      {Icon && <Icon style={{ color: props.color }} />}
    </Link>
  );
};

CustomLink.defaultProps = {
  id: '',
  icon: undefined,
  color: '#FFF',
};

export default CustomLink;
