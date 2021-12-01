export default function Story(props) {
    return (
        <li className="story">
            <div className="image">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="user">
                {props.user}
            </div>
        </li>
    );
}