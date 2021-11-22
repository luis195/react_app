import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
function App() {
    const greeting = "Bienvenido"
    const usuario = "Luis"

  return (
    <div className={"App"}>
      <NavBar/>
      <ItemListContainer greeting= {greeting} usuario={usuario}/>
    </div>
  );
}

export default App;
