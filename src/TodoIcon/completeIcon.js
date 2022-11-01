import React from "react";
import { TodoIcon } from "./";


function CompleteIcon({completed, onComplete}){
    return(
        <TodoIcon
        type="check"
        color={completed? ' #D9CF4A' : '#000'}
        onClick = {onComplete}
        />
    );

};

export { CompleteIcon };


