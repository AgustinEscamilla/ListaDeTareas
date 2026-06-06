import { useState } from 'react'
import { usarGuardado } from '../hooks/usarGuardado'
import { ListaVista } from './ListaVista'

// profe aqui yo separe la logica este es el contenedor que hace el trabajo sucio
export function ListaContenedor() {
  
  // pos aqui pongo para poner el componente reutilizable que hice hace rato para guardar los datos
  const [tareas, setTareas] = usarGuardado('mis_tareas', [])
  const [nuevaTarea, setNuevaTarea] = useState('')

  // esto es para que no me agreguen cosas vacias y le pongo un id
  const alAgregar = () => {
    if (!nuevaTarea.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea }])
    setNuevaTarea('')
  }

  const alBorrar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  return (
    // y aqui ya nada mas pasa la vista  para funcione 
    <ListaVista
      tareas={tareas}
      nuevaTarea={nuevaTarea}
      setNuevaTarea={setNuevaTarea}
      alAgregar={alAgregar}
      alBorrar={alBorrar}
    />
  )
}