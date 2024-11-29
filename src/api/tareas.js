import axios from "./axios.js";

export const getTareasByUser = async (userId) => {
  try {
    let response = axios.get(`/tareas/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
