exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/data-processing';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/data-processing';
exports.PORT = process.env.PORT || 8080;

// mongoose global configuration
exports.mongoose = require('mongoose');
exports.mongoose.Promise = global.Promise;