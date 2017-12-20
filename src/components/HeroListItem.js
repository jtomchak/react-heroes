import React from "react";

const HeroListItem = props =>
  props.heroes.map(hero => (
    <li key={hero.id} onClick={() => props.handleSelectedHero(hero)}>
      <span className="badge">{hero.id}</span>
      {hero.name}
    </li>
  ));

export default HeroListItem;
