import { randomSentence } from '.';

describe('#randomSentence', () => {
  const mathRandom = Math.random;

  afterEach(() => {
    Math.random = mathRandom;
  });

  test('returns the expected sentence', () => {
    // mocks
    Math.random = () => 0.5;

    // when
    const sentence = randomSentence();

    // then
    expect(sentence).toBe(
      'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
    );
  });

  test('capitalizes first letter and adds period', () => {
    // mocks
    Math.random = () => 0.1;

    // when
    const sentence = randomSentence();

    // then
    expect(sentence).toBe('Manduma pindureta quium dia nois paga.');
  });
});
