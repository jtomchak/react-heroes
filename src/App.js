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
    selectedHero: {}
  };
  handleSelectedHero = hero => {
    console.log(hero.name);
    // this.state.selectedHero = hero;
    this.setState({
      selectedHero: hero
    });
  };
  heroesListReactElements = HEROES.map(hero => (
    <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
      <span className="badge">{hero.id}</span>
      {hero.name}
    </li>
  ));
  render() {
    return (
      <div className="App">
        <h1>React Heroes</h1>
        {this.state.selectedHero.name}
        <ul className="heroes">{this.heroesListReactElements}</ul>
      </div>
    );
  }
}

export default App;
