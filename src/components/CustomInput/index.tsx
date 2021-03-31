import CustomInputError from '@Components/CustomInputError';
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import React from 'react';
import { CustomInputLabel, CustomOutlinedInput } from './styles';
import { CustomInputProps } from './types';

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  const { label, errors, icon, iconClick, iconId, ...restProps } = props;
  const Icon = icon;

  return (
    <Grid container>
      <Grid item xs={12}>
        <CustomInputLabel shrink>{label}</CustomInputLabel>
      </Grid>

      <Grid item xs={12}>
        <FormControl
          variant="outlined"
          required
          error={errors !== undefined}
          fullWidth={props.fullWidth}
        >
          <CustomOutlinedInput
            {...restProps}
            error={!!errors}
            endAdornment={
              Icon && (
                <InputAdornment position="end">
                  <IconButton id={iconId} onClick={iconClick} edge="end">
                    <Icon />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
          {errors && <CustomInputError errors={errors} />}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CustomInput;
