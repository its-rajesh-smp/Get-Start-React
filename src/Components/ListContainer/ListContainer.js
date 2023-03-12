import ListInitial from '../ListInitial/ListInitial';
import List from '../List/List';
import './ListContainer.css'
// ============================STORAGE START==============================


const value = [

    {
        _id:2566,
        name: "Mobile",
        date: new Date().getDay(),
        price: "250"
    },

    {
        _id:2567,
        name: "HeadPhone",
        date: new Date().getDay(),
        price: "20"
    },

    {
        _id:2568,
        name: "Food",
        date: new Date().getDay(),
        price: "5"
    },

    {
        _id:2569,
        name: "Shirt",
        date: new Date().getDay(),
        price: "10"
    },

    {
        _id:2570,
        name: "Mobile Cover",
        date: new Date().getDay(),
        price: "3"
    },

    {
        _id:2571,
        name: "Sim Card",
        date: new Date().getDay(),
        price: "4"
    }


]





// ============================STORAGE END==============================






function ListContainer() {

    let data=value.map((item)=><List name={item.name} date={item.date} price={item.price} ></List>)
    return (
        <div className="ListContainer">
            {data}
        </div>

    );
}


export default ListContainer;