import User from './User.js';
import Suggestions from './Suggestions.js';

function Links() {
    return (
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <User
                img="assets/images/catanacomics.svg"
                alt="catanacomics avatar"
                profileName="catanacomics"
                name="Catana"
            />
            <Suggestions />
            <Links />
            <Copyright />
        </div>
    );
}