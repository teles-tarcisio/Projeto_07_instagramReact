function TopbarIcons() {
    return (
        <div className="top-bar_icons">
            <ion-icon className="icon-paperplane" name="paper-plane-outline"></ion-icon>
            <ion-icon className="icon-compass" name="compass-outline"></ion-icon>
            <ion-icon className="icon-heart" name="heart-outline"></ion-icon>
            <ion-icon className="icon-person" name="person-outline"></ion-icon>
        </div>
    );
}

function TopbarLogos() {
    return (
        <div className="top-bar_logos">
            <ion-icon className="logo-insta" name="logo-instagram"></ion-icon>
            <div className="logo-vert-spacer"></div>
            <img className="lettering-insta" src="assets/images/logo.png" alt="instagram lettering logo" />
        </div>

    );
}


export default function Topbar() {
    return (
        <div className="top-fixed-ribbon">
            <div className="top-bar-content">
                <TopbarLogos />

                <input type="text" placeholder="Pesquisar" />

                <TopbarIcons />
            </div>
        </div>
    )
}