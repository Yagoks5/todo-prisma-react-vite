import axios from "axios";

const API_URL = "http://localhost:5001/tasks";

// Mostrar todas as tarefas
export const showAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao mostrar todas as tarefas", error);
    throw error;
  }
};

// Adicionar nova tarefa
export const addTask = async (title) => {
  try {
    const response = await axios.post(API_URL, { title });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar tarefa", error);
    throw error;
  }
};

// Atualizar status da tarefa (toggle)
export const toggleTask = async (id, completed) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      completed: !completed,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar a tarefa", error);
    throw error;
  }
};

// Deletar tarefa
export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5001/task/${id}`);
  } catch (error) {
    console.error("Erro ao deletar a tarefa", error);
    throw error;
  }
};
