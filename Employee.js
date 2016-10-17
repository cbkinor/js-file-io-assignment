'use strict'

// import { readFile, writeFile } from 'fs'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote (title, salary) {
    this.title = title
    this.salary = salary
  }

  static parseFromFilePath (path) {
    let source = fs.readFileSync(path).toString()
    let obj = JSON.parse(source)
    console.log(source)
    return new Employee(obj.name, obj.title, obj.salary)
  }
}

module.exports = {
  Employee
}
