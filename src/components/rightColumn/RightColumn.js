import Sidebar from "./Sidebar.js";

function RightsideText() {
    return(
        <div className="right-side-text">
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}

export default function RightColumn() {
    return (
        <div className="right-column">
            <Sidebar />
            <RightsideText />

        </div>
    );
}