import { ButtonBase, Stack } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import InstIconFooter from '../../assets/home/inst_footer_icon.svg?react';
import TelegramIconFooter from '../../assets/home/tg_footer_icon.svg?react';
import EmailIconFooter from '../../assets/home/email_footer_icon.svg?react';
import { EMAIL } from '../../application/constants';

type OwnProps = {
  handleInstagramClick: () => void;
  handleTelegramClick: () => void;
  handleEmailClick: () => void;
};

export const FooterBlock: FC<OwnProps> = ({ handleInstagramClick, handleTelegramClick, handleEmailClick }) => {
  const { t } = useTranslation();
  return (
    <Stack direction={'column'} className={'home-footer'} justifyContent={'center'} alignItems={'center'} spacing={3}>
      <Stack direction={'row'} spacing={1.5}>
        <ButtonBase className={'footer-social-icon'} centerRipple onClick={handleInstagramClick}>
          <InstIconFooter />
        </ButtonBase>
        <ButtonBase className={'footer-social-icon'} centerRipple onClick={handleTelegramClick}>
          <TelegramIconFooter />
        </ButtonBase>
        <ButtonBase className={'footer-social-icon'} centerRipple onClick={handleEmailClick}>
          <EmailIconFooter />
        </ButtonBase>
      </Stack>
      <div className={'footer-title'}>{EMAIL}</div>
    </Stack>
  );
};
