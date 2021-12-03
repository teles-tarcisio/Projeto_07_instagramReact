export default function Post(props) {
    return (
        <li className="post-frame">
            <div className="post-top">
                <img className="who-avatar" src={props.userAvatar} alt="original poster avatar" />
                <p>{props.userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img className="post-img" src={props.image} alt="main subject" />
        </li>
    );
}