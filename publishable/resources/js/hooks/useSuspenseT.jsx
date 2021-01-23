import React from 'react';
import { useTranslation } from 'react-i18next';
import SuspenseNull from '../components/Suspense/SuspenseNull';

const useSuspenseT = (key, namespace = '') => {
  const { t } = useTranslation(namespace);
  return (
    <SuspenseNull>
      {t(key)}
    </SuspenseNull>
  );
};

export default useSuspenseT;
