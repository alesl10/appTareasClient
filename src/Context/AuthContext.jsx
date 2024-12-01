import { createContext, useContext, useEffect, useState } from "react";
import { login, addUsuario } from "../api/usuario.js";
import { getTareasByUser, addTarea, deleteTarea } from '../api/tareas.js'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth mus be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [tareas, setTareas] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    //logica para saber si esta logueado
    checkLogin();
    // console.log("Esta funcionando");
  }, []);

  // chequeo si esta logueado
  const checkLogin = async () => {
    const sesion = sessionStorage.getItem('usuario')
    if (sesion) {
      const usuario = JSON.parse(sesion)
      setUser(usuario)
      getTareas(usuario.id)
      navigate('/home')
    }
  }

  //logueo usuario
  const userLogin = async (usuario) => {
    try {
      let rsp = await login(usuario);
      // console.log(rsp);
      if (rsp.data) {
        const userDB = rsp.data.data;
        setUser(userDB)
        // console.log(userDB)
        sessionStorage.setItem('usuario', JSON.stringify(userDB))
      }
    } catch (error) {
      console.error("Error al loguear usuario:", error);
      return { success: false, message: "Error al loguear el usuario" };
    }
  };

  // Registro usuario
  const agregarUsuario = async (usuario) => {
    try {
      const response = await addUsuario(usuario);
      return response;
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      return { success: false, message: "Error al agregar el usuario" };
    }
  };

  //Obtener tareas usuario
  const getTareas = async (userId) => {
    try {
      const response = await getTareasByUser(userId);
      // console.log(response)
      setTareas(response.data)
      return response;
    } catch (error) {
      console.error("Error al obtener tareas:", error);
      return { success: false, message: "Error al obtener tareas" };
    }
  }

  // Agregar Tarea
  const agregarTarea = async (tarea) => {
    try {
      const response = await addTarea(tarea);
      if (response.data.data != null) {
        await getTareas(tarea.usuario_id)
      }
    } catch (error) {
      console.error("Error al crear tarea", error);
      return { success: false, message: "Error al crear tarea" };
    }
  }

  const eliminarTarea = async (idTarea) => {
    try {
      const response = await deleteTarea(idTarea)
      await getTareas(user.id)
    } catch (error) {
      console.error("Error al eliminar tarea", error);
      return { success: false, message: "Error al eliminar tarea" };
    }
  }

  return (
    <AuthContext.Provider value={{
      userLogin,
      agregarUsuario,
      agregarTarea,
      tareas,
      user,
      eliminarTarea
    }}>
      {children}
    </AuthContext.Provider>
  );
};
