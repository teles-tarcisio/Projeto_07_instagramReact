import {Post, VideoPost} from "./Post.js";

const postsArray = [
    {
        userAvatar: "assets/images/barked.svg",
        userName: "barked",
        mainImage: "assets/images/dog.jpg",
        likedAvatar: "assets/images/meowed.svg",
        likedName: "meowed",
        likedQtty: "99.243"
    },
    {
        userAvatar: "assets/images/meowed.svg",
        userName: "meowed",
        mainImage: "assets/images/gato-telefone.svg",
        likedAvatar: "assets/images/meowed.svg",
        likedName: "meowed",
        likedQtty: "5.212"
    }    
];

const videoPostData = {
    userAvatar: "assets/images/barked.svg",
    userName: "ramiro",
    likedAvatar: "assets/images/meowed.svg",
    likedName: "barked",
    likedQtty: "12.735"
};

export default function PostsList() {
    return (
        <ul className="posts-list">
            { postsArray.map( post => 
            <Post userAvatar={post.userAvatar}
            userName={post.userName}
            image={post.mainImage} likedAvatar={post.likedAvatar} likedName={post.likedName} likedQtty={post.likedQtty}/>)}

            <VideoPost videoProps={videoPostData}/>
        </ul>
    );
}