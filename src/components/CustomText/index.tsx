import React from 'react';
import { CustomTypography, loadTextColor } from './styles';
import { CustomTextProps } from './types';

const CustomText: React.FC<CustomTextProps> = (props: CustomTextProps) => {
  const { alignment, color, fontFamily, fontSize } = props;
  const { fontStyle, fontWeight, letterSpacing, lineHeight, text } = props;

  return (
    <CustomTypography
      align={alignment}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineheight={lineHeight}
      variant="body1"
      {...loadTextColor(color ? color : 'secondary')}
    >
      {text}
    </CustomTypography>
  );
};

CustomText.defaultProps = {
  alignment: 'left',
  color: 'secondary',
  fontFamily: 'Quicksand',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 'normal',
  letterSpacing: '0',
  lineHeight: '1.5rem',
};

export default CustomText;
