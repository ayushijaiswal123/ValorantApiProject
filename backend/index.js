const fastify = require('fastify')({ logger: true });
const connectToMongoDB = require('./database/db');
const cors = require('cors');

connectToMongoDB();
fastify.register(require('./routes/valorant'));


fastify.register(require('@fastify/cors'), {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
});

fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);
    reply.code(500).send({ error: 'Internal Server Error' });
});


const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`Server is running on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();

module.exports = fastify;