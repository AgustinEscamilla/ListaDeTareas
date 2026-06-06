import { Boton } from './Boton'

// Pos aqui maestro use aqui esta vista que solo se encarga de dibujar
// Esto funciona para que la logica se quede en el contenedor
export function ListaVista({ tareas, nuevaTarea, setNuevaTarea, alAgregar, alBorrar }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4">Tarreas pendientes</h2>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="AGREGAR TAREA"
          className="border flex-1 px-2 py-1 rounded text-sm uppercase"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        {/* Esto es asi para usar tu boton reciclado en lugar del normal */}
        <Boton funcionClick={alAgregar} estilos="bg-blue-500 hover:bg-blue-600" texto="Añadir" />
      </div>

      <ul>
        {tareas.map((t) => (
          <li key={t.id} className="flex justify-between items-center border-b py-2">
            <span className="text-sm text-gray-700">{t.texto}</span>
            <button onClick={() => alBorrar(t.id)} className="text-red-500 text-xs hover:underline">
              borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}