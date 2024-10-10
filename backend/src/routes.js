const express = require("express");
const {
  showAllTasks,
  createTask,
  updateTask,
  deleteTask,
  createCollection,
  showAllCollections,
} = require("./controller/TodoController"); // Tive problemas com ModuleJS, usei o CommonJs. Pesquisar porq
// Erro ao trocar o T por t.

const router = express.Router();

// Rotas para a API - Tarefas
router.get("/tasks", showAllTasks); // Mostrar todas as tarefas
router.post("/tasks", createTask); // Criar uma tarefa
router.patch("/tasks/:id", updateTask); // Atualizar tarefa - deletar isso!
router.delete("/task/:id", deleteTask); // Deletar tarefa

// Rotas para Collections
router.post("/collections", createCollection); // Criar collection ?
router.get("/collections", showAllCollections); // Mostrar todas as tarefas

module.exports = { router }; // Exportar o router !!!!!!!!!!!!!
