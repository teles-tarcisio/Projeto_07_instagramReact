import Suggestion from "./Suggestion.js";
const suggestionsArray = [
    {
        profileName: "bad.vibes.memes",
        profilePicture: "assets/images/bad.vibes.memes.svg",
    },
    {
        profileName: "chibirdart",
        profilePicture: "assets/images/chibirdart.svg",
    },
    {
        profileName: "razoesparaacreditar",
        profilePicture: "assets/images/razoesparaacreditar.svg"
    },
    {
        profileName: "adorable_animals",
        profilePicture: "assets/images/adorable_animals.svg"
    },
    {
        profileName: "smallcutecats",
        profilePicture: "assets/images/smallcutecats.svg"
    }
];

export default function Suggestions() {
    return (
        <ul className="side-suggestions">
            {suggestionsArray.map( suggestion => 
            <Suggestion profileName={suggestion.profileName} profilePicture={suggestion.profilePicture} />)}
        </ul>
    );
}