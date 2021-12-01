import Stories from "./Stories.js";
import Posts from "./Posts.js";

export default function LeftSide() {
    return (
        <div className="leftside">
            <Stories />
            <Posts />
        </div>
    );
}