import List from '../List/List';
import './ListContainer.css'
import Card from '../Wrapper-Card';











const ListContainer=(value)=> {

    let data=value.data.map((item)=><List name={item.name} date={item.date} price={item.price} ></List>)
    console.log(data);
    return (
        <Card className="ListContainer">
            {data}
        </Card>

    );
}


export default ListContainer;