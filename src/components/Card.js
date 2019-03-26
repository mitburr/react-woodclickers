import React from 'react'
import './Card.css'
import cardArray from './listArray'
import Title from './Header'
import CardsArray from '../cardsArray.json'




class BugCard extends React.Component {
    state  = {
        points: 0
    }
    handleClick =  () => {
            console.log("smth")
            this.setState({points: this.state.points++});
        }
        
        render(){
            return <div>
                <Title />
               <CardsArray />
            </div>
        }
}

export default BugCard