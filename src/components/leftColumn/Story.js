export default function Story(props) {
    
    return (
        <li className="story">
            <p>{props.userName}</p>
            <img className="story-bgframe" src="assets/images/stories_background.jpg" alt ="story background circle"/>
            <img className="who-avatar" src={props.userAvatar} alt="user avatar" />
        </li>
    );
}