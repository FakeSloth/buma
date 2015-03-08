var config = {};

config.port = process.env.PORT || 3000;

config.mongodb = process.env.MONGODB || 'mongodb://localhost:27017/test';

module.exports = config;
