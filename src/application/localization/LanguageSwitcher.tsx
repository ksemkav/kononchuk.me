import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { changeLanguage } from './localization';
import { Language } from './locales';
import './LanguageSwitcher.css';

type OwnProps = {
  variant?: 'dark' | 'light';
};

const switcherLanguages = [
  { language: Language.en, label: 'EN' },
  { language: Language.de, label: 'DE' },
];

export const LanguageSwitcher: FC<OwnProps> = ({ variant = 'light' }) => {
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language).substring(0, 2);

  return (
    <div className={clsx('language-switcher', `language-switcher-${variant}`)} aria-label={'Language switcher'}>
      {switcherLanguages.map(({ language, label }) => {
        const isActive = currentLanguage === language;

        return (
          <button
            key={language}
            type={'button'}
            className={clsx('language-switcher-button', isActive && 'language-switcher-button-active')}
            aria-pressed={isActive}
            onClick={() => changeLanguage(language)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
