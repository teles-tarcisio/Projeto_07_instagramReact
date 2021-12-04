import LeftColumn from "../leftColumn/LeftColumn.js";
import RightColumn from "../rightColumn/RightColumn.js";
//import BottomMobile from "../bottomMobile/BottomMobile.js";

export default function MainContainer() {
    return (
        <div className="main-container">
            <LeftColumn />
            <RightColumn />
            {/* <BottomMobile /> */}
        </div>
    );
}