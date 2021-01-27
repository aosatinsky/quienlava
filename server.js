// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const AutoLoad = require("fastify-autoload");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

fastify.register(require("fastify-cors"), {
  origin: true,
});

fastify.register(AutoLoad, {
  dir: path.join(__dirname, "routes"),
});

const start = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
