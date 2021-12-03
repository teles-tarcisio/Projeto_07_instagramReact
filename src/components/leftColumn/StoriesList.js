import Story from "./Story.js";

export default function StoriesList() {
    const storiesArray = [
        {
            userName: "9gag",
            userAvatar: "assets/images/9gag.svg"
        },
        {
            userName: "barked",
            userAvatar: "assets/images/barked.svg"
        }
    ];
    return (
        <ul className="stories-list">
            {storiesArray.map( story => 
            <Story userName={story.userName} userAvatar={story.userAvatar} />)}
        </ul>
    );
}