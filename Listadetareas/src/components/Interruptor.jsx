import { useState } from 'react'

// pos aqui yo hice este componente usando el patron de render props
// este maneja si algo esta abierto o cerrado 
export function Interruptor({ render }) {
  const [prendido, setPrendido] = useState(false)

  const alternar = () => setPrendido(!prendido)

  // aqui le paso el estado y la funcion de regreso al componente que lo mande a llamar
  return render({ prendido, alternar })
}