const { model, Schema } = require("mongoose");

// titulo, descricao, status (finalizada/pendente)
const Tarefa = model(
  "tarefa", // nome do modelo (base p/ coleção)
  new Schema({
    // validação do documento
    titulo: {
      type: String, // String, number, boolean
      required: true, // campo obrigatório
    },
    descricao: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pendente", // define o status inicial
    },
  })
);
module.exports = Tarefa;
