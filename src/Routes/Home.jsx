import { UseAuth } from "../Context/AuthContext.jsx";
import Tarea from "../Components/Tarea.jsx";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { user, tareas, agregarTarea } = UseAuth();
  const { register, handleSubmit, reset } = useForm();
  const { estado: str } = useParams();
  const [filteredTareas, setFilteredTareas] = useState([]);

  useEffect(() => {
    if (str) {
      // console.log(tareas)
      setFilteredTareas(tareas.filter((tarea) => tarea.estado == str));
    } else {
      setFilteredTareas(tareas);
    }
  }, [tareas]);

  // Agregar tarea
  const onSubmit = handleSubmit((values) => {
    const task = { ...values, usuario_id: user.id };
    agregarTarea(task);
    reset();
  });

  return (
    <div className=" flex flex-col justify-between items-center h-full py-3 ">
      <div className="flex flex-col items-center gap-5">
        <h1 className=" text-6xl font-bold text-textDark">CheckList</h1>
        {user ? (
          <h2 className="text-center text-xl">
            Name: {user.nombre} {user.apellido}
          </h2>
        ) : (
          ""
        )}
        <div className="flex container flex-col gap-3 items-start  ">
          {filteredTareas.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} />
          ))}
        </div>
      </div>
      <form
        className="max-w-[80%]  my-3 flex flex-col gap-2"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2 lg:flex-row justify-between">
          <input
            className=" font-semibold  text-text bg-s rounded-full px-4 py-2   text-xl"
            type="text"
            placeholder="titulo"
            {...register("titulo")}
          />
          <select
            className=" font-semibold  text-text bg-s rounded-full px-4 py-2   text-xl"
            {...register("estado")}
          >
            <option value="pendiente">Pendiente</option>
            <option value="finalizada">Finalizada</option>
          </select>
        </div>
        <textarea
          className=" font-semibold text-text  rounded-full px-4 py-2   text-xl"
          cols={50}
          type="text"
          placeholder="tarea"
          {...register("descripcion")}
        />
        <button className="text-textDark border-2 border-textDark px-2 m-auto bg-white rounded-lg hover:bg-textDark hover:text-white ">
          Crear tarea
        </button>
      </form>
    </div>
  );
};

export default Home;
