import { Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import {
  EMAIL,
  GA_EMAIL_BUTTON_CLICKED,
  GA_INSTAGRAM_LINK_OPENED,
  GA_SEGER_LINK_OPENED,
  GA_TELEGRAM_LINK_OPENED,
  INSTAGRAM_LINK,
  RU_HOST,
  SEGER_LINK,
  TELEGRAM_LINK,
} from '../../application/constants';
import './Home.css';
import { useAnalyticsEventTracker } from '../../helpers/useAnalyticsEventTracker';
import { FirstParagraphBlock } from './FirstParagraphBlock';
import { FooterBlock } from './FooterBlock';
import { HeaderLogoBlock } from './HeaderLogoBlock';
import { SecondParagraphBlock } from './SecondParagraphBlock';
import { SegerBlock } from './SegerBlock';
import { changeLanguage } from '../../application/localization/localization';
import { Language } from '../../application/localization/locales';

export const Home: FC = () => {
  const gaEventTracker = useAnalyticsEventTracker('Home page');

  // Change language to ru, if user opens kononchuk.ru
  useEffect(() => {
    if (window.location.hostname === RU_HOST) {
      changeLanguage(Language.ru);
    }
  }, []);

  const handleTelegramClick = () => {
    gaEventTracker(GA_TELEGRAM_LINK_OPENED);
    window.location.assign(TELEGRAM_LINK);
  };
  const handleInstagramClick = () => {
    gaEventTracker(GA_INSTAGRAM_LINK_OPENED);
    window.location.assign(INSTAGRAM_LINK);
  };
  const handleSegerClick = () => {
    gaEventTracker(GA_SEGER_LINK_OPENED);
    window.location.assign(SEGER_LINK);
  };

  const handleEmailClick = () => {
    gaEventTracker(GA_EMAIL_BUTTON_CLICKED);
    window.location.assign(`mailto:${EMAIL}`);
  };

  return (
    <div className={'home-container'}>
      <Stack direction={'column'} spacing={6} alignItems={'center'}>
        <HeaderLogoBlock
          handleTelegramClick={handleTelegramClick}
          handleInstagramClick={handleInstagramClick}
          handleEmailClick={handleEmailClick}
        />
        <FirstParagraphBlock />
        <SecondParagraphBlock />
        <SegerBlock handleSegerClick={handleSegerClick} />
        <FooterBlock
          handleTelegramClick={handleTelegramClick}
          handleInstagramClick={handleInstagramClick}
          handleEmailClick={handleEmailClick}
        />
      </Stack>
    </div>
  );
};
