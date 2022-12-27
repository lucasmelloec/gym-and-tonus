import React, { useContext } from 'react';

type I18nTranslateFunction = (key: string, defaultValue?: string) => string;

export interface I18n {
  translate: I18nTranslateFunction;
}

interface I18nContext {
  t: I18nTranslateFunction;
}

const I18nContext = React.createContext<I18nContext | null>(null);

export const I18nContextProvider = I18nContext.Provider;

export const useI18n = () => {
  const i18nContext = useContext(I18nContext);
  if (i18nContext == null) {
    throw new Error('Only use useI18n context hook inside of I18nContext');
  }
  return i18nContext;
};
