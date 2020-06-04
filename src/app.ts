import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { logger$ } from '@marblejs/middleware-logger';
import { cors$ } from './api/common';
import { api$ } from './api';

const middlewares = [cors$, bodyParser$(), logger$()];

const effects = [api$];

export const listener = httpListener({ middlewares, effects });
