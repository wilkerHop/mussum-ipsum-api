import { createServer } from '@marblejs/core';
import { IO } from 'fp-ts/lib/IO';
import { listener } from '@app';

const server = createServer({
  port: 1337,
  hostname: '127.0.0.1',
  listener,
});

const main = async () => await (await server)();

const bootstrap: IO<void> = async () => {
  await main();
};

bootstrap();
