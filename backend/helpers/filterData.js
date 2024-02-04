function filterAgentsByRole(agentsData) {
    return agentsData.filter(agent => agent.role && agent.role.displayName);
}

module.exports = {
    filterAgentsByRole,
};