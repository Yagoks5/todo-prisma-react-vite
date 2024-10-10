import { useState, useEffect } from "react";
import {
  showAllTasks,
  addTask,
  toggleTask,
  deleteTask,
} from "../services/taskServices.jsx";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(""); // Estado para a mensagem de erro

  // Carregar todas as tarefas quando o hook for usado
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const allTasks = await showAllTasks();
        setTasks(allTasks);
      } catch (error) {
        console.error("Erro ao carregar tarefas", error);
      }
    };
    fetchTasks();
  }, []);

  // Função para adicionar nova tarefa
  const handleAddTask = async () => {
    if (!newTask.trim()) {
      setError("Por favor, digite uma tarefa");
      return;
    }
    setError(""); // Limpar a mensagem de erro ao adicionar corretamente

    try {
      const addedTask = await addTask(newTask);
      setTasks([...tasks, addedTask]);
      setNewTask(""); // Limpar o input após adicionar
    } catch (error) {
      console.error("Erro ao adicionar tarefa", error);
    }
  };

  // Função para alternar o status da tarefa
  const handleToggleTask = async (id, completed) => {
    try {
      const updatedTask = await toggleTask(id, completed);
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error("Erro ao atualizar tarefa", error);
    }
  };

  // Função para deletar tarefa
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa", error);
    }
  };

  // Filtrar tarefas ativas e completadas
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return {
    tasks,
    activeTasks,
    completedTasks,
    newTask,
    setNewTask,
    error,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  };
};
