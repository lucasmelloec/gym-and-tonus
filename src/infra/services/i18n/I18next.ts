import i18next from 'i18next';
import 'intl-pluralrules';

import en from '../../../../locales/en.json';
import pt from '../../../../locales/pt.json';

import { I18n } from './I18n';

const resources = {
  en,
  pt,
};

export default class I18Next implements I18n {
  private readonly i18nextInstance: typeof i18next;

  constructor(readonly language: string) {
    i18next.init({
      resources,
      lng: language,
      fallbackLng: 'en-US',
      interpolation: {
        escapeValue: false,
      },
    });
    this.i18nextInstance = i18next;
  }

  translate(key: string, defaultValue?: string) {
    if (defaultValue) {
      return this.i18nextInstance.t(key, defaultValue);
    }
    return this.i18nextInstance.t(key);
  }
}
