import { Calculator } from './../src/backend-calc.js'


describe ("Calculator", () => {

test("it should create a new Calculator object" , () => {
  let calculator = new Calculator;
  expect(calculator).toEqual({})
})
})