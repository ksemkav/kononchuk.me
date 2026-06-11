import { Grid, Stack } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SegerImage from '../../assets/home/seger.svg?react';

type OwnProps = {
  handleSegerClick: () => void;
};

export const SegerBlock: FC<OwnProps> = ({ handleSegerClick }) => {
  const { t } = useTranslation();
  return (
    <Stack className={'home-container'} spacing={2} direction={'column'}>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ sm: 1, xs: 1 }} />
        <Grid size={{ sm: 10, xs: 10 }} className={'home-title'}>
          {t('HomePage.SegerBlock.Title')}
        </Grid>
        <Grid size={{ sm: 1, xs: 1 }} />
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ sm: 1, xs: 1 }} />
        <Grid size={{ sm: 10, xs: 10 }} className={'home-text'}>
          {t('HomePage.SegerBlock.FirstParagraph')}
        </Grid>
        <Grid size={{ sm: 1, xs: 1 }} />
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ sm: 1, xs: 1 }} />
        <Grid size={{ sm: 10, xs: 10 }}>
          <SegerImage className={'home-seger-image'} />
        </Grid>
        <Grid size={{ sm: 1, xs: 1 }} />
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid size={{ sm: 1, xs: 1 }} />
        <Grid size={{ sm: 10, xs: 10 }} className={'home-text'}>
          {t('HomePage.SegerBlock.SecondParagraph')}
        </Grid>
        <Grid size={{ sm: 1, xs: 1 }} />
      </Grid>
      <Grid className={'home-seger-link'} container sx={{ justifyContent: 'center' }}>
        <Grid size={{ sm: 1, xs: 1 }} />
        <Grid
          size={{ sm: 10, xs: 10 }}
          className={clsx('home-subtitle', 'home-title-clickable')}
          onClick={handleSegerClick}
        >
          {t('HomePage.SegerBlock.Button')}
        </Grid>
        <Grid size={{ sm: 1, xs: 1 }} />
      </Grid>
    </Stack>
  );
};
