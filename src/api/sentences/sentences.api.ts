import { EffectFactory, combineRoutes } from '@marblejs/core';
import { firstSentenceEffect$, randomSentenceEffect$ } from './effects';

const root$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(firstSentenceEffect$);

const random$ = EffectFactory.matchPath('/random')
  .matchType('GET')
  .use(randomSentenceEffect$);

export const sentences$ = combineRoutes('/frases', [root$, random$]);
