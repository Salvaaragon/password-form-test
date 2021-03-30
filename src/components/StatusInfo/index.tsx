import CustomLink from '@Components/CustomLink';
import CustomText from '@Components/CustomText';
import { Grid, useTheme } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import { IconContainer, LinkContainer, StatusInfoContainer } from './styles';
import { StatusInfoProps } from './types';

const StatusInfo: React.FC<StatusInfoProps> = (props: StatusInfoProps) => {
  const { description, icon, onClickLink, textLink, title, type } = props;
  const Icon = icon;
  const theme = useTheme();

  const IconProps = {
    fontSize: '2.5rem',
    color:
      type === 'success'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  };

  return (
    <Grid container>
      <StatusInfoContainer container>
        <IconContainer item xs={12} sm>
          <Icon style={IconProps} />
        </IconContainer>
        <Grid item xs={12} sm={11} container>
          <Grid item xs={12}>
            <CustomText text={title} fontSize="1.2rem" fontWeight="bold" />
          </Grid>
          <Grid item xs={12}>
            <CustomText text={description} fontSize="0.9rem" />
          </Grid>
        </Grid>
      </StatusInfoContainer>
      <LinkContainer item xs={12} container justify="flex-end">
        <Grid item>
          <CustomLink
            color={theme.palette.primary.main}
            icon={KeyboardArrowRightIcon}
            onClick={onClickLink}
            text={textLink}
          />
        </Grid>
      </LinkContainer>
    </Grid>
  );
};

export default StatusInfo;
