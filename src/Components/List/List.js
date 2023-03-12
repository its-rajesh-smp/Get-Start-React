function List() {

    let date = new Date()



    return (
        <div>
            <div style={{ border:'1px solid black', display: "flex", justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'skyblue' }}>
                <p>Mobile</p>
                <p>{date.getDate()}</p>
                <p>200$</p>
            </div>
            <div style={{ border:'1px solid black', display: "flex", justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'skyblue' }}>
                <p>Petrol</p>
                <p>{date.getDate()}</p>
                <p>20$</p>
            </div>
            <div style={{ border:'1px solid black', display: "flex", justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'skyblue' }}>
                <p>Food</p>
                <p>{date.getDate()}</p>
                <p>5$</p>
            </div>
        </div>
    )
}

export default List;