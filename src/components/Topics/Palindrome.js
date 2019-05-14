import React, {Component} from 'react';


export default class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: []
        };
      }
      handleChange(val) {
        this.setState({ userInput: val });
      }
      palindromeTest(userInput) {
        let forwardsTest = userInput;
        let backwardsTest = userInput;
        backwardsTest = backwardsTest.split('');
        backwardsTest = backwardsTest.reverse('');
        backwardsTest = backwardsTest.join('');

        if (forwardsTest === backwardsTest){
            this.setState({palindrome:'true'});
        }
        else if (forwardsTest !== backwardsTest){
            this.setState({palindrome: 'false'});
        }
        else{
            this.setState({palindrome: 'broken'});
        }
    }

    render (){
        return (
            <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.palindromeTest(this.state.userInput) }>Test</button>
            <span className='resultsBox'>Is Palindrome?  {this.state.palindrome}</span>
            </div>
        )
    }
}