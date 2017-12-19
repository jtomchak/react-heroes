import React from "react";
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

const App = () => {
  const handleSelectedHero = hero => {
    console.log(hero.name);
  };
  const heroesListReactElements = HEROES.map(hero => (
    <li key={hero.id} onClick={() => handleSelectedHero(hero)}>
      <span className="badge">{hero.id}</span>
      {hero.name}
    </li>
  ));
  return (
    <div className="App">
      <h1>React Heroes</h1>
      <ul className="heroes">{heroesListReactElements}</ul>
    </div>
  );
};

export default App;
