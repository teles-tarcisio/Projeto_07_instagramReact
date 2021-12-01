import Navbar from "./components/navbar/Navbar.js";
import Body from "./components/Body.js";
import MobileBackground from "./components/mobileBackground/MobileBackground.js";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Body/>
            <MobileBackground/>
        </div>
    );
}