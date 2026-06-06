import { createContext, useState } from 'react'

// profe aqui yo cree el contexto para no andar pasando props por todos los lados para que no este el  prop drilling
export const ContextoTema = createContext()

export const ProveedorTema = ({ children }) => {
  // aqui yo guardo el estado actual si es claro o oscuro
  const [tema, setTema] = useState('claro')

  const alternarTema = () => {
    setTema((prev) => (prev === 'claro' ? 'oscuro' : 'claro'))
  }

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {/* aqui envuelvo todo y le cambio el color de fondo dependiendo del estado actual */}
      <div className={tema === 'oscuro' ? 'bg-zinc-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        {children}
      </div>
    </ContextoTema.Provider>
  )
}