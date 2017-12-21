# React Heroes

1. Download this project
2. cd into the project directory
3. run `npm install` -this will install all the dependencies listed in our package.json file.
4. you can then run `npm start` and it _should_ start up a dev server for us. Compile early, compile often!
5. Within the App.js file is an Array of React Heroes.
6. **TASK** Render the Array of React Heroes as an unordered List, below the H2 Title
7. Transforming array of objects to an array of JSX Elements

```js
<li key={hero.id}>
  <span className="badge">{hero.id}</span>
  {hero.name}
</li>
```

8. Now we've got a nice list of heroes,(**NOTE** the class attribute is **NOT** class, but rather `className`. We can't use class, bc it's just JS, and class is a keyword) we want to be able to click on each one individually. Let's add a function `handleSelectedHero`

```js
const handleSelectedHero = hero => {
  console.log(hero.name);
};
```

9. On our li element we want to add an onClick event as a prop.
   We need to pass in the hero to `handleSelectedHero`, but we don't want to call/invoke it until the actual click event happens. So the solution is, we can wrap it in an anonymous function like so.

```js
<li key={hero.id} onClick={() => handleSelectedHero(hero)}>
  <span className="badge">{hero.id}</span>
  {hero.name}
</li>
```

10. We need to upgrade our stateless component into a React component. First we to import Component, then change from a function to a class.
    `import React, { Component } from "react"`
    `class App extends Component {`

11. Every React component needs to have a render method to it.So we can wrap up our return JSX markup in that method. Also don't forget to remove the `const` from our functions, they are now class properties.

```js
render() {
    return (
      <div className="App">
        <h1>React Heroes</h1>
        <ul className="heroes">{this.heroesListReactElements}</ul>
      </div>
    );
  }
```

12. Sweet, once upgrade to a React Component, our app should render as usual, without any errors!!! **REMEMBER** Compile and verify often!!!

13. Now we have a React Component we have access to lots of methods via the prototype linking, like render. We can also use state within our component to hold values for the lifetime of that particular component.For right now we just want to hold `selectedHero`

```js
state = {
  selectedHero: {}
};
```

14. For our method `handleSelectedHero` we want to take the hero, that is passed into it onClick and set it to the selected hero property of state. But we don't do a direct assignement. What we want to do in react is to call `setState` and pass it an object that has the new values for state. This will update the state object **AND** react will call render again on our component, thus updating JSX markup and running the diff'ing.

```js
handleSelectedHero = hero => {
  console.log(hero.name);
  // this.state.selectedHero = hero;
  this.setState({
    selectedHero: hero
  });
};
```

15. Adding Bootstrap to our react project `npm install react-bootstrap bootstrap@3`

16. Importing the needed css into our index.js, bc remember webpack is going to roll all our stuff and bundle it nicely for us

```js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
```

17. We're gonna need a form with some input for our 'heroes' name to be edited into.

```HTML
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
```

18. The attributes of input `value` and `onChange` are going to be our state.selectedHero a class method `handleInputChange`

19. Filling out the method `handleInputChange`

```js
//change to hero input on selected hero form
handleInputChange = event => {
  this.setState({
    selectedHero: {
      ...this.state.selectedHero,
      name: event.target.value
    }
  });
};
```

20. Now we want, when we submit the form, to have it update the Heroes array. So rather than calling the array itself, we set the state property of our component with the array.

```js
state = {
  heroes: HEROES,
  selectedHero: {
    name: "",
    id: undefined
  }
};
```

21. With `onSubmit={e => this.handleFormSubmit(e)}` we'll need a class method handleFormSubmit

```js
//save edited selected hero back into state "heroes" array
handleFormSubmit = e => {
  e.preventDefault(); //--> this keeps the form from doing HTTP POST, and refreshing the page
  //things we know selectedHero.name, selectedHero.id
  //do we know we know where in the array selectedHero is?
  const selectedHero = this.state.selectedHero;
  const heroes = this.state.heroes;
  const selectedHeroIndex = this.state.heroes
    .map(o => o.id)
    .indexOf(selectedHero.id); //---> Getting the index of the selected hero lets us update in the array bc now we know where it is
  this.setState({
    heroes: [
      ...heroes.slice(0, selectedHeroIndex), //---> all the heroes up to the selected hero
      selectedHero, //---> replaced the hero in the array with the selected hero object that has been updated from the onChange method
      ...heroes.slice(selectedHeroIndex + 1, heroes.length) //---> put all the other heroes back from selected hero to the end of the array
    ],
    selectedHero: {
      //---> reset the selected hero of state, that will clear out the form fields, bc their values are dependent on the selected hero
      name: "",
      id: undefined
    }
  });
};
```

22. Components, Importing and Exporting.

* We will be breaking up this single file into multiple components, so that we route to and from them. Sweet.
  ## There are 4 types of exports:
  1— Named exports (several per module)
  2— Default exports (one per module)
  3 — Mixed named & default exports
  4— Cyclical Dependencies

23. Create `components` folder inside of src, and move App.js and App.css into it. **DON'T** forget to change the path of App in index.js.

    ### Compile Early and Often!!!

24. Remove the HEROES array from App.js and create a `heroes.service.js` file on the root of your application.

```js
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

//Mock Fetch HTTP GET request for Heroes
const getHeroes = new Promise((resolve, reject) => {
  resolve(HEROES);
});

const getHeroById = heroId =>
  new Promise((resolve, reject) => {
    resolve(HEROES.find(hero => hero.id === heroId));
  });

export { getHeroes, getHeroById };
```

25. Now we want to import that module into App.js, so we can use it to get our heroes
    `import { getHeroes } from "../heroes.service.js"`

26. Then we want to leverage the life cycle component `componentWillMount` can then we can consume this promise of heroes, and setState accordingly.

```js
  componentWillMount() {
    getHeroes
      .then(payload =>
        this.setState({
          heroes: payload
        })
      )
      .catch(x => console.log(x));
  }
```

27. Let's talk about routing....but first more components. We want to separate some of our application so that it's not so tied directly to the App component. Pull out the heroesList into it's own file, import react, and convert it into a function that will take props.

```js
const heroesListReactElements = this.state.heroes.map(hero => (
  <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
    <span className="badge">{hero.id}</span>
    {hero.name}
  </li>
));
```

28. Should look a bit like....

```js
//HeroesListItems.js :-)
import React from "react";

const HeroListItem = props =>
  props.heroes.map(hero => (
    <li key={hero.id} onClick={() => props.handleSelectedHero(hero)}>
      <span className="badge">{hero.id}</span>
      {hero.name}
    </li>
  ));

export default HeroListItem;
```

29. Sweet, now we need to import it into our App component, and render it in our markup, passing it an array of heroes and a function to call when `onClick` happens

```js
//..App.js
import HeroListItem from "./HeroListItem";

....

<HeroListItem
  heroes={this.state.heroes}
  handleSelectedHero={this.handleSelectedHero}
/>;
```

30. Now, I'd like you to try to move the form, following the same basic logic.....
31. We are going to pull out the rest of the heroes list items and create a full UL List of these guys

```js
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
```

32. We'll need a Router package bc React doesn't come with one
    `npm install react-router-dom`
33. From the Root of our App, in App.js we need to import our router
    `import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";`
34.
