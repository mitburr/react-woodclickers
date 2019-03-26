import React from 'react'

defineListArray = () =>{
    var listArray = cardsArray.map(
        element => <li><img src={element.URL} alt={element.title}
            height="150" width="150"
            onClick={handleClick}></img></li>
    )
    return <div>
        listArray;
    </div>
    }

    export default defineListArray