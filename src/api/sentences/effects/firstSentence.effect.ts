import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { mapTo, map, catchError } from 'rxjs/operators';
import { firstSentence } from '../helpers';
import { throwError } from 'rxjs';

export const firstSentenceEffect$: HttpEffect = req$ =>
  req$.pipe(
    map(firstSentence),
    map(mipsum => ({ body: { mipsum } })),
    catchError(err =>
      throwError(
        new HttpError(
          `Unexpected error: ${err.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      ),
    ),
  );
