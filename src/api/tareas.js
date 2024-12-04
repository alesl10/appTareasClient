import axios from "./axios.js";

export const getTareasByUser = async (userId) => {
  try {
    let response = axios.get(`/tareas/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};

export const addTarea = async (tarea) => {
  try {
    let response = await axios.post("/tareas", tarea);
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};

export const deleteTarea = async (idTarea) => {
  try {
    const response = await axios.delete(`/tareas/${idTarea}`);
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};

export const updateTarea = async (estado, id) => {
  try {
    const response = await axios.put(`/tareas/${id}`, estado);
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};
