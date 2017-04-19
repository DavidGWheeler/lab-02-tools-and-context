'use strict';

module.exports = exports = {};

exports.Homes = function(rooms, size) {
  this.rooms = rooms;
  this.size = size;
};

exports.Apartment = function(rooms, size) {
  Homes.call(this, rooms, size);
  this.isStudio = true;
};

let bellTown_condo = new Apartment(1, '200sqf', true);

exports.House = function (rooms, size) {
  Homes.apply(this, [rooms, size]);
  this.isTownHouse = false;
};

let ballard_house = new House(4, '3000sqf', true);

exports.Mansion = function(rooms, size) {
  Homes.bind(this, rooms, size);
  this.isHuge = true;
};

let bellevue_mansion = new Mansion(15, '10000sqf', true);
