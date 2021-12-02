import LeftSide from "./leftSide/LeftSide.js";
import Sidebar from "./sidebar/Sidebar.js";

export default function CustomBody() {
    return (
        <div className="custom-body">
            <LeftSide />
            <Sidebar />
        </div>
    );
}