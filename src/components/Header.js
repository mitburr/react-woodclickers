import React from 'react'
import points from './Card'

let Header = function(props){
        return <div id = "head">
    <h1>Welcome young woodpecker, help yourself to a delicious treat!</h1>;
    <h2>You are {props.points}/3 full. Be sure to diversify your diet!</h2>
    </div>
}

export default Header