export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">

                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="spacer"></div>
                    <img src="assets/images/logo.png" alt="instagram logo" />
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/images/logo.png" alt="instagram mobile logo" />
                </div>

                <div className="search">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div className="mobile-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>

            </div>
        </div>
    )
}