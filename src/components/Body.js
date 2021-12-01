import LeftSide from "./leftSide/LeftSide.js";
//import Sidebar from "./sidebar/Sidebar.js";

export default function Body() {
    return (
        <div className="body">
            <LeftSide />
            {/* <Sidebar /> */}
        </div>
    );
}