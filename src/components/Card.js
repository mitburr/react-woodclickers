import React from 'react'
import Header from './Header'
import ListArray from './listArray'
import cardsArray from '../cardsArray.json'



class BugCard extends React.Component {
    state  = {
        points: 0,
        clickedArray: []
    };
    handleClick =  (id) => {
        if(! this.state.clickedArray.find((element) => {return element === id})){
            this.setState({points: this.state.points+1});
            this.setState({clickedArray: this.state.clickedArray.concat(id)})
            console.log(this.state.clickedArray)
        }
        else{
            this.setState({points: 0})
            console.log("you've perished due to malnutrition.")
        }
        };
        
        render(){
            return (
            <div>
                <Header points = {this.state.points}/>
               <ListArray handleClick = {this.handleClick} cardsArray = {cardsArray}/>
            </div>);
        }
};

export default BugCard