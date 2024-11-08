import estilo from './Encabezado.module.css'
import iconoSvg from './../../img/logo.svg';
import perfilSvg from './../../img/perfil.svg';
function Encabezado() {
    return ( 
        <div className={estilo.encabezado}>
            <div className={estilo.contenedor}>
                <img className={estilo.logo} src={iconoSvg} alt='icono de metas svg' />
                <a className={estilo.titulo} href='/'>MetasNext</a>
            </div>
            <nav>
                <a href="/perfil" className={estilo.vinculo}>
                    <img className={estilo.icono} src={perfilSvg} alt='perfil de svg' />
                </a>
            </nav>
        </div>
     );
}

export default Encabezado;