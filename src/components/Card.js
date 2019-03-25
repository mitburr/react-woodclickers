import React from 'react'
import './Card.css'

function BugCard (props){
    
    let listArray = props.imgArray.map(
        element => <li><img src = {element.URL} alt = {element.title} height = "150" width = "150"></img></li>
    )

return <ul id = "list">{listArray}</ul>
}

export default BugCard