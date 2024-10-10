const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função para mostrar todas as tarefas
const showAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany(); // Buscar todas as tarefas (usar findmany)
    res.json(tasks); // Retorna as tarefas encontradas
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as tarefas" }); // Retorna um erro em caso de falha // colocar no front
  }
};

// Função para criar uma tarefa
const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "O campo titulo é necessário" }); //Jogar o erro no front!
  }
  try {
    const task = await prisma.task.create({
      data: {
        title: title,
        completed: false, // Define o campo completed como false por padrão
      },
    });
    res.status(201).json(task); // Retorna a tarefa criada
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    return res.json({ error });
  }
};

// Função para atualizar uma tarefa. Criei de besta
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) }, // Busca a tarefa pelo ID
      data: { completed }, // Atualiza o campo completed
    });
    return res.json(task);
  } catch (error) {
    return res.json({ error });
  }
};

// Função para deletar uma tarefa
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: Number(id) }, // Converte o ID para número
    });
    return res.json({ message: "Tarefa deletada" }); // Retorna uma resposta de sucesso
  } catch (error) {
    return res.json({ error });
  }
};

// Funcão para criar a collection.
const createCollection = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "O nome da coleção é necessário" });
  }

  try {
    const collection = await prisma.collection.create({
      data: { name },
    });
    return res.status(201).json(collection); // Retorna a coleção criada
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar coleção" });
  }
};

// Função para mostrar todas as collections
const showAllCollections = async (req, res) => {
  try {
    const collections = await prisma.collection.findMany(); // Busca todas as collections
    res.json(collections); // Retorna as collections encontradas
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as collections" }); // Retorna um erro em caso de falha
  }
};

module.exports = { showAllTasks, createTask, updateTask, deleteTask, createCollection, showAllCollections }; // Exportar as  as funções!!!!!
