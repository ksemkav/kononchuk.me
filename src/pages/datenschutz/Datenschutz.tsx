import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../application/localization/locales';
import { LegalPage } from '../legal/LegalPage';
import { useLegalPageMeta } from '../legal/useLegalPageMeta';
import datenschutzDeHtml from './datenschutz.de.html?raw';
import datenschutzEnHtml from './datenschutz.en.html?raw';

const fallbackLanguage = Language.de;
const datenschutzContent: Partial<Record<Language, string>> = {
  [Language.de]: datenschutzDeHtml,
  [Language.en]: datenschutzEnHtml,
};

export const Datenschutz: FC = () => {
  const { i18n, t } = useTranslation();
  const language = getContentLanguage(i18n.resolvedLanguage ?? i18n.language);
  const html = datenschutzContent[language] ?? datenschutzContent[fallbackLanguage];

  useLegalPageMeta();

  return (
    <LegalPage variant={'wide'}>
      <h1>{t('DatenschutzPage.Title')}</h1>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : <p>{t('DatenschutzPage.LoadError')}</p>}
    </LegalPage>
  );
};

function getContentLanguage(language: string): Language {
  const twoLetters = language.substring(0, 2);
  if (twoLetters === Language.de) return Language.de;
  if (twoLetters === Language.en) return Language.en;

  return fallbackLanguage;
}
