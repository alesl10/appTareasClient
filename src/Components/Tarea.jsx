import { MdDelete } from "react-icons/md";
import { UseAuth } from "../Context/AuthContext.jsx";
import { CiTimer } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const Tarea = ({ tarea }) => {
  const { eliminarTarea, tareaUpdate } = UseAuth();

  const deleteTarea = (id) => {
    eliminarTarea(id);
  };

  const update = (tarea) => {
    let modelo = { estado: "" };
    if (tarea.estado == "pendiente") {
      modelo = { estado: "finalizada" };
    } else {
      modelo = { estado: "pendiente" };
    }
    tareaUpdate(modelo, tarea.id);
  };

  return (
    <div className="">
      <span className=" absolute -my-3.5 mx-16 font-bold text-blue-900 " style={{ textShadow: "1px 1px 2px black" }}>
        {tarea.titulo}
      </span>
      <div className="flex items-center justify-between  gap-4 ">
        <button onClick={() => update(tarea)}>
          {tarea.estado == "pendiente" ? (
            <CiTimer className="size-8 text-red-600" />
          ) : (
            <FaCheck className="size-8 text-green-600" />
          )}
        </button>
        <span
          className={`${
            tarea.estado === "pendiente" ? "bg-text" : "bg-green-400"
          } font-semibold text-secondary rounded-full px-4 py-2 text-xl grow`}
        >
          {tarea.descripcion}
        </span>
        <button onClick={() => deleteTarea(tarea.id)}>
          <MdDelete className="size-8 text-red-800" />
        </button>
      </div>
    </div>
  );
};

export default Tarea;
