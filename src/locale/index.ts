import { createI18n } from 'vue-i18n';
import en from './lang/en';

const i18n = createI18n({
  warnHtmlInMessage: 'off',
  warnHtmlMessage: false,
  locale: 'en',
  silentTranslationWarn: process.env.NODE_ENV == 'production',
  messages: {
    en,
  },
});

export const { t } = i18n.global;

export default i18n;
