import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){

    const {totalTodos,completedTodos} = React.useContext(TodoContext)
    return(
        <React.Fragment>
            <h1 className='titulo'>Tareas heroe del tiempo</h1>
            <h2 className='subtitulo'>Has completado {completedTodos} de {totalTodos} tareas</h2>
            <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_thelegendofzeldalinksawakening/NSwitch_ZeldaLinksAwakening_Char_LinkAndDampe.png" alt="link"></img>
        </React.Fragment>
        
    );
}
export {TodoCounter};