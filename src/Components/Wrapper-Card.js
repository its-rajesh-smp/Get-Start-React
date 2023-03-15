import "./Wrapper-Card.css"

const Card=(props)=> {
    let classess="card "+props.className
    return (
        <div className={classess}>
            {props.children}
        </div>
    )
}

export default Card;

