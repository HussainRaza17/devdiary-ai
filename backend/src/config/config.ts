const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/enhanced-project',
    AI_API_KEY: process.env.AI_API_KEY || '',
    STORAGE_PATH: process.env.STORAGE_PATH || './data/storage.json',
};

module.exports = config;