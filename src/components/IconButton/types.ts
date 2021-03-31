export type IconButtonProps = {
  ariaLabel: string | undefined;
  disabled: boolean;
  iconAlt: string;
  iconSrc: string;
  iconWidth: string;
  id?: string;
  onClick: () => void;
};

export type CustomIconButtonProps = {
  disabled: boolean;
};

export type CustomIconProps = {
  width: string;
};
