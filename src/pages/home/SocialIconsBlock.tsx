import { ButtonBase, Stack } from '@mui/material';
import { FC } from 'react';
import InstIcon from '../../assets/home/inst_icon.svg?react';
import TelegramIcon from '../../assets/home/tg_icon.svg?react';
import EmailIcon from '../../assets/home/email_icon.svg?react';
import homeSubheader from '../../assets/home/home_subheader.svg';
import { EMAIL, INSTAGRAM_LINK, TELEGRAM_LINK } from '../../application/constants';

export const SocialIconsBlock: FC = () => {
  return (
    <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }} className={'home-social-row'}>
      <img className={'home-subheader-logo'} src={homeSubheader} />
      <Stack direction={'row'} sx={{ justifyContent: 'end', alignItems: 'center' }} spacing={2}>
        <ButtonBase component={'a'} href={INSTAGRAM_LINK} aria-label={'Instagram'} className={'home-social-icon'} centerRipple>
          <InstIcon />
        </ButtonBase>
        <ButtonBase component={'a'} href={TELEGRAM_LINK} aria-label={'Telegram'} className={'home-social-icon'} centerRipple>
          <TelegramIcon />
        </ButtonBase>
        <ButtonBase component={'a'} href={`mailto:${EMAIL}`} aria-label={'Email'} className={'home-social-icon'} centerRipple>
          <EmailIcon />
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
