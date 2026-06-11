import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { LanguageSwitcher } from '../../application/localization/LanguageSwitcher';
import './LegalPage.css';

type OwnProps = PropsWithChildren<{
  variant: 'compact' | 'wide';
}>;

export const LegalPage: FC<OwnProps> = ({ children, variant }) => {
  return (
    <main className={'legal-page'}>
      <article className={clsx('legal-page-panel', `legal-page-panel-${variant}`)}>
        <div className={'legal-page-language-switcher'}>
          <LanguageSwitcher />
        </div>
        {children}
      </article>
    </main>
  );
};
