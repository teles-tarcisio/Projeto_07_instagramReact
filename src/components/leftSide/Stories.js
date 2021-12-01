import Story from "./Story.js";

const storiesArray = [
    {
        img: "assets/images/9gag.svg",
        alt: "9gag logo",
        user: "9gag"
    },
    {
        img: "assets/images/meowed.svg",
        alt: "meowed avatar",
        user: "meowed"
    },
    {
        img: "assets/images/barked.svg",
        alt: "barked avatar",
        user: "barked"
    },
    {
        img: "assets/images/nathanwpylestrangeplanet.svg",
        alt: "nathanwpylestrangeplanet avatar",
        user: "nathanwpylestrangeplanet"
    },
    {
        img: "assets/images/wawawicomics.svg",
        alt: "wawawicomics avatar",
        user: "wawawicomics"
    },
    {
        img: "assets/images/respondeai.svg",
        alt: "responde ai avatar",
        user: "respondeai"
    },
    {
        img: "assets/images/filomoderna.svg",
        alt: "filomoderna avatar",
        user: "filomoderna"
    },
    {
        img: "assets/images/memeriagourmet.svg",
        alt: "memeriagourmet avatar",
        user: "memeriagourmet"
    }
];

export default function Stories() {
    return (
        <ul className="stories">
            {storiesArray.map( (story) => (
                <Story
                    img={story.img} alt={story.alt}
                    user={story.user}
                />)
                )}
        </ul>
    );
}