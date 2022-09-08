const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var allSuperheroes = superheroes.all;

var allSupervillains = supervillains.all;
var mySupervillainName = supervillains.random();

console.log(mySupervillainName)