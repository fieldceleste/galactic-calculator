import { User } from './../src/backend-calc.js'


describe ("User", () => {

  let ageInput;
  let user;

  beforeEach(() => {
    ageInput = 30;
    user= new User(ageInput);

  });
test("it should create a object called user", () => {
  let user = new User;
  expect(user).toEqual({})
});
test ("it should use the object user and calculate earth age", () => {
  expect(user.earthA).toEqual(30);
});
test ("it should show users inputted age in Mercury years" , () => {
  expect(user.mercuryA).toEqual(48.4);

})
});

















  // })
//  test("it should be able to create an new user object", () => {
//    let user = new User;
//    expect(user).toEqual({})
//  })
//  test ("it should allow person to be inside of calculator object")
// })