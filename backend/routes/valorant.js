// routes/example.js
const valoController = require('../controllers/valorant');

async function routes(fastify, options) {
    fastify.get('/roles', valoController.getRoles);
    fastify.get('/agentroles', valoController.getAgentByRole);
    fastify.post('/agent/:agentName', valoController.updateAgentCount);
    fastify.get('/agenthist',valoController.getAgentHist);
}

module.exports = routes;
