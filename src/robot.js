const shortid = require('shortid')

class Robot {
  constructor (description=null) {
    this._id = shortid()
    this._description = description
    this._network = []
  }

  get id () {
    return this._id
  }

  set id (val) {
    throw new Error('You cannot set the ID of an existing robot')
  }

  get description () {
    return this._description
  }

  set description (val) {
    if (!val) throw new Error('Description cannot be empty')
    this._description = val
  }

  get network () {
    return this._network
  }

  set network (val) {
    throw new Error('You cannot set the network')
  }

  meet (robot) {
    if (robot instanceof Robot) {
      this._network.push(robot.id)
    } else {
      throw new Error('Only able to meet other robots')
    }
  }
}

module.exports = Robot