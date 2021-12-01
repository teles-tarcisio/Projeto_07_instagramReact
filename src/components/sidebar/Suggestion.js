export default function Suggestion(props) {
    return (
        <li className="suggestion">
            <div className="user">
                <img src={props.img} alt={props.alt} />
                <div className="text">
                    <div className="name">{props.name}</div>
                    <div className="reason">{props.reason}</div>
                </div>
            </div>

            <div className="follow">Seguir</div>
        </li>
    );
}