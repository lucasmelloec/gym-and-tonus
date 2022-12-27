import i18next from 'i18next';

import { I18n } from './I18n';

const resources = {};

export default class I18Next implements I18n {
  private readonly i18nextInstance: typeof i18next;

  constructor(readonly language: string) {
    i18next.init({
      resources,
      lng: language,
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
