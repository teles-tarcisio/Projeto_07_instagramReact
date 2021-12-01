import Post from "./Post.js";

const postsArray = [
    {
        userImage: "assets/images/meowed.svg",
        userAlt: "meowed avatar",
        user: "meowed",
        postImage: "assets/images/gato-telefone.svg",
        postAlt: "cat with smartphone",
        whoLikesAvatar: "assets/images/respondeai.svg",
        whoLikesAlt: "responde ai avatar",
        whoLikes: "respondeai",
        totalLikes: "101.523"
    },
    {
        userImage: "assets/images/barked.svg",
        userAlt: "barked avatar",
        user: "barked",
        postImage: "assets/images/dog.svg",
        postAlt: "sleeping puppy",
        whoLikesAvatar: "assets/images/adorable_animals.svg",
        whoLikesAlt: "adorable animals avatar",
        whoLikes: "adorable_animals",
        totalLikes: "99.159"
    }
];

export default function Posts() {
    return (
        <ul className="posts">
            {postsArray.map( (post) => (
                <Post
                userImage={post.userImage}
                userAlt={post.userAlt}
                user={post.user}
                postImage={post.postImage}
                postAlt={post.postAlt}
                whoLikesAvatar={post.whoLikesAvatar}
                whoLikesAlt={post.whoLikesAlt}
                whoLikes={post.whoLikes}
                totalLikes={post.totalLikes}
                />)
            )}
        </ul>
    );
}