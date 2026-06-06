import { useContext } from 'react'
import { ContextoChiste } from '../context/ContextoChiste'

// Maestro use aqui el nieto que recibe los datos directo del abuelo
// Esto funciona con una sola funcion en todo el archivo
export default function Creditos() {
  const { tipoChiste } = useContext(ContextoChiste)

  // Esto es asi para mostrar el chiste sano
  if (tipoChiste === 'familiar') {
    return (
      <div className="p-4 border mt-4 text-center rounded bg-blue-100 text-black max-w-sm mx-auto">
        <h3 className="font-bold">Chiste Familiar </h3>
        <p className="text-sm">Porque la ballena no come mas????? </p>
        <p className="text-sm font-bold">va llena ahdjakjdhakjhdkjahdkjahdkj</p>
      </div>
    )
  }

  // Pos aqui esto es para soltar el chiste funable
  if (tipoChiste === 'funable') {
    return (
      <div className="p-4 border mt-4 text-center rounded bg-red-100 text-red-900 max-w-sm mx-auto">
        <h3 className="font-bold">conste eh profe si le dio que si es que no va pasar nada </h3>
        <p className="text-sm font-bold">porque estados unidos no ataca africa:  porque no encuentra el blanco</p>
      </div>
    )
  }

  return null
}