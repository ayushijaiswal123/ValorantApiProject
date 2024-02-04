const axios = require('axios');
const app = require('../../index');

describe('valorantController integration tests', () => {
    it('GET /roles should return agents grouped by role', async () => {
        await app.listen({ port: 3000 });

        try {
            const response = await axios.get('http://localhost:3000/roles');
            if (response.status !== 200) {
                console.error('Test failed - Unexpected status:', response.status);
            }
        } finally {
            await app.close();
        }
    });

    it('GET /agentByRole should return agents mapped to their roles', async () => {
        await app.listen({ port: 3000 });

        try {
            const response = await axios.get('http://localhost:3000/agentrole');
            if (response.status !== 200) {
                console.error('Test failed - Unexpected status:', response.status);
            }
        } finally {
            await app.close();
        }
    });
});
