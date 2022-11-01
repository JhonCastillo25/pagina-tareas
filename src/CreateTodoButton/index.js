import React from "react";
import "./TodoButton.css"

function CreateTodoButton(props) {

  const Onclickbutton= ()=>{
    if (props.openModal===true){
      props.setOpenModal(false)
    }else{
      props.setOpenModal(true)
    }
    
  };
    return (
      <button 
      className="CreateTodoButton"
      onClick={Onclickbutton}
      >
        +
      </button>
    );
  }

export { CreateTodoButton }