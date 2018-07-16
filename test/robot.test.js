const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation')
    it('should allow for a description property to be set in the constructor')
    it('if the description is not set, it should be null')
  })

  describe('get id', function () {
    it('should return the id of the robot')
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id')
  })

  describe('get description', function () {
    it('should return the description')
  })

  describe('set description', function () {
    it('should throw an error if the value is empty')
    it('should set the description of the robot')
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met')
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network')
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot')
    it('should throw an error if the inserted value is not a robot instance')
    it('should add the robots ids to each other\'s networks')
  })
})
