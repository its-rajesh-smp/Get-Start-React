import ListInitial from '../ListInitial/ListInitial';
import List from '../List/List';
import './ListContainer.css'
function ListContainer(){
    return (
        <div className="ListContainer">
            <ListInitial></ListInitial>
            <List></List>
        </div>

    );
}


export default ListContainer;