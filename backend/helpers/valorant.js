const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://valorant-api.com/v1/agents');
        return response.data.data;
    } catch (error) {
        console.error('Error during API request:', error.message);
        throw new Error('Internal Server Error');
    }
}

module.exports = {
    fetchData,
};