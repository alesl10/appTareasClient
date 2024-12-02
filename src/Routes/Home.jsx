import { UseAuth } from "../Context/AuthContext.jsx";
import Tarea from "../Components/Tarea.jsx";
import { useForm } from "react-hook-form";

const Home = () => {
  const { user, tareas, agregarTarea } = UseAuth();
  const { register, handleSubmit, reset } = useForm();

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
        <div className="flex flex-col gap-3 items-center">
          {tareas.map((tarea, index) => (
            <Tarea key={index} tarea={tarea} />
          ))}
        </div>
      </div>
      <form className="max-w-[80%] flex flex-col gap-2" onSubmit={onSubmit}>
        <input
          className=" font-semibold text-text bg-s rounded-full px-4 py-2   text-xl"
          type="text"
          placeholder="titulo"
          {...register("titulo")}
        />
        <textarea
          className=" font-semibold text-text  rounded-full px-4 py-2   text-xl"
          cols={50}
          type="text"
          placeholder="tarea"
          {...register("descripcion")}
        />
        <button className="text-[#f9b000] px-2 m-auto bg-[#023F87] rounded-lg border ">
          Crear tarea
        </button>
      </form>
    </div>
  );
};

export default Home;
