/* eslint-disable react/prop-types */
import estilo from './Principal.module.css'
import Vinculo from './Vinculo';
import listaSVG from './../../img/lista.svg';
import nuevoSVG from './../../img/nueva.svg';
function Principal({ children }) {
    return (
        <div className={estilo.principal}>
            <aside className={estilo.aside}>
                <Vinculo href='/lista' texto='Lista de Metas' Icono={listaSVG} alt='icono svg de lista'/>
                <Vinculo href='/nuevo' texto='nuevo' Icono={nuevoSVG} alt='icono svg de nuevo'/>
            </aside>
            <main className={estilo.main}>
                {children}
            </main>
        </div>
     );
}

export default Principal;