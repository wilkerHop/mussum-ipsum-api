import request from 'supertest';
import { createServer } from '@marblejs/core';
import { createHttpServerTestBed } from '@marblejs/core/dist/+internal/testing';
import { listener } from '../../../app';

describe('firstSentence$', () => {
  const server = createServer({ listener });
  const httpTestBed = createHttpServerTestBed(server);

  test('GET /frases/random returns 200 and a string', () =>
    request(httpTestBed.getInstance())
      .get('/frases/random')
      .expect(({ ok, body }) => ok && typeof body.mipsum === 'string'));
});
