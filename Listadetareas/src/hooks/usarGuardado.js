import { useState, useEffect } from 'react'

// Maestro use aqui este gancho para no repetir codigo
// Esto funciona para guardar todo y que no se borre
export function useGuardado(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const valorGuardado = localStorage.getItem(clave)
    if (valorGuardado != null) return JSON.parse(valorGuardado)
    return valorInicial
  })

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor))
  }, [clave, valor])

  return [valor, setValor]
}