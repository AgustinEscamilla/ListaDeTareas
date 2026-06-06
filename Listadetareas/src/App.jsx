import { lazy, Suspense, useState } from 'react'
import { ContextoTema } from './context/ContextoTema'
import { ProveedorTema } from './context/ProveedorTema'
import { ContextoChiste } from './context/ContextoChiste'
import { ListaContenedor } from './components/ListaContenedor'
import { conRegistro } from './components/conRegistro'
import { Interruptor } from './components/Interruptor'
import { Boton } from './components/Boton'

// Maestro use aqui la funcion para envolver
const ContenedorModificado = conRegistro(ListaContenedor)

// Esto funciona para la carga perezosa sin pesar al inicio
const PaginaChistes = lazy(() => import('./pages/Creditos'))

export default function App() {
  // Pos aqui este estado vive en el padre y ahora tambien maneja la pregunta
  const [tipoChiste, setTipoChiste] = useState(null)

  // Esto es asi para tener una sola funcion principal y respetar la regla
  return (
    <ProveedorTema>
      <ContextoChiste.Provider value={{ tipoChiste }}>
        <div className="p-4 font-sans">
          <header className="flex justify-between items-center max-w-md mx-auto mb-6">
            <h1 className="text-xl font-black">Lista de tareas</h1>

            <ContextoTema.Consumer>
              {({ alternarTema }) => (
                 <Boton funcionClick={alternarTema} estilos="bg-gray-500" texto="cambiar color" />
              )}
            </ContextoTema.Consumer>
          </header>

          <ContenedorModificado />

          <div className="max-w-md mx-auto mt-4 text-center">
            <Interruptor
              render={({ prendido, alternar }) => (
                <div>
                  <button onClick={alternar} className="text-sm underline text-blue-500">
                    {prendido ? 'ocultar consejo' : 'consejo del dia uwu'}
                  </button>
                  {prendido && (
                    <p className="text-xs italic text-gray-500 mt-2">Todo a su tiempo</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="max-w-md mx-auto mt-6 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              {/* Maestro use aqui los botones reutilizables */}
              <Boton 
                funcionClick={() => setTipoChiste(tipoChiste === 'familiar' ? null : 'familiar')} 
                estilos="bg-gray-700" 
                texto={tipoChiste === 'familiar' ? 'Esconder chiste' : 'Chiste familiar'} 
              />
              
              {/* Pos aqui escondemos el boton rojo si ya estamos preguntando */}
              {tipoChiste !== 'preguntando_funable' && (
                <Boton 
                  funcionClick={tipoChiste === 'funable' ? () => setTipoChiste(null) : () => setTipoChiste('preguntando_funable')} 
                  estilos="bg-red-600 hover:bg-red-700" 
                  texto={tipoChiste === 'funable' ? 'Esconder chiste funable' : 'Chiste funable'} 
                />
              )}
            </div>

            {/* Esto funciona para mostrar la pregunta directo en la pagina usando los botones reciclados */}
            {tipoChiste === 'preguntando_funable' && (
              <div className="text-center p-4 border rounded mt-2 bg-gray-50">
                <p className="text-sm font-bold mb-3 text-red-600">
                  profe pero pero no me baje calificacion por el chiste seguro de ver si o no
                </p>
                <div className="flex justify-center gap-4">
                  <Boton funcionClick={() => setTipoChiste('funable')} estilos="bg-green-600 hover:bg-green-700" texto="Si" />
                  <Boton funcionClick={() => setTipoChiste(null)} estilos="bg-gray-500 hover:bg-gray-600" texto="No" />
                </div>
              </div>
            )}
          </div>

          <div className="w-full mt-4 flex justify-center">
            {/* Maestro use aqui esto para que solo cargue si ya pasaron la pregunta */}
            {(tipoChiste === 'familiar' || tipoChiste === 'funable') && (
              <Suspense fallback={<p className="text-xs text-center mt-2">cargando chiste...</p>}>
                <PaginaChistes />
              </Suspense>
            )}
          </div>

        </div>
      </ContextoChiste.Provider>
    </ProveedorTema>
  )
}