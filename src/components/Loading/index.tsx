import CustomText from '@Components/CustomText';
import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingContainer, TextContainer } from './styles';

const Loading: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <LoadingContainer item container justify="center">
      <Grid item xs={12} container justify="center">
        <CircularProgress color="primary" />
      </Grid>
      <TextContainer item xs={12} container justify="center">
        <CustomText
          color="primary"
          fontSize="1.2rem"
          fontWeight="bold"
          text={i18n.t('general:loading')}
        />
      </TextContainer>
    </LoadingContainer>
  );
};

export default Loading;
