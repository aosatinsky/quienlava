const handler = require("../handlers/washerHandler");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return handler.getDesignatedWasher();
  });

  fastify.get("/feed", async function (request, reply) {
    return handler.getFeed();
  });
};
