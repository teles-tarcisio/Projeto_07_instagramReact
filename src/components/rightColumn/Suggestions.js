import Suggestion from "./Suggestion.js";
const suggestionsArray = [
    {
        profileName: "bad.vibes.memes",
        profilePicture: "assets/images/bad.vibes.memes.svg",
    },
    {
        profileName: "chibirdart",
        profilePicture: "assets/images/chibirdart.svg",
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