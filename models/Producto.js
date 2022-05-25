const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // Quitar los espacios al inicio y al final
  },
  existencia: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    trim: true,
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

ProductoSchema.index({ nombre: "text" });

module.exports = mongoose.model("Producto", ProductoSchema);
