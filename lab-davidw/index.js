'use strict';

const homes = require('./lib/homes.js');
console.log(homes);

let bellTownCondo = new homes.Apartment(1, '200sqf', true);
let ballardHouse = new homes.House(4, '3000sqf', true);
let bellevueMansion = new homes.Mansion(15, '10000sqf', true);

console.log(bellTownCondo);

console.log(ballardHouse);

console.log(bellevueMansion);
