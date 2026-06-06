import { createContext } from 'react'

// Maestro use aqui este canal para conectar del padre directo al nieto
// Esto funciona para evitar pasar datos de hijo en hijo
export const ContextoChiste = createContext()