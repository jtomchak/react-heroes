import React, { Component } from "react";

import { getHeroById } from "../heroes.service";

class HeroForm extends Component {
  state = {
    heroid: parseInt(this.props.match.params.heroid), //becasue heroid from param is a string, we need a number
    hero: undefined
  };

  //Lifecycle method
  componentWillMount() {
    const selectedHero = this.props.findHeroById(this.state.heroid);
    this.setState({
      hero: selectedHero
    });
  }

  //takes event from form input and updates selectedHero name
  handleInputChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm(this.state.hero);
    this.props.history.goBack();
  };

  render() {
    if (!this.state.hero) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <h2>{this.state.hero.name}</h2>
        <div>
          <label>ID: </label>
          {this.state.hero.id}
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Hero Name: </label>
          <input
            type="text"
            value={this.state.hero.name}
            onChange={this.handleInputChange}
          />
          <input className="button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default HeroForm;
