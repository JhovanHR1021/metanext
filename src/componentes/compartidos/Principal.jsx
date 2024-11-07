/* eslint-disable react/prop-types */
function Principal({ children }) {
    return (
        <div>
            <aside>
                <a href='/lista'>Lista</a>
                <a href='/nuevo'>Nuevo</a>
            </aside>
            <main>
                {children}
            </main>
        </div>
     );
}

export default Principal;