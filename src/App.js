import React, { Component } from "react";
import "./App.css";

const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  state = {
    selectedHero: {
      name: "",
      id: undefined
    }
  };
  //on click event for hero li element
  handleSelectedHero = hero => {
    console.log(hero.name);
    // this.state.selectedHero = hero;
    this.setState({
      selectedHero: hero
    });
  };

  //changle to hero input on selected hero form
  handleInputChange = event => {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  };

  render() {
    const heroesListReactElements = HEROES.map(hero => (
      <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
        <span className="badge">{hero.id}</span>
        {hero.name}
      </li>
    ));
    return (
      <div className="App">
        <h1>React Heroes</h1>
        <ul className="heroes">{heroesListReactElements}</ul>
        <div>
          <label>ID: </label>
          {this.state.selectedHero.id}
          <label>Name: </label>
          {this.state.selectedHero.name}
        </div>
        <form>
          <label>Hero Name: </label>
          <input
            type="text"
            value={this.state.selectedHero.name}
            onChange={e => this.handleInputChange(e)}
          />
          <input className="button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
