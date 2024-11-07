import iconoSvg from './../../img/logo.svg';
import perfilSvg from './../../img/perfil.svg';
function Encabezado() {
    return ( 
        <div>
            <div>
                <img src={iconoSvg} alt='icono de metas svg' />
                <a href='/'>MetasNext</a>
            </div>
            <nav className='flex'>
                <a href="/perfil">
                    <img src={perfilSvg} alt='perfil de svg' />
                </a>
            </nav>
        </div>
     );
}

export default Encabezado;