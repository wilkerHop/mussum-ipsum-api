import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { map, catchError } from 'rxjs/operators';
import { firstSentence, buildResponse } from '../helpers';
import { throwError } from 'rxjs';

export const firstSentenceEffect$: HttpEffect = req$ =>
  req$.pipe(
    map(firstSentence),
    map(buildResponse),
    catchError(err =>
      throwError(
        new HttpError(
          `Unexpected error: ${err.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      ),
    ),
  );
