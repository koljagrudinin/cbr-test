import { ParamMap } from '@angular/router';

export function getNumberOrNull(paramMap: ParamMap, key: string): number | null {
  const result = paramMap.get(key);

  if (result !== null && result !== undefined) {
    return Number(result);
  }

  return null;
}
