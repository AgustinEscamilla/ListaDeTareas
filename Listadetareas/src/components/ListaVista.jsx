import { Boton } from './Boton'

// pos aqui arme la vista pura interfaz nada de logica pesada
// esto nomas recibe las props y dibuja lo que le manden
export function ListaVista({ tareas, nuevaTarea, setNuevaTarea, alAgregar, alBorrar }) {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mis Tareas</h2>
      <div className="flex gap-2 mb-4">
        
        {/* aqui el input recibe el valor y avisa cuando cambia */}
        <input
          type="text"
          className="border p-2 rounded text-black flex-1"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe algo..."
        />
        <Boton onClick={alAgregar} variante="primario">Añadir</Boton>
      </div>
      <ul className="space-y-2">
        {tareas.map((t) => (
          <li key={t.id} className="flex justify-between items-center border-b pb-1">
            <span>{t.texto}</span>
            
            {/* aqui reciclo el boton pero en rojo para eliminar */}
            <Boton onClick={() => alBorrar(t.id)} variante="peligro">X</Boton>
          </li>
        ))}
      </ul>
    </div>
  )
}