import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  let saludo = "Ecommerce Motorcycle!"
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
