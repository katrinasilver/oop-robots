# Introduction to OOP

Exercise repository for learning the basics of OOP with JavaScript.

## Installation

1. Fork/clone

1. `npm install`

1. `npm test`

## Instructions

In this repository, you will be writing tests and building a `Robot` class. Each robot instance will have a unique id (provided by the [shortid](https://www.npmjs.com/package/shortid) package), a description, a network of other robots it knows, and a method called `.meet()` that will allow it to add a robot instance to its network.

The following code provides an example of how the robot should work:

```js
const hal = new Robot('A computer designed to control the Discovery One spacecraft')
const rob = new Robot('A robotic operating buddy')
const david = new Robot('An android in service of the Prometheus crew')

try {
  rob.id = 1 // throws Error
} catch (e) {
  console.error(e)
}

try {
  hal.description = 'A very friendly robot' // throws Error
} catch (e) {
  console.error(e)
}

try {
  david.network // []
  david.network = 'social' // throws Error
} catch (e) {
  console.error(e)
}

try {
  david.meet({ name: 'E.T.' }) // throws Error
} catch (e) {
  console.error(e)
}

david.meet(rob)
david.meet(hal)
david.network // [ <rob.id>, <hal.id> ]
rob.network // [ <david.id> ]
hal.network // [ <david.id> ]
```