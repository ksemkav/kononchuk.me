import { ru } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';
import { de } from 'date-fns/locale';

export enum Language {
  'ru' = 'ru',
  'en' = 'en',
  'de' = 'de',
}

export type Namespace = 'translation';

export const dateLocales: {
  [key in Language | 'default']: typeof ru;
} = {
  ru: ru,
  en: enUS,
  de: de,
  default: enUS,
};

export const fallbackLng: Language = Language.en;
export const defaultNS: Namespace = 'translation';

export const languages: Language[] = Object.values(Language);
export const namespaces = [defaultNS];
