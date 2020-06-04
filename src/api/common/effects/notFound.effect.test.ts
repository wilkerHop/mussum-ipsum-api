import request from 'supertest';
import { createServer } from '@marblejs/core';
import { createHttpServerTestBed } from '@marblejs/core/dist/+internal/testing';
import { listener } from '../../../app';

describe('notFoundEffect$', () => {
  const server = createServer({ listener });
  const httpTestBed = createHttpServerTestBed(server);

  test('GET /undefined responds with 400', async () =>
    request(httpTestBed.getInstance())
      .get('/undefined')
      .expect(404, { error: { status: 404, message: 'Route not found' } }));
});
