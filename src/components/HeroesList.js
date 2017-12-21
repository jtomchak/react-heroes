import React from "react";

const HeroesList = props => {
  const HeroesItem = props.heroes.map(hero => (
    <li key={hero.id} onClick={() => props.handleSelectedHero(hero)}>
      <span className="badge">{hero.id}</span>
      {hero.name}
    </li>
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <ul className="heroes">{HeroesItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default HeroesList;
