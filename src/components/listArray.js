import React from 'react'


let defineListArray = function(props){
    let newCardsArray = [];
    for(let i = 0; i < props.cardsArray.length; i++){    
    let URL = props.cardsArray[i].URL
    let Title = props.cardsArray[i].title
    newCardsArray[i] = <img src = {URL} alt = {Title} 
    height = "150" width = "150"
    onClick = {() => props.handleClick(props.cardsArray[i].URL)}></img>
    }


    return newCardsArray
}

    export default defineListArray