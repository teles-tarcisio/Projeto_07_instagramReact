export default function Topbar() {
    return (
        <div classNameName="top-fixed-ribbon">
            <div classNameName="top-bar-content">

                <div className="top-bar_logos">
                    <ion-icon className="logo-insta" name="logo-instagram"></ion-icon>
                    <div className="logo-vert-spacer"></div>
                    <img className="lettering-insta" src="images/logo.png" alt="instagram lettering logo" />
                </div>

                <input type="text" placeholder="Pesquisar" />

                <div className ="top-bar_icons">
                <ion-icon className ="icon-paperplane" name="paper-plane-outline"></ion-icon>
                <ion-icon className ="icon-compass" name="compass-outline"></ion-icon>
                <ion-icon className ="icon-heart" name="heart-outline"></ion-icon>
                <ion-icon className ="icon-person" name="person-outline"></ion-icon>
                </div>
            </div>

        </div>
    )
}