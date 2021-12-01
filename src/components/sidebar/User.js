export default function User(props) {
    return (
        <div className="user">
            <img src={props.img} alt={props.alt} />
            <div className="text">
                <strong>{props.profileName}</strong>
                {props.name}
            </div>
        </div>
    );
}