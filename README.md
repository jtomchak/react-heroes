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

18. Adding Bootstrap to our react project `npm install react-bootstrap bootstrap@3`

19. Importing the needed css into our index.js, bc remember webpack is going to roll all our stuff and bundle it nicely for us

```js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
```

15. We're gonna need a form with some input for our 'heroes' name to be edited into.

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

16. The attributes of input `value` and `onChange` are going to be our state.selectedHero a class method `handleInputChange`

17. Filling out the method `handleInputChange`

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

18.
