import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemCount} from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount/>

    </>
  );
}

export default App;
