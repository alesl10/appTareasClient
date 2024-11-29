import { createContext, useContext, useEffect } from "react";
import { login, addUsuario } from "../api/usuario.js";

export const AuthContext = createContext();
export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth mus be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    console.log("Esta funcionando");
  }, []);

  const userLogin = async (usuario) => {
    try {
      let rsp = await login(usuario);
      console.log(rsp);
    } catch (error) {
      console.error("Error al loguear usuario:", error);
      return { success: false, message: "Error al loguear el usuario" };
    }
  };

  const agregarUsuario = async (usuario) => {
    try {
      const response = await addUsuario(usuario);
      return response;
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      return { success: false, message: "Error al agregar el usuario" };
    }
  };

  return (
    <AuthContext.Provider value={{ userLogin, agregarUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};
