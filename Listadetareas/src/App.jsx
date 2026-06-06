import { lazy, Suspense, useState } from 'react'
import { ProveedorTema, ContextoTema } from './context/ContextoTema'
import { ListaContenedor } from './components/ListaContenedor'
import { conRegistro } from './components/conRegistro'
import { Interruptor } from './components/Interruptor'

// aqui yo cree un componente nuevo a partir del original pasandolo por mi componente de orden superio
const ContenedorConRegistro = conRegistro(ListaContenedor)

// y esto es el code splitting cargo la pagina de creditos de forma perezosa
const PaginaCreditos = lazy(() => import('./pages/Creditos'))

function AplicacionPrincipal() {
  const [verCreditos, setVerCreditos] = useState(false)

  return (
    <div className="p-4 font-sans">
      <header className="flex justify-between items-center max-w-md mx-auto mb-6">
        <h1 className="text-xl font-black">mis tareas avanzadas</h1>

        {/* aqui consumo mi contexto para cambiar los colores de la pantalla */}
        <ContextoTema.Consumer>
          {({ alternarTema }) => (
            <button onClick={alternarTema} className="border px-3 py-1 text-xs rounded bg-gray-500 text-white">
              cambiar tema
            </button>
          )}
        </ContextoTema.Consumer>
      </header>

      {/* aqui meto mi contenedor que ya viene hackeado con el hoc */}
      <ContenedorConRegistro />

      <div className="max-w-md mx-auto mt-4 text-center">
        {/* esto es lo de render props le paso una funcion para que sepa que dibujar */}
        <Interruptor
          render={({ prendido, alternar }) => (
            <div>
              <button onClick={alternar} className="text-sm underline text-blue-400">
                {prendido ? 'ocultar tip' : 'mostrar tip de estudio'}
              </button>
              {prendido && (
                <p className="text-xs italic text-gray-500 mt-2">
                  haz tus tareas en bloques de 25 minutos para no hartarte
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="max-w-md mx-auto mt-6 text-center">
        <button onClick={() => setVerCreditos(!verCreditos)} className="bg-gray-700 text-white text-xs px-4 py-2 rounded">
          {verCreditos ? 'esconder creditos' : 'ver creditos lazy'}
        </button>

        {/* aqui uso suspense para poner un mensajito mientras se descarga el codigo pesado de la otra pagina */}
        {verCreditos && (
          <Suspense fallback={<p className="text-xs text-center mt-2">cargando archivitos...</p>}>
            <PaginaCreditos />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default function App() {
  // envuelvo todo en el proveedor para que el contexto funcione en todos lados
  return (
    <ProveedorTema>
      <AplicacionPrincipal />
    </ProveedorTema>
  )
}