import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../utils/loading.jsx";
import { UseAuth } from "../Context/AuthContext.jsx";

const Registrar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userLogin, agregarUsuario } = UseAuth();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    if (values.contraseña !== values.contraseñaConfirm) {
      setError('contraseñaConfirm', { message: "La contraseña no coincide" });
      return;
    }

    const rsp = await agregarUsuario(values);
    console.log(rsp);
    reset();
  });

  return (
    <div className="max-w-md m-auto my-10">
      <div className="border-2 bg-blue-200 m-auto w-[400px] rounded-3xl shadow-lg shadow-primary">
        <div className="bg-primary px-7 py-2 rounded-t-3xl flex justify-between">
          <div>
            <h2 className="text-white text-xl ">Registrate</h2>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mx-auto px-8 p-4">
          <div className="mb-4">
            <input
              placeholder="Nombre"
              type="text"
              {...register("nombre", { required: "El Nombre es requerido" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Apellido"
              type="text"
              {...register("apellido", { required: "El Apellido es requerido" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Usuario"
              type="text"
              {...register("usuario", { required: "El Usuario es requerido" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.usuario && <p className="text-red-500 text-sm mt-1">{errors.usuario.message}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              type="text"
              {...register("email", { required: "El Email es requerido" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4 relative">
            <input
              placeholder="Contraseña"
              type="password"
              {...register("contraseña", { required: "La contraseña es requerida" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div className="mb-4 relative">
            <input
              placeholder="Confirmar Contraseña"
              type="password"
              {...register("contraseñaConfirm", { required: "La contraseña es requerida" })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.passwordConfirm && <p className="text-red-500 text-sm mt-1">{errors.passwordConfirm.message}</p>}
          </div>

          {/* Botón de Login */}
          {isLoading ? (
            <Loading />
          ) : (
            <button type="submit" className="w-full py-2 bg-primary text-white rounded-md font-semibold hover:bg-blue-600 transition">
              Registrar
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registrar;
