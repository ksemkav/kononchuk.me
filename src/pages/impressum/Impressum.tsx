import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { EMAIL } from '../../application/constants';
import { LegalPage } from '../legal/LegalPage';
import { useLegalPageMeta } from '../legal/useLegalPageMeta';

const phoneNumber = '+4915730753859';

export const Impressum: FC = () => {
  const { t } = useTranslation();

  useLegalPageMeta();

  return (
    <LegalPage variant={'compact'}>
      <div className={'legal-page-content-compact'}>
        <h1>{t('ImpressumPage.Title')}</h1>
        <p>
          Semen Kononchuk<br />
          Cäciliastraße 19<br />
          76135 Karlsruhe
        </p>

        <section aria-labelledby={'contact-title'}>
          <h2 id={'contact-title'}>{t('ImpressumPage.ContactTitle')}</h2>
          <p className={'legal-page-contact-line'}>
            {t('ImpressumPage.PhoneLabel')}: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </p>
          <p className={'legal-page-contact-line'}>
            {t('ImpressumPage.EmailLabel')}: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </section>
      </div>
    </LegalPage>
  );
};
