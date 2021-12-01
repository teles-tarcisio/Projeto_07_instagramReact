import Suggestion from './Suggestion.js';

const suggestionsArray = [
    {
        img: "assets/images/bad.vibes.memes.svg",
        alt: "badvibesmemes.avatar",
        name: "bad.vibes.memes",
        reason: "Segue você"
    },
    {
        img: "assets/images/chibirdart.svg",
        alt: "chibirdart avatar",
        name: "chibirdart",
        reason: "Segue você"
    },
    {
        img: "assets/images/razoesparaacreditar.svg",
        alt: "razoesparaacreditar avatar",
        name: "razoesparaacreditar",
        reason: "Novo no Instagram"
    },
    {
        img: "assets/images/adorable_animals.svg",
        alt: "adorableanimals avatar",
        name: "adorable_animals",
        reason: "Segue você"
    },
    {
        img: "assets/images/smallcutecats.svg",
        alt: "small cats avatar",
        name: "smallcutecats",
        reason: "Segue você"
    }
]

export default function Suggestions() {
    return(
        <ul className="suggestions">
            <div className="title">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsArray.map( (suggestion) => (
                <Suggestion
                    img={suggestion.img}
                    alt={suggestion.alt}
                    reason={suggestion.reason}
                />)
            )}
        </ul>
    );
}