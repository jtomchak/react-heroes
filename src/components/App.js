import React, { Component } from "react";
import HeroListItem from "./HeroListItem";
import HeroForm from "./HeroForm";
import { getHeroes } from "../heroes.service";
import "./App.css";

class App extends Component {
  state = {
    heroes: [],
    selectedHero: {
      name: "",
      id: undefined
    }
  };

  componentWillMount() {
    getHeroes
      .then(payload =>
        this.setState({
          heroes: payload
        })
      )
      .catch(x => console.log(x));
  }
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
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ul className="heroes">
                <HeroListItem
                  heroes={this.state.heroes}
                  handleSelectedHero={this.handleSelectedHero}
                />
              </ul>
              <HeroForm
                selectedHero={this.state.selectedHero}
                submitForm={this.handleFormSubmit}
                inputChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
