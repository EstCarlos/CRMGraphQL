const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" }); // leer variables de entorno

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewurlParser: true,
    });
    console.log("Db Conectada");
  } catch (error) {
    console.log("hubo un error");
    console.log(error);
    process.exit(1); //detener la app
  }
};

module.exports = conectarDB;
