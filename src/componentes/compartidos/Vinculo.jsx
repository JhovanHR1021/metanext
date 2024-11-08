/* eslint-disable react/prop-types */
import estilo from './Vinculo.module.css'
function Vinculo({Icono, texto, href, alt}) {

  return (
      <a href={href} className={estilo.vinculo}>
          <img src={Icono} alt={alt} className={estilo.icono} />
          {texto && <span className={estilo.texto}> {texto} </span>}
      </a>
  )
}

export default Vinculo;