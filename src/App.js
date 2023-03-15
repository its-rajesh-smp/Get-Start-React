import Header  from "./Components/Header/Header.js";
import ListContainer from "./Components/ListContainer/ListContainer.js";


// ============================STORAGE START==============================
const value = [

  {
      _id:2566,
      name: "Mobile",
      date: new Date(),
      price: "250"
  },

  {
      _id:2567,
      name: "HeadPhone",
      date: new Date(),
      price: "20"
  },

  {
      _id:2568,
      name: "Food",
      date: new Date(),
      price: "5"
  },

  {
      _id:2569,
      name: "Shirt",
      date: new Date(),
      price: "10"
  },

  {
      _id:2570,
      name: "Mobile Cover",
      date: new Date(),
      price: "3"
  },

  {
      _id:2571,
      name: "Sim Card",
      date: new Date(),
      price: "4"
  }
  ,
  {
      _id:2572,
      name: "Jainga",
      date: new Date(),
      price: "99"
  }


]


// ============================STORAGE END==============================






const App=()=> {
  return (
    <div>
      <Header></Header>
      <h2 style={{textAlign:'center'}}>My First React Project</h2>
      <ListContainer data={value}></ListContainer>
    </div>
  );
}

export default App;
