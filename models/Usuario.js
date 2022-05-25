const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // Quitar los espacios al inicio y al final
  },
  apellido: {
    type: String,
    required: true,
    trim: true, // Quitar los espacios al inicio y al final
  },
  email: {
    type: String,
    required: true,
    trim: true, // Quitar los espacios al inicio y al final
    unique: true, //unico en la base de datos
  },
  password: {
    type: String,
    required: true,
    trim: true, // Quitar los espacios al inicio y al final
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
