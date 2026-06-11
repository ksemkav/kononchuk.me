import { FC, PropsWithChildren, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { LanguageSwitcher } from '../../application/localization/LanguageSwitcher';
import './LegalPage.css';

type OwnProps = PropsWithChildren<{
  variant: 'compact' | 'wide';
}>;

export const LegalPage: FC<OwnProps> = ({ children, variant }) => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

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
