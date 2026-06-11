import { Stack } from '@mui/material';
import { FC } from 'react';
import homeLogo from '../../assets/home/home_logo.svg';
import BackgroundImage from '../../assets/home/header_background.png';
import { SocialIconsBlock } from './SocialIconsBlock';

export const HeaderLogoBlock: FC = () => {
  return (
    <Stack className={'home-header'} sx={{ alignItems: 'center' }}>
      <img className={'home-background-image'} src={BackgroundImage} />
      <img className={'home-logo'} src={homeLogo} />
      <SocialIconsBlock />
    </Stack>
  );
};
