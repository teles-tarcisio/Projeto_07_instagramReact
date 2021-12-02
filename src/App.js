import Navbar from "./components/navbar/Navbar.js";
import CustomBody from "./components/CustomBody.js";
import MobileBackground from "./components/mobileBackground/MobileBackground.js";

export default function App() {
    return (
        <div>
            <Navbar/>
            <CustomBody/>
            <MobileBackground/>
        </div>
    );
}