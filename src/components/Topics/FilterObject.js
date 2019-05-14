import React, {Component} from 'react'; 




export default class FilterObject extends Component{

    constructor(){
        super();

        this.state = {
          unFilteredArray: [
               {vehicle: 'Volkswagon', 
                speed: 'slowwwwww',
                color: 'purple',
                reliability: 'medium'},

               {vehicle: 'Go-Cart', 
                speed: 'medium',
                funFactor: 'high',
                weight: 'low'},
    
               {vehicle: 'Camaro', 
                speed: 'medium',
                funFactor: 'high',
                color: 'blue',
                reliability: 'medium'},
              
               {vehicle: 'F150 Lightning', 
                speed: 'fast',
                reliability: 'low'}
            ],

          userInput: "",
          filteredArray: []
    
        }
      }

      handleChange(val){
          this.setState({userInput: val});
      }

  filteredArray(prop) {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];

    for ( let i = 0; i < unFilteredArray.length; i++ ) {
      if (unFilteredArray[i].hasOwnProperty(prop) ) {
        filteredArray.push(unFilteredArray[i]);
      }
    }

    this.setState({ filteredArray: filteredArray });
  }




    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={ ()=> {this.filteredArray(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>


            </div>
        )
    }
}