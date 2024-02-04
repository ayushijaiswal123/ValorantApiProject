// tests/unit/agentHelper.test.js
const agentHelper = require('../../helpers/filterData');

describe('agentHelper', () => {
    it('filterAgentsByRole should filter agents with role', () => {
        const agentsData = [
            { role: { displayName: 'Role1' }, name: 'Agent1' },
            { role: { displayName: 'Role2' }, name: 'Agent2' },
            { name: 'Agent3' },
        ];

        const result = agentHelper.filterAgentsByRole(agentsData);

        expect(result).toEqual([
            { role: { displayName: 'Role1' }, name: 'Agent1' },
            { role: { displayName: 'Role2' }, name: 'Agent2' },
        ]);
    });
});
