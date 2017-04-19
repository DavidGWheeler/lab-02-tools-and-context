'use strict';

module.exports = exports = {};

function Homes(rooms, size) {
  this.rooms = rooms;
  this.size = size;
}


exports.Apartment = function(rooms, size) {
  Homes.call(this, rooms, size);
  this.isStudio = true;
};


exports.House = function (rooms, size) {
  Homes.apply(this, [rooms, size]);
  this.isTownHouse = false;
};


exports.Mansion = function(rooms, size) {
  Homes.bind(this, rooms, size);
  this.isHuge = true;
};
