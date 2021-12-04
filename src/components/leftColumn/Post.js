function PostIcons() {
    return (
        <div className="post-icons">
            <ion-icon name="heart-outline" />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
            <ion-icon name="bookmark-outline" />
        </div>
    );
}

function PostLikes(props) {
    return (
        <div className="post-likes">
            <img className="who-avatar" src={props.whoLikesAvatar} alt="who likes avatar"/>
            <p>Curtido por <span>(props aqui?)</span> e <span>outras (props aqui tbm?)</span></p>
        </div>
    );
}

function Post(props) {
    return (
        <li className="post-frame">
            <div className="post-top">
                <img className="who-avatar" src={props.userAvatar} alt="original poster avatar" />
                <p>{props.userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img className="post-img" src={props.image} alt="main subject" />

            <div className="post-bottom">
                <PostIcons />
                <PostLikes />
            </div>
        </li>
    );
}

function VideoPost(props) {
    return (
        <li className="post-frame">
            <div className="post-top">
                <img className="who-avatar" src={props.userAvatar} alt="original poster avatar" />
                <p>{props.userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <video autoplay loop muted>
                    <source src="assets/videos/video.mp4" />
                    <source src="assets/videos/video.ogv" />
                    Seu navegador não suporta esse video!
                </video>

            <div className="post-bottom">
                <PostIcons />
                <PostLikes />
            </div>
        </li>
    );
}

export { PostIcons, PostLikes, Post, VideoPost };