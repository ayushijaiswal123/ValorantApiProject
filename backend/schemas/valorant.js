const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentCountHistSchema = new mongoose.Schema({
    agentName: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
},{
    timeStamps: true
});


module.exports = mongoose.model('AgentCountHist', agentCountHistSchema);
