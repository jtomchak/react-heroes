import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroesList from "./HeroesList";
import HeroForm from "./HeroForm";

import { getHeroes } from "../heroes.service";

class Heroes extends Component {
  render() {
    return (
      <div>
        <h1>Git Heroes</h1>
        <HeroesList
          heroes={this.props.heroes}
          handleSelectedHero={this.props.handleSelectedHero}
        />
        {/* 
        Below is a conditional that will only render if selectedHero.id is true
        */}
        {this.props.selectedHero.id && (
          <div>
            <h2>{this.props.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.props.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Heroes;
