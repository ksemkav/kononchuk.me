import React, { useEffect, useState } from 'react';
import { initializeLocalization } from './localization';

type OwnProps = {
  children?: React.ReactNode;
};

export const LanguageProvider: React.FC<OwnProps> = (props) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await initializeLocalization();
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  return isLoading ? null : <>{props.children}</>;
};
