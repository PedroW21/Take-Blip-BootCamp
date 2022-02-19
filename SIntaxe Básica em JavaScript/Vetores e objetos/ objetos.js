var hero = {
    name: "Batman",
    hero: true,
    age: 36,
    powers: {
        inteligence: true,
        utilityBelt: true,
        superHearing: false,
        superStrenght: false,
        money: "infinite"
    }
}

console.log(hero);

var propInside = hero.age; // metodo 1 para desestruturação
console.log(propInside); 

var { name, hero, powers } = hero; // metodo 2 para desestruturação

console.log(name, hero, powers);