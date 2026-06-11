import { Stack } from '@mui/material';
import { FC } from 'react';
import homeLogo from '../../assets/home/home_logo.svg';
import BackgroundImage from '../../assets/home/header_background.png';
import { SocialIconsBlock } from './SocialIconsBlock';

type OwnProps = {
  handleInstagramClick: () => void;
  handleTelegramClick: () => void;
  handleEmailClick: () => void;
};

export const HeaderLogoBlock: FC<OwnProps> = ({ handleInstagramClick, handleTelegramClick, handleEmailClick }) => {
  return (
    <Stack className={'home-header'} sx={{ alignItems: 'center' }}>
      <img className={'home-background-image'} src={BackgroundImage} />
      <img className={'home-logo'} src={homeLogo} />
      <SocialIconsBlock
        handleTelegramClick={handleTelegramClick}
        handleInstagramClick={handleInstagramClick}
        handleEmailClick={handleEmailClick}
      />
    </Stack>
  );
};
