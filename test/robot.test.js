const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {

  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', () => {
      const robotA = new Robot()
      const robotB = new Robot()
      expect(robotA.id).to.not.equal(robotB.id)
    })
    it('should allow for a description property to be set in the constructor', () => {
      const robot = new Robot(`I'm a Robot`)
      expect(robot).to.have.property('description')
    })
    it('if the description is not set, it should be null', () => {
      const robot = new Robot()
      expect(robot.description).to.be.null
    })
  })

  describe('get id', function () {
    const robot = new Robot()
    it('should return the id of the robot', () => expect(robot.id).to.be.ok)
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', () => {
      const robot = new Robot()
      const actual = () => robot.id = 1
      expect(actual).to.throw()
    })
  })

  describe('get description', function () {
    it('should return the description', () => {
      const robot = new Robot('describe me')
      expect(robot.description).to.be.ok
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', () => {
      const robot = new Robot()
      const actual = () => robot.description = null
      expect(actual).to.throw()
    })
    it('should set the description of the robot', () => {
      const robot = new Robot('string')
      const actual = () => robot.description = `change the value of 'string'`
      expect(actual).to.not.throw()
      expect(robot.description).to.equal(`change the value of 'string'`)
    })
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
