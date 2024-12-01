import { UseAuth } from '../Context/AuthContext.jsx'
import Tarea from '../Components/Tarea.jsx'
import { useForm } from 'react-hook-form';

const Home = () => {
    const { user, tareas, agregarTarea } = UseAuth();
    const { register, handleSubmit, reset } = useForm();

    // Agregar tarea
    const onSubmit = handleSubmit((values) => {
        const task = {...values, usuario_id:user.id}
        agregarTarea(task);
        reset()
    })

    return (
        <div className=' flex flex-col justify-center items-center'>
            <h2>Mis tareas</h2>
            <form className='max-w-[80%] flex flex-col gap-2' onSubmit={onSubmit}>
                <input className=' border   px-2' type="text" placeholder="titulo" {...register('titulo')} />
                <textarea className=' border  px-2' cols={50} type="text" placeholder="tarea" {...register('descripcion')} />
                <button className='text-[#f9b000] w-[30%] m-auto bg-[#023F87] rounded-md border '>Crear tarea</button>
            </form>
            <ul>
                {tareas.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea} />
                ))
                }
            </ul>
        </div>
    )
}

export default Home