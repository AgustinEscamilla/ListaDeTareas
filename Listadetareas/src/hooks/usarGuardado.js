import { useState, useEffect } from 'react'

// pos aqui yo saque la logica para separar las cosas
// esto no renderiza ui es pura logica encapsulada para no tener componentes gigantes
export function usarGuardado(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const valorGuardado = localStorage.getItem(clave)
    if (valorGuardado != null) return JSON.parse(valorGuardado)
    return valorInicial
  })

  // aqui yo le puse para que se guarde solito cuando cambia el valor
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor))
  }, [clave, valor])

  return [valor, setValor]
}