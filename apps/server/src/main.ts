/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { app } from './app/app';

const port = process.env.PORT || 3333;
console.info(' ::: port ::: ', port);
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
