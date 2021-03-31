import Loading from '@Components/Loading';
import StatusInfo from '@Components/StatusInfo';
import { ACCEPT_TERMS_STEP } from '@Constants/passwordForm';
import { Grid } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { RESET_FORM, SET_ACTIVE_STEP } from '@Store/constants/passwordForm';
import { RootState } from '@Store/reducers';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const ThirdStep: React.FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const isPosting = useSelector(
    (state: RootState) => state.passwordFormReducer.isPosting,
  );
  const isFailed = useSelector(
    (state: RootState) => state.passwordFormReducer.isFailed,
  );

  const onClickLink = () => {
    dispatch({ type: RESET_FORM });
    dispatch({ type: SET_ACTIVE_STEP, payload: ACCEPT_TERMS_STEP });
  };

  return (
    <Grid>
      {isPosting && <Loading />}
      {isFailed && (
        <StatusInfo
          idLink="reset-form"
          description={i18n.t('thirdStep:description-ko')}
          icon={ErrorOutlineIcon}
          onClickLink={onClickLink}
          textLink={i18n.t('thirdStep:link-ko')}
          title={i18n.t('thirdStep:title-ko')}
          type="error"
        />
      )}
      {!isPosting && !isFailed && (
        <StatusInfo
          idLink="reset-form"
          description={i18n.t('thirdStep:description-ok')}
          icon={CheckCircleOutlineIcon}
          onClickLink={onClickLink}
          textLink={i18n.t('thirdStep:link-ok')}
          title={i18n.t('thirdStep:title-ok')}
          type="success"
        />
      )}
    </Grid>
  );
};

export default ThirdStep;
