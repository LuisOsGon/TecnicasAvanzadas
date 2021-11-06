const mongoose = require('mongoose');

const connectDB = async (url, opts = {}) => {
  try {
    await mongoose.connect(
        url,
        { ...opts, useNewUrlParser: true }
    );

    console.log(`Conexión con la DB establecida`);
  } catch (err) {
    console.warn(`Error al establecer conexión con la DB`, err);
    process.exit(1);
  }
}

module.exports = connectDB;
