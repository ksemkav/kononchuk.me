import { Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import './Home.css';
import { FirstParagraphBlock } from './FirstParagraphBlock';
import { FooterBlock } from './FooterBlock';
import { HeaderLogoBlock } from './HeaderLogoBlock';
import { SecondParagraphBlock } from './SecondParagraphBlock';
import { SegerBlock } from './SegerBlock';
import { changeLanguage } from '../../application/localization/localization';
import { Language } from '../../application/localization/locales';
import { useIsRuDomain } from '../../helpers/useIsRuDomain';

export const Home: FC = () => {
  const isRuDomain = useIsRuDomain();

  // Change language to ru, if user opens kononchuk.ru
  useEffect(() => {
    if (isRuDomain) {
      changeLanguage(Language.ru);
    }
  }, [isRuDomain]);

  return (
    <div className={'home-container'}>
      <Stack direction={'column'} spacing={6} sx={{ alignItems: 'center' }}>
        <HeaderLogoBlock />
        <FirstParagraphBlock />
        <SecondParagraphBlock />
        <SegerBlock />
        <FooterBlock hideLegalLinks={isRuDomain} />
      </Stack>
    </div>
  );
};
