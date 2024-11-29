import axios from "./axios.js";

export const addUsuario = async (usuario) => {
  try {
    let response = await axios.post("/register", usuario);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) => {
  try {
    let response = await axios.post("/login", usuario);
    return response;
  } catch (error) {
    console.log(error);
  }
};
