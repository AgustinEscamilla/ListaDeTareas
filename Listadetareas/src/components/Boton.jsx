// aqui yo arme este boton que sirve para muchos casos y asi no ando repitiendo codigo
export function Boton({ children, variante = 'primario', onClick }) {
  
  // esto hace que cambie el color dependiendo si le mando peligro o normal
  const colorFondo = variante === 'peligro' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <button className={`${colorFondo} text-white px-4 py-2 rounded font-bold`} onClick={onClick}>
      {children}
    </button>
  )
}