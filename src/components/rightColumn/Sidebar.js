import Suggestions from "./Suggestions.js";

function SidebarMyProfile() {
    return (
        <div className="sidebar-myprofile">
            <img src="assets/images/catanacomics.jpg" alt="user avatar" />

            <div className="profile-name">
                <h1>catanacaomics</h1>
                <p>Catana</p>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarMyProfile />

            <div className="sidebar-suggestions">
                <h1>Sugestões para você</h1>
                <p>Ver tudo</p>
            </div>

            <Suggestions />
        </div>
    );

}