import { Calculator } from './../src/backend-calc.js'
import { User} from './../src/backend-calc.js'

describe ("Calculator", () => {

test("it should create a new Calculator object" , () => {
  let calculator = new Calculator;
  expect(calculator).toEqual({})
})
 test("it should be able to creat an new user object", () => {
   let user = new User;
   expect(user).toEqual({})
 })
})