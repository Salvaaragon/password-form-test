import CustomText from '@Components/CustomText';
import { Grid, useTheme } from '@material-ui/core';
import React from 'react';
import { TextWithIconProps } from './types';

const TextWithIcon: React.FC<TextWithIconProps> = (
  props: TextWithIconProps,
) => {
  const { icon, text } = props;
  const Icon = icon;

  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} container justify="center">
        <Icon style={{ fontSize: '5rem', color: theme.palette.primary.main }} />
      </Grid>
      <Grid item xs={12} container justify="center">
        <CustomText text={text} alignment="center" fontSize="0.9rem" />
      </Grid>
    </Grid>
  );
};

export default TextWithIcon;
