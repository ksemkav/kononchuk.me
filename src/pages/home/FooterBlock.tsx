import { ButtonBase, Stack } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InstIconFooter from '../../assets/home/inst_footer_icon.svg?react';
import TelegramIconFooter from '../../assets/home/tg_footer_icon.svg?react';
import EmailIconFooter from '../../assets/home/email_footer_icon.svg?react';
import { DATENSCHUTZ_LINK, EMAIL, IMPRESSUM_LINK, INSTAGRAM_LINK, TELEGRAM_LINK } from '../../application/constants';

type OwnProps = {
  hideLegalLinks?: boolean;
};

export const FooterBlock: FC<OwnProps> = ({ hideLegalLinks = false }) => {
  const { t } = useTranslation();

  return (
    <Stack direction={'column'} className={'home-footer'} sx={{ justifyContent: 'center', alignItems: 'center' }} spacing={3}>
      <Stack direction={'row'} spacing={1.5}>
        <ButtonBase component={'a'} href={INSTAGRAM_LINK} aria-label={'Instagram'} className={'footer-social-icon'} centerRipple>
          <InstIconFooter />
        </ButtonBase>
        <ButtonBase component={'a'} href={TELEGRAM_LINK} aria-label={'Telegram'} className={'footer-social-icon'} centerRipple>
          <TelegramIconFooter />
        </ButtonBase>
        <ButtonBase component={'a'} href={`mailto:${EMAIL}`} aria-label={'Email'} className={'footer-social-icon'} centerRipple>
          <EmailIconFooter />
        </ButtonBase>
      </Stack>
      <div className={'footer-title'}>{EMAIL}</div>
      {!hideLegalLinks && (
        <Stack direction={'row'} spacing={2}>
          <Link className={'footer-legal-link'} to={IMPRESSUM_LINK}>
            {t('Footer.Impressum')}
          </Link>
          <Link className={'footer-legal-link'} to={DATENSCHUTZ_LINK}>
            {t('Footer.Datenschutz')}
          </Link>
        </Stack>
      )}
    </Stack>
  );
};
