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
    let response = axios.post('/tareas', tarea);
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: error };

  }
};

export const deleteTarea = async (idTarea)=> {
  try {
    const response = await axios.delete(`/tareas/${idTarea}`)
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
}