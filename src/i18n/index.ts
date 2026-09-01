// ADR-0002: URL prefix /en/ = EN; otherwise ID. Single locale helper used everywhere.
export type Locale = 'id' | 'en';
export const defaultLocale: Locale = 'id';

export function ogLocale(locale: Locale): string {
  return locale === 'id' ? 'id_ID' : 'en_GB';
}

export function withLocale(path: string, locale: Locale): string {
  // path: "/team" -> "/team" (id) | "/en/team" (en)
  // "/" -> "/" | "/en"
  if (locale === 'id') return path;
  if (path === '/') return '/en';
  return `/en${path}`;
}

export function prefixFor(locale: Locale): string {
  return locale === 'id' ? '' : '/en';
}
