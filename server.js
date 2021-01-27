// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const AutoLoad = require('fastify-autoload');
const path = require('path');
require('dotenv').config();

fastify.register(require('fastify-cors'), {
  origin: true,
});

fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
});

const start = async () => {
  try {
    await fastify.listen(8080);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
