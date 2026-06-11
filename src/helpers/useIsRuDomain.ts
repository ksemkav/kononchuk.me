import { RU_HOST } from '../application/constants';

export function useIsRuDomain() {
  return window.location.hostname === RU_HOST;
}
