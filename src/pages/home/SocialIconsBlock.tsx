import { ButtonBase, Stack } from '@mui/material';
import { FC } from 'react';
import InstIcon from '../../assets/home/inst_icon.svg?react';
import TelegramIcon from '../../assets/home/tg_icon.svg?react';
import EmailIcon from '../../assets/home/email_icon.svg?react';
import homeSubheader from '../../assets/home/home_subheader.svg';

type OwnProps = {
  handleInstagramClick: () => void;
  handleTelegramClick: () => void;
  handleEmailClick: () => void;
};

export const SocialIconsBlock: FC<OwnProps> = ({ handleInstagramClick, handleTelegramClick, handleEmailClick }) => {
  return (
    <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }} className={'home-social-row'}>
      <img className={'home-subheader-logo'} src={homeSubheader} />
      <Stack direction={'row'} sx={{ justifyContent: 'end', alignItems: 'center' }} spacing={2}>
        <ButtonBase className={'home-social-icon'} centerRipple onClick={handleInstagramClick}>
          <InstIcon />
        </ButtonBase>
        <ButtonBase className={'home-social-icon'} centerRipple onClick={handleTelegramClick}>
          <TelegramIcon />
        </ButtonBase>
        <ButtonBase className={'home-social-icon'} centerRipple onClick={handleEmailClick}>
          <EmailIcon />
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
