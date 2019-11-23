import React, { Component } from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import Pagination from './components/Pagination';

class App extends Component {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  constructor() {
    super();
    this.state = {
      starwarsCharacters: [],
      next: null,
      previous:null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    console.log(`URL: `,URL);
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.table(data);
        this.setState({ 
          starwarsCharacters: data.results,
          next: data.next,
          previous:data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

getNextCharacters = () => {
  this.getCharacters(this.state.next);
};

getPreviousCharacters = () => {
  this.getCharacters(this.state.previous);
};

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination
          next={this.state.next}
          previous={this.state.previous}
          getNext={this.getNextCharacters}
          getPrevious={this.getPreviousCharacters} 
          />
        <CharacterList character={this.state.starwarsCharacters} />
      </div>
    );
  }
}

export default App;