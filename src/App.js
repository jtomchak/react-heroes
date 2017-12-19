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
    heroes: HEROES,
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

  //change to hero input on selected hero form
  handleInputChange = event => {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  };

  //save edited selected hero back into state "heroes"
  handleFormSubmit = e => {
    e.preventDefault();
    //things we know selectedHero.name, selectedHero.id
    //do we know we know where in the array selectedHero is?
    const selectedHero = this.state.selectedHero;
    const heroes = this.state.heroes;
    const selectedHeroIndex = this.state.heroes
      .map(o => o.id)
      .indexOf(selectedHero.id);
    this.setState({
      heroes: [
        ...heroes.slice(0, selectedHeroIndex),
        selectedHero,
        ...heroes.slice(selectedHeroIndex + 1, heroes.length)
      ],
      selectedHero: {
        name: "",
        id: undefined
      }
    });
  };

  render() {
    const heroesListReactElements = this.state.heroes.map(hero => (
      <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
        <span className="badge">{hero.id}</span>
        {hero.name}
      </li>
    ));
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ul className="heroes">{heroesListReactElements}</ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2 style={{ textAlign: "center" }}>
                {this.state.selectedHero.name}
              </h2>
              <form
                className="form-horizontal"
                style={{ width: "60%", padding: "25px" }}
                onSubmit={e => this.handleFormSubmit(e)}
              >
                <div className="form-group">
                  <label className="control-label">ID: </label>
                  {this.state.selectedHero.id}
                </div>
                <div className="form-group">
                  <label className="control-label">Hero Name: </label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.selectedHero.name}
                    onChange={e => this.handleInputChange(e)}
                  />
                </div>
                <input
                  className="button btn btn-info"
                  type="submit"
                  value="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
