import { HttpEffect, HttpError, HttpStatus } from '@marblejs/core';
import { map, catchError } from 'rxjs/operators';
import { randomSentence, buildResponse } from '../helpers';
import { throwError } from 'rxjs';

export const randomSentenceEffect$: HttpEffect = req$ =>
  req$.pipe(
    map(randomSentence),
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
