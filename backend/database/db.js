const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const AgentCountHist = require('../schemas/valorant');

const mongoURI = 'mongodb+srv://reeta346rj:samuel-123@administrator.8mazjnv.mongodb.net/roles?retryWrites=true&w=majority';

let mongoClient = null;



const connectToMongoDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB via Mongoose'); 
        
        //const AgentCountModel = mongoose.model('AgentCount', agentCountSchema);

        

        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionExists = collections.some(collection => collection.name === 'agentcounthists');
        console.log(collections);

        if (!collectionExists) {
            console.error('AgentCountHist collection not found after creation.');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB via Mongoose:', error.message);
        throw error;
    }
};

module.exports = connectToMongoDB
