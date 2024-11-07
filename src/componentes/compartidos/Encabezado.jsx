import iconoSvg from './../../img/logo.svg';
import perfilSvg from './../../img/perfil.svg';
import './Encabezado.css'
function Encabezado() {
    return ( 
        <div className='encabezado'>
            <div className='contenedor'>
                <img className='logo' src={iconoSvg} alt='icono de metas svg' />
                <a className='titulo' href='/'>MetasNext</a>
            </div>
            <nav className='vinculo'>
                <a href="/perfil">
                    <img className='icono' src={perfilSvg} alt='perfil de svg' />
                </a>
            </nav>
        </div>
     );
}

export default Encabezado;