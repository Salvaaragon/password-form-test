import CustomText from '@Components/CustomText';
import { Grid, useTheme } from '@material-ui/core';
import React from 'react';
import { CustomImageIcon } from './styles';
import { TextWithIconProps } from './types';

const TextWithIcon: React.FC<TextWithIconProps> = (
  props: TextWithIconProps,
) => {
  const { icon, text } = props;
  const Icon = icon;

  const theme = useTheme();
  const IconStyle = { fontSize: '5rem', color: theme.palette.primary.main };

  return (
    <Grid container>
      <Grid item xs={12} container justify="center">
        {typeof Icon === 'string' ? (
          <CustomImageIcon src={Icon} alt={text} />
        ) : (
          <Icon style={IconStyle} />
        )}
      </Grid>
      <Grid item xs={12} container justify="center">
        <CustomText text={text} alignment="center" fontSize="0.9rem" />
      </Grid>
    </Grid>
  );
};

export default TextWithIcon;
