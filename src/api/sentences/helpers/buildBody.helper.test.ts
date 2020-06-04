import { buildResponse } from '.';

describe('#buildBody', () => {
  test('returns response object with the given string', () => {
    // given
    const param = 'Bananis naniquis';

    // when
    const body = buildResponse(param);

    // then
    expect(body).toStrictEqual({ body: { mipsum: param } });
  });
});
