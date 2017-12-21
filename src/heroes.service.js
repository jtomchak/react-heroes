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

// fetch(`https://api.github.com/users/${this.props.params.username}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0
// `)
//             .then(resp => resp.json())
//             .then(user => {
//                 this.setState((prevState, props) => ({        //({ means we are returning an object
//                     user: user
//                 }));
//             })
//             .catch(err => console.log(err));
//     }

//Mock Fetch HTTP GET request for Heroes
const getHeroes = new Promise((resolve, reject) => {
  resolve(HEROES);
});

const getHeroById = heroId =>
  new Promise((resolve, reject) => {
    resolve(HEROES.find(hero => hero.id === heroId));
  });

export { getHeroes, getHeroById };
