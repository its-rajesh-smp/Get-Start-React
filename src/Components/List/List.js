function List(props) {

    return (
        <div>
            <div style={{ border:'1px solid black', display: "flex", justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'skyblue' }}>
                <p>{props.name}</p>
                <p>{props.date}</p>
                <p>{props.price}$</p>
            </div>
        </div>
    )
}

export default List;