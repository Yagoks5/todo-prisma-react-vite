// src/components/TodoList/useTodoList.js
import { useState, useEffect } from "react";
import {
  fetchTasks,
  createTask,
  deleteTask,
} from "../services/taskServices.jsx";

// Mostrar as tarefas
export const useTodolist = (collectionId) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // Novo estado para tarefas concluídas

  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks(collectionId);
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, [collectionId]);

  // Criar uma tarefa
  const handleCreateTask = async () => {
    if (!title) return;

    await createTask(title, collectionId);
    setTitle(""); // Limpa o campo de entrada
    const fetchedTasks = await fetchTasks(collectionId);
    setTasks(fetchedTasks); // Atualiza a lista de tarefas
  };

  const handleCompleteTask = (taskId) => {
    // Move a tarefa para a lista de tarefas concluídas
    const taskToComplete = tasks.find((task) => task.id === taskId);
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setCompletedTasks((prev) => [
      ...prev,
      { ...taskToComplete, completed: true },
    ]);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId); // Chamando a função deleteTask do serviço
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setCompletedTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    completedTasks,
    title,
    setTitle,
    handleCreateTask,
    handleDeleteTask,
    handleCompleteTask,
  };
};
