import Post from "./Post.js";
const postsArray = [
    {
        postUserAvatar: "assets/images/meowed.jpg",
        postUserName: "meowed",
        postImage: "assets/images/gato-telefone.svg"
    }
];

export default function PostsList() {
    return (
        <ul className="posts-list">
            { postsArray.map( post => 
            <Post userAvatar={post.postUserAvatar}
            userName={post.postUserName}
            image={post.postImage} />)}            
        </ul>
    );
}