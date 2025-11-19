import { FC, PropsWithChildren, useEffect, useState } from 'react';
import backgroundPattern from '../../assets/pattern.svg';
import './ResponsivePage.css';

export type OwnProps = PropsWithChildren<{}>;

export const ResponsivePage: FC<OwnProps> = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 450;

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: '250px',
        backgroundAttachment: 'fixed',
        height: '100%',
      }}
    >
      <div className={'page-container'}>{children}</div>
    </div>
  );
};
