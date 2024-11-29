import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Loading from "../utils/loading.jsx";
import { useState } from "react";
import { UseAuth } from "../Context/AuthContext.jsx";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const {userLogin} = UseAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values)
    userLogin(values);
  });

  return (
    <div className="max-w-md m-auto my-10">
      <div className="border-2 bg-blue-200 m-auto w-[400px] rounded-3xl  shadow-lg shadow-primary">
        <div className="bg-primary px-7 py-2 rounded-t-3xl flex justify-between">
          <div>
            <h2 className="text-white text-xl ">Bienvenido a</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto px-8 p-4 ">
          <div className="mb-4">
            <input
              placeholder="Email"
              type="text"
              {...register("email", {
                required: "El Email es requerido",
              })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4 relative">
            <input
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"} // Alterna entre 'text' y 'password'
              {...register("password", {
                required: "La contraseña es requerida",
              })}
              className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}{" "}
              {/* Cambia el ícono */}
            </button>
            {errors.contraseña && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contraseña.message}
              </p>
            )}
          </div>

          {/* Botón de Login */}

          {isLoading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Login
            </button>
          )}
        </form>
        <div className="flex px-7 pb-4 items-center justify-around text-center">
          <span className="text-white font-semibold">No tenes usuario todavia ?</span>
          <button className="py-1 px-2 bg-green-300 text-white rounded-xl font-semibold hover:bg-blue-600 transition">
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
