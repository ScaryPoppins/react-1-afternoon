import React, {Component} from 'react';

export default class EvenAndOdd extends Component {

    constructor(){
        super();
            this.state = {
                evenArray:  [], 
                oddArray:  [], 
                userInput:  " "
            }
    }

handleChange(val){
    this.setState({userInput: val});
}
assignEvenAndOdds(userInput){
let arr = userInput.split(',');
var evenie = [];
var oddie =  [];

for(var i=0; i<arr.length; i++){
    if(arr[i] %2 ===0){
        evenie.push(parseInt(arr[i], 10))
    }
    else{oddie.push(parseInt(arr[i], 10))
    }
}
this.setState({evenArray:evenie, oddArray:oddie})
}



    render(){
        return(
           <div className='puzzleBox evenAndOddPB'>

               <h4>Evens and Odds</h4>
               <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>
               <button className='confirmationButton' onClick={ ()=> {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
               <span className='resultsBox'>Even-ie: {JSON.stringify(this.state.evenArray)} </span>
               <span className='resultsBox'>Odd-ie: {JSON.stringify(this.state.oddArray)} </span>
               {/* <span className='resultsBox'>Even-ie: {this.state.evenArray} </span>
               <span className='resultsBox'>Odd-ie: {this.state.oddArray} </span> */}
           </div>
        )
    }
}