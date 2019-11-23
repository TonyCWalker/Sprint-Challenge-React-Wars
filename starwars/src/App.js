import React, { Component } from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import PageSelector from './components/PageSelector';

class App extends Component {
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
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
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
        <PageSelector
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