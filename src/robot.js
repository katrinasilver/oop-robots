const shortid = require('shortid')
// robot template - classes are typically capitalized
class Robot {
  // a constructor gets called everytime instantiate the class Robot
  constructor(described, network) {
    this._id = shortid.generate() // underscores indicate private or internal value
    this._description = described || null
    this._network = []
  }

  // method attached to an instance of the Robot class
  meet(otherRobot) {
    if (otherRobot instanceof Robot) {
      this._network.push(otherRobot.id)
      otherRobot._network.push(this.id)

      // returning this would allow you to chain meet()
      return this
    }
    else throw new Error('not an instance of Robot')
  }

  get id () { return this._id }
  set id (val) { throw new Error('No id') }

  get description () { return this._description }
  set description(val) {
    if (!val) throw new Error('No description')
    this._description = val
  }

  get network() { return this._network }
  set network(val) {
    throw new Error('No network')
  }
}

module.exports = Robot

// inheritance - Cleaner inherits all properties that Robot class has
class Cleaner extends Robot {
  constructor() {
    super(description) // calls the descriptor constructor from the parent class Robot
    this.level = 10 //
  }
  // its own set, get and methods accepts super(), super() goes up one level
}
