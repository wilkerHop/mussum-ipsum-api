import { HttpEffect } from '@marblejs/core';
import { mapTo } from 'rxjs/operators';

export const rootEffect$: HttpEffect = req$ =>
  req$.pipe(mapTo({ body: `Cacildis` }));
