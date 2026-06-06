import { useEffect } from 'react'

// pos aqui arme esta funcion para envolver a otros componentes 
// nomas le agrega un mensaje cuando aparece en pantalla sin alterar el codigo original
export function conRegistro(ComponenteEnvuelto) {
  return function ComponenteMasticado(props) {
    
    // esto se ejecuta solito en cuanto el componente se pone
    useEffect(() => {
      console.log('el componente ya cargo esto lo puse desde el hoc')
    }, [])

    // aqui devuelvo el componente original pasandole todas sus props para no romper nada
    return <ComponenteEnvuelto {...props} />
  }
}