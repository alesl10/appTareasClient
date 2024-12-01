import React from 'react'
import { UseAuth } from '../Context/AuthContext.jsx'

const Tarea = ({ tarea }) => {

    const { eliminarTarea } = UseAuth()

    const deleteTarea = (id) => {
        eliminarTarea(id)
    }

    return (
        <div className=' border-2 border-blue-500 px-4 py-2'>
            <div className='flex justify-between'>
                <h4>{tarea.titulo}</h4><span>{tarea.estado}</span>
            </div>
            <span>{tarea.descripcion}</span>
            <button onClick={() => deleteTarea(tarea.id)}>Eliminar Tarea</button>
        </div>
    )
}

export default Tarea