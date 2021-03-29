import {
  TextColorType,
  LoadTextColorFunction,
  TypographyColors,
  TypographyColorType,
} from './types';

export const isTypographyColor = (
  color: string,
): color is TypographyColorType => {
  return TypographyColors.includes(color);
};

export const loadTextColor: LoadTextColorFunction = (color: TextColorType) => {
  if (isTypographyColor(color)) {
    return { color: color };
  } else return { customcolor: color };
};
