const mongoose = require('mongoose');

const connectDB = () => {
  try {
    const dbURI =
      process.env.environment === 'development'
        ? process.env.MONGO_DEVELOPMENT_URI
        : process.env.MONGO_URI;
    if (!dbURI) throw new Error(`Invalid URI: ${dbURI}`);
    mongoose
      .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to db successfully'));
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = connectDB;
