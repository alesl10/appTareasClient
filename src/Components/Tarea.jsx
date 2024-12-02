import { MdDelete } from "react-icons/md";
import { UseAuth } from "../Context/AuthContext.jsx";
import { CiTimer } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const Tarea = ({ tarea }) => {
  const { eliminarTarea } = UseAuth();

  const deleteTarea = (id) => {
    eliminarTarea(id);
  };

  return (
    <div className="">
          <span className=" absolute -my-4 mx-16 font-bold text-textDark">{tarea.titulo}</span>
      <div className="flex items-center gap-4 ">
        {tarea.estado == "pendiente" ? (
            <CiTimer className="size-8 text-red-600" />
        ) : (
            <FaCheck className="size-8 text-green-600" />
        )}
        <span className=" font-semibold text-secondary bg-text rounded-full px-4 py-2   text-xl">
          {tarea.descripcion}
        </span>
        <button onClick={() => deleteTarea(tarea.id)}>
          <MdDelete className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default Tarea;
