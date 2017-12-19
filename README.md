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

10.
