import { t as tId } from '../data/i18n/id';
import { t as tEn } from '../data/i18n/en';

import type { Locale } from '../i18n/index';

export function resolveT(locale: Locale) {
  return locale === 'en' ? tEn : tId;
}
