import Story from "./Story.js";

const storiesArray = [
    {
        userName: "9gag",
        userAvatar: "assets/images/9gag.svg"
    },
    {
        userName: "meowed",
        userAvatar: "assets/images/meowed.svg"
    },
    {
        userName: "barked",
        userAvatar: "assets/images/barked.svg"
    },
    {
        userName: "nathanwpylestrangeplanet",
        userAvatar: "assets/images/nathanwpylestrangeplanet.svg"
    },
    {
        userName: "wawawiwacomics",
        userAvatar: "assets/images/wawawicomics.svg"
    },
    {
        userName: "respondeai",
        userAvatar: "assets/images/respondeai.svg"
    },
    {
        userName: "filomoderna",
        userAvatar: "assets/images/filomoderna.svg"
    },
    {
        userName: "memeriagourmet",
        userAvatar: "assets/images/memeriagourmet.svg"
    }
];

export default function StoriesList() {
    return (
        <ul className="stories-list">
            {storiesArray.map( story => 
            <Story userName={story.userName} userAvatar={story.userAvatar} />)}
        </ul>
    );
}