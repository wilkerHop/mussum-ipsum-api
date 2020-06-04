import { sentences } from '../data';

export const randomSentence = () => {
  const randomIndex = Math.trunc(Math.random() * sentences.length);

  const sentence = sentences[randomIndex];

  const period = /[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(sentence.split('').pop()!)
    ? ''
    : '.';

  return sentence[0].toUpperCase() + sentence.slice(1) + period;
};
