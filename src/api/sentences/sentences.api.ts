import { EffectFactory, combineRoutes } from '@marblejs/core';
import { firstSentenceEffect$ } from './effects';

const root$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(firstSentenceEffect$);

export const sentences$ = combineRoutes('/frases', [root$]);
