import { Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import { RU_HOST } from '../../application/constants';
import './Home.css';
import { FirstParagraphBlock } from './FirstParagraphBlock';
import { FooterBlock } from './FooterBlock';
import { HeaderLogoBlock } from './HeaderLogoBlock';
import { SecondParagraphBlock } from './SecondParagraphBlock';
import { SegerBlock } from './SegerBlock';
import { changeLanguage } from '../../application/localization/localization';
import { Language } from '../../application/localization/locales';

export const Home: FC = () => {
  // Change language to ru, if user opens kononchuk.ru
  useEffect(() => {
    if (window.location.hostname === RU_HOST) {
      changeLanguage(Language.ru);
    }
  }, []);

  return (
    <div className={'home-container'}>
      <Stack direction={'column'} spacing={6} sx={{ alignItems: 'center' }}>
        <HeaderLogoBlock />
        <FirstParagraphBlock />
        <SecondParagraphBlock />
        <SegerBlock />
        <FooterBlock />
      </Stack>
    </div>
  );
};
