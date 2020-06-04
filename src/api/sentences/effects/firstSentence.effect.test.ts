import request from 'supertest';
import { createServer } from '@marblejs/core';
import { createHttpServerTestBed } from '@marblejs/core/dist/+internal/testing';
import { listener } from '../../../app';

describe('firstSentence$', () => {
  const server = createServer({ listener });
  const httpTestBed = createHttpServerTestBed(server);

  test('GET /frases/ returns 200 and default sentence', () =>
    request(httpTestBed.getInstance())
      .get('/frases')
      .expect(200, '{"mipsum":"Mussum ipsum, cacilds vidis litro abertis."}'));
});
