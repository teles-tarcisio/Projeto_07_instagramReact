function PostIcons() {
    return (
        <div className="post-icons">
            <ion-icon className="icon-heart" name="heart-outline" />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
            <ion-icon className="icon-bookmark" name="bookmark-outline" />
        </div>
    );
}

function PostLikes(props) {
    console.log("PostLikes props", props);
    const {likedAvatar, likedName, likedQtty} = props;
    return (
        <div className="post-likes">
            <img className="who-avatar" src={likedAvatar} alt="who likes avatar"/>
            <p>Curtido por <span>{likedName}</span> e <span>outras {likedQtty} pessoas</span></p>
        </div>
    );
}

function Post(props) {
    console.log("Post props:", props);
    const {userAvatar, userName, image, likedAvatar, likedName, likedQtty} = props;

    return (
        <li className="post-frame">
            <div className="post-top">
                <img className="who-avatar" src={userAvatar} alt="original poster avatar" />
                <p>{userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img className="post-img" src={image} alt="main subject" />

            <div className="post-bottom">
                <PostIcons />
                <PostLikes likedAvatar={likedAvatar} likedName={likedName} likedQtty={likedQtty}/>
            </div>
        </li>
    );
}

function VideoPost({userAvatar, userName, likedAvatar, likedName, likedQtty}) {
    return (
        <li className="post-frame">
            <div className="post-top">
                <img className="who-avatar" src={userAvatar} alt="original poster avatar" />
                <p>{userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>

                <video controls loop autoplay muted>
                    <source src="assets/videos/video.mp4" />
                    <source src="assets/videos/video.ogv" />
                    Seu navegador não suporta esse video!
                </video>

            <div className="post-bottom">
                <PostIcons />
                <PostLikes likedAvatar={likedAvatar} likedName={likedName} likedQtty={likedQtty}/>
            </div>
        </li>
    );
}

export { Post, VideoPost };