import StoriesList from "./StoriesList.js";

export default function StoriesRibbon() {
    return (
        <div className="stories-ribbon">
            <StoriesList />
            <img className="stories-arrow" src="assets/images/stories-arrow.png" alt="chevron arrow" />
        </div>
    );
}