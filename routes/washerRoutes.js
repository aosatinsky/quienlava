const handler = require('../handlers/washerHandler');

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return await handler.getDesignatedWasher();
  });
};
