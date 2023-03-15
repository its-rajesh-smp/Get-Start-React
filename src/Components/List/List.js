import Name from "./Name/ListName"
import Date from "./Date/ListDate"
import Price from "./Price/ListPrice"
import Card from "../Wrapper-Card"
import "./List.css"

const List=(props)=> {


    return (
            <Card className="lists">
                <Name name={props.name} />
                <Date date={props.date} />
                <Price price={props.price}/>
            </Card>
    )
}

export default List;