// src/services/taskServices.js
import axios from "axios";

const API_URL = "http://localhost:5001/tasks";

export const fetchTasks = async (collectionId) => {
  const response = await axios.get(`${API_URL}?collectionId=${collectionId}`);
  return response.data;
};

export const createTask = async (title, collectionId) => {
  const response = await axios.post(API_URL, { title, collectionId });
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`http://localhost:5001/task/${id}`);
};
