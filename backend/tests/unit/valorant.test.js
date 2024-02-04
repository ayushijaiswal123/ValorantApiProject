// tests/unit/apiHelper.test.js
const axios = require('axios');
const apiHelper = require('../../helpers/valorant');

jest.mock('axios');

describe('apiHelper', () => {
    it('fetchData should return agents data', async () => {
        const mockData = { data: { data: ['agent1', 'agent2'] } };
        axios.get.mockResolvedValue(mockData);

        const result = await apiHelper.fetchData();

        expect(result).toEqual(['agent1', 'agent2']);
    });

    it('fetchData should throw an error on API failure', async () => {
        axios.get.mockRejectedValue(new Error('API Error'));

        await expect(apiHelper.fetchData()).rejects.toThrowError('Internal Server Error');
    });
});
