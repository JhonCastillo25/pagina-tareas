import React from "react";
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext'

// import './App.css';

// const defaultTodos = [
//   {text:"conseguir pieza de corazon", completed:true},
//   {text:"completar el templo del agua", completed:false},
//   {text:"ver una pelicula con skull kid", completed:false},
//   {text:"ver una novela con skull kid", completed:true},
 
// ]


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
