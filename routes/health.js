module.exports = async function (fastify, opts) {
    fastify.get("/api/health", async function (request, reply) {
      return { hello: "World" };
    });
  };
  