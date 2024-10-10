// src/components/TodoList/useTodoList.js
import { useState, useEffect } from "react";
import {
  fetchTasks,
  createTask,
  deleteTask,
} from "../services/taskServices.jsx";

export const useTodoList = (collectionId) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks(collectionId);
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, [collectionId]);

  const handleCreateTask = async () => {
    if (!title) return;

    await createTask(title, collectionId);
    setTitle(""); // Limpa o campo de entrada
    const fetchedTasks = await fetchTasks(collectionId);
    setTasks(fetchedTasks); // Atualiza a lista de tarefas
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const fetchedTasks = await fetchTasks(collectionId); // Atualiza a lista de tarefas
    setTasks(fetchedTasks);
  };

  return {
    tasks,
    title,
    setTitle,
    handleCreateTask,
    handleDeleteTask,
  };
};
