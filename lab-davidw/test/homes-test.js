'use strict';

const assert = require('assert');
const homes = require('../lib/homes.js');

let bellTownCondo = new homes.Apartment(1, '200sqf', true);
let ballardHouse = new homes.House(4, '3000sqf', true);
let bellevueMansion = new homes.Mansion(15, '10000sqf', true);

describe('homes.js', () => {
  describe('#Apartment', () => {
    it('should return an object', () => {
      assert.equal(typeof bellTownCondo, 'object');
    });
    it('should not be a sring', () => {
      assert.notEqual(typeof bellTownCondo, 'string');
    });
  });
  describe('#House', () => {
    it('should return an object', () => {
      assert.equal(typeof ballardHouse, 'object');
    });
    it('should not be a sring', () => {
      assert.notEqual(typeof ballardHouse, 'string');
    });
  });
  describe('#Mansion', () => {
    it('should return an object', () => {
      assert.equal(typeof bellevueMansion, 'object');
    });
    it('should not be a sring', () => {
      assert.notEqual(typeof bellevueMansion, 'string');
    });
  });
});
