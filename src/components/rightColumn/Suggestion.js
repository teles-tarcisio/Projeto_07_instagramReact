export default function Suggestion(props) {
    return (
        <li className="sidebar-profile">
            <img src={props.profilePicture} alt="suggestion avatar" />
            <div className="profile-name">
                <h1>{props.profileName}</h1>
                <p>Segue você</p>
            </div>
            <h2>Seguir</h2>
        </li>
    );
}