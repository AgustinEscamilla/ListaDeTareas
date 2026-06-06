// Pos aqui maestro use aqui este boton reciclable
// Esto es asi para no repetir codigo y usarlo en toda la pagina
export function Boton({ funcionClick, estilos, texto }) {
  return (
    <button onClick={funcionClick} className={`text-white text-xs px-4 py-2 rounded ${estilos}`}>
      {texto}
    </button>
  )
}