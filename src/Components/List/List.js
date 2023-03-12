import Name from "./Name/ListName"
import Date from "./Date/ListDate"
import Price from "./Price/ListPrice"


function List(props) {


    return (
        <div>
            <div style={{ border:'1px solid black', display: "flex", justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'skyblue' }}>
                <Name name={props.name} />
                <Date date={props.date} />
                <Price price={props.price}/>
            </div>
        </div>
    )
}

export default List;