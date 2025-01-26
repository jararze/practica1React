const Body = () => {
    return (
        <div className="body-container">
            <div className="title-subheader">
                <h2>Bienvenido</h2>
                <div className="line"></div>
                <span className="text-parrafo">Este modulo se centra en el uso de <b>React</b>, incluyendo la creacion de
                    <b>componentes</b>, el manejo de <b>hooks</b> y el uso de <b>Redux</b>.
                </span>
            </div>
            <div className="title-subheader">
                <h2>Temas Cubiertos</h2>
            </div>
            <div className="line"></div>
            <div className="topics-grid">
                <div className="topic-item">Componentes funcionales y de clase</div>
                <div className="topic-item">Uso de <b>React hooks</b> como useState y useEffect</div>
                <div className="topic-item">Creacion de <b>custom hooks</b> como UseForm</div>
                <div className="topic-item">Gestion de variables de estado con <b>UseState</b></div>
                <div className="topic-item">Gestion de estado global con <b>Redux</b></div>
                <div className="topic-item">Integracion de <b>Redux</b> con <b>React</b></div>
                <div className="topic-item">Manejo de <b>Formularios</b> en <b>React</b></div>
                <div className="topic-item">Publicando nuestra <b>Pagina</b> con <b>GitHub Pages</b></div>
            </div>
            <div className="title-subheader">
                <h2>Recursos Adicionales</h2>
                <div className="line"></div>
                <span className="text-parrafo">
                    Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                </span>
            </div>
        </div>
    )
};

export default Body