import request from 'supertest';
import { createServer } from '@marblejs/core';
import { createHttpServerTestBed } from '@marblejs/core/dist/+internal/testing';
import { listener } from '../../../app';

describe('preflightEffect$', () => {
  const server = createServer({ listener });
  const httpTestBed = createHttpServerTestBed(server);

  test('GET / responds with 200', async () =>
    request(httpTestBed.getInstance())
      .options('')
      .set('Content-Type', 'application/json')
      .expect(200));
});
