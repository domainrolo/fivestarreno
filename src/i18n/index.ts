import { en, type Dict } from './en';
import { ko } from './ko';

export type Lang = 'en' | 'ko';
export const languages: Lang[] = ['en', 'ko'];
export const defaultLang: Lang = 'en';

const dicts: Record<Lang, Dict> = { en, ko };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/** Builds a locale-aware path. `path` is always the English path, without a locale prefix. */
export function href(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}`;
  return lang === defaultLang ? clean : `/ko${clean === '/' ? '' : clean}`;
}

/** Strips the locale prefix from a live pathname, giving the canonical English path. */
export function stripLang(pathname: string): string {
  const p = pathname.replace(/\/$/, '') || '/';
  if (p === '/ko') return '/';
  if (p.startsWith('/ko/')) return p.slice(3);
  return p;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ko' : 'en';
}

export type { Dict };
