import { useState } from 'react'

import { useGuardado } from '../hooks/usarGuardado'
import { ListaVista } from './ListaVista'

export function ListaContenedor() {
  // Aqui se pide el gancho 
  // Esto es para separar la logica de lo que se ve en pantalla
  const [tareas, setTareas] = useGuardado('mis_tareas', [])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const alAgregar = () => {
    if (!nuevaTarea.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea }])
    setNuevaTarea('')
  }

  const alBorrar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  return (
    <ListaVista
      tareas={tareas}
      nuevaTarea={nuevaTarea}
      setNuevaTarea={setNuevaTarea}
      alAgregar={alAgregar}
      alBorrar={alBorrar}
    />
  )
}