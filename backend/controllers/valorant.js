const apiHelper = require('../helpers/valorant');
const agentHelper = require('../helpers/filterData');
const mongoClient = require('../database/db')
const AgentCountHistSchema = require('../schemas/valorant.js');

async function getRoles(request, reply) {
    try {
        const agentsData = await apiHelper.fetchData();
        const filteredAgents = agentHelper.filterAgentsByRole(agentsData);
        // let mongoConnect = await mongoClient();
        const agentsByRole = filteredAgents.reduce((result, agent) => {
            const role = agent.role.displayName;

            if (!result[role]) {
                result[role] = [];
            }

            result[role].push({
                displayName: agent.displayName,
                displayIcon: agent.displayIcon,
            });

            return result;
        }, {});

        return agentsByRole;
    } catch (error) {
        reply.code(500).send({ error: error.message });
    }
}

async function getAgentByRole(request, reply) {
    try {
        const requestedRole = request.query.role;
        const agentsData = await apiHelper.fetchData();
        const filteredAgents = agentHelper.filterAgentsByRole(agentsData);
        const agentsWithRequestedRole = filteredAgents
            .filter(agent => agent.role && agent.role.displayName === requestedRole)
            .map(agent => ({
                displayName: agent.displayName,
                displayIcon: agent.displayIcon,
            }));

        return agentsWithRequestedRole;
    } catch (error) {
        reply.code(500).send({ error: error.message });
    }
}

async function updateAgentCount(request, response) {
    try{
        const { agentName } = request.params;
        console.log('Agent Name:', agentName);
       //const agent = await AgentCountHistSchema.count.find({ agentName });
       const existingAgent = await AgentCountHistSchema.findOne({ agentName:agentName });
       if(existingAgent){
            let agentCount = existingAgent.count;
            agentCount++;
            await AgentCountHistSchema.updateOne({ agentName: agentName }, { $set: { count: agentCount } });
       }    else {
            // If agent doesn't exist, create a new entry with a default count
            const newAgent = new AgentCountHistSchema({ agentName: agentName, count: 1 });
            await newAgent.save();
        }
        response.code(200).send({ message: 'Agent count updated successfully' });

       }catch(error){
        response.code(500).send({error: error.message });
    }
}

async function getAgentHist(request,response)   {
    try{
        const agentName = request.query.agent;
        console.log('Agent Name:', agentName);
       //const agent = await AgentCountHistSchema.count.find({ agentName });
       const existingAgent = await AgentCountHistSchema.findOne({ agentName:agentName });
       let agentCount = 0;
       if(existingAgent){
            agentCount = existingAgent.count;     
       } 
        return agentCount;
    }catch(error){
        response.code(500).send({error: error.message });
        }
}

module.exports = {
    getRoles,
    getAgentByRole,
    updateAgentCount,
    getAgentHist
};
