import { combineRoutes, EffectFactory } from '@marblejs/core';
import { rootEffect$, notFoundEffect$, preflightEffect$ } from './common';

const root$ = EffectFactory.matchPath('/').matchType('GET').use(rootEffect$);

const preflight$ = EffectFactory.matchPath('*')
  .matchType('OPTIONS')
  .use(preflightEffect$);

const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/', [root$, preflight$, notFound$]);
