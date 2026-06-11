import { Grid } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FirstParagraphBlock: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid size={{ sm: 1, xs: 1 }} />
      <Grid size={{ sm: 10, xs: 10 }} className={'home-intro-text'}>
        {t('HomePage.FirstParagraph')}
      </Grid>
      <Grid size={{ sm: 1, xs: 1 }} />
    </Grid>
  );
};
