function Top(props) {
    return (
        <div className="top">
            <div className="user">
                <img src={props.userImage} alt={props.userAlt} />
                {props.user}
            </div>

            <div className="actions">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Content(props) {
    return (
        <div className="content">
            <img src={props.postImage} alt={props.postAlt} />
        </div>
    );
}

function Background(props) {
    return (
        <div className="background">
            <div className="actions">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="likes">
                <img src={props.whoLikesAvatar} alt={props.whoLikesAlt} />
                <div className="text">
                    Curtido por <strong>{props.whoLikes}</strong> e <strong>outras {props.totalLikes} pessoas </strong>
                </div>
            </div>
        </div>
    );
}

export default function Post(props) {
    return(
        <li className="post">
            {Top(props)}

            {Content(props)}

            {Background(props)}
        </li>
    );
}