import CustomButton from '@Components/CustomButton';
import CustomLink from '@Components/CustomLink';
import { Grid, useTheme } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { WizardFooterCancelGrid, WizardFooterGrid } from './styles';
import { WizardFooterProps } from './types';

const WizardFooter: React.FC<WizardFooterProps> = (
  props: WizardFooterProps,
) => {
  const { disableButton, onClickCancel } = props;
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <WizardFooterGrid container justify="center" alignContent="center">
      <WizardFooterCancelGrid item xs={6} sm={6} md={6}>
        {onClickCancel && (
          <Grid item xs={2}>
            <CustomLink
              onClick={onClickCancel}
              text={i18n.t('general:cancel')}
            />
          </Grid>
        )}
      </WizardFooterCancelGrid>
      <Grid item xs={6} sm={6} md={6} container justify="flex-end">
        <Grid>
          <CustomButton
            backgroundcolor={theme.palette.secondary.dark}
            icon={KeyboardArrowRightIcon}
            onClick={() => null}
            text={i18n.t('general:next')}
            textcolor="white"
            type="submit"
            disabled={disableButton}
          />
        </Grid>
      </Grid>
    </WizardFooterGrid>
  );
};

export default WizardFooter;
