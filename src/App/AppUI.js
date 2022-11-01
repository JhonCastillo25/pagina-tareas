import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoContext} from '../TodoContext'
import {Modal} from '../modal'
import { TodoForm } from "../TodoForm";


function AppUI(){
    const {error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext)
    return(
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch />
      
      <TodoList>

      {error && <p>Deseaperate, hay un errror</p>}
      {loading && <p> Cargando, no te desesperes</p>}
      {(!loading && !searchedTodos.length)&& <p>Crea una tarea!</p>}


      {searchedTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete = {() => completeTodo(todo.text)}
        onDelete ={() => deleteTodo(todo.text)}
        />)
        )
      }
      </TodoList>  
      
      {!!openModal &&(
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      openModal = {openModal}
      /> 
    </React.Fragment>
    );
}

export {AppUI};