import { firstSentence } from '.';

describe('#firstSentence', () => {
  test('returns the first sentence', () => {
    // when
    const sentence = firstSentence();

    // then
    expect(sentence).toBe('Mussum ipsum, cacilds vidis litro abertis.');
  });
});
