import { useState } from 'react'
import { ContextoTema } from './ContextoTema'

// Maestro use aqui el proveedor totalmente aislado
export const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState('claro')

  const alternarTema = () => {
    setTema((prev) => (prev === 'claro' ? 'oscuro' : 'claro'))
  }

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>
      {/* Esto es asi para aplicar el color al fondo de toda la pantalla */}
      <div className={tema === 'oscuro' ? 'bg-zinc-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        {children}
      </div>
    </ContextoTema.Provider>
  )
}