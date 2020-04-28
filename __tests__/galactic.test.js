import { User } from './../src/backend-calc.js'


describe("User", () => {

  let ageInput;
  let user;
  let olderAge;

  beforeEach(() => {
    ageInput = 30;
    user = new User(ageInput);

  });
  // test("it should create a object called user", () => {
  //   let user = new User;
  //   expect(user).toEqual({})
  // });


  test("it should use the object user and calculate earth age", () => {
    expect(new User()).toBeInstanceOf(User);
    expect(user.earthA).toEqual(30);
  });

  test("it should show users inputted age in Mercury years", () => {
    expect(user.mercuryA).toEqual(125);

  });

  test("it should show users inputted age in Venus years", () => {
    expect(user.venusA).toBeCloseTo(48.38, 1);

  });

  test("it should show users inputted age in Mars years", () => {
    expect(user.marsA).toBeCloseTo(15.96, 1);
  });

  test("it should show users inputted age in Jupitar years", () => {
    expect(user.jupitarA).toBeCloseTo(2.53, 1);
  });

  test("it should show the life expectancy in remaining years on each planet", () => {
    user.lifeCheck();
    expect(user.remainEarth).toEqual("51");
    expect(user.remainMerc).toEqual("213");
    expect(user.remainVenus).toEqual("82");
    expect(user.remainMars).toEqual("27");
    expect(user.remainJup).toEqual("4");
  });

  test("it should show the users remianing life expectancy on each planet,when they exceed the average age", () => {
    olderAge = new User(91);
    olderAge.lifeCheck();
    expect(olderAge.ageSurpEarth).toEqual("10");
    expect(olderAge.ageSurpMerc).toEqual("42");
    expect(olderAge.ageSurpVenus).toEqual("16");
    expect(olderAge.ageSurpMars).toEqual("5");
    expect(olderAge.ageSurpJup).toEqual("1");

  });
});



















  // })
//  test("it should be able to create an new user object", () => {
//    let user = new User;
//    expect(user).toEqual({})
//  })
//  test ("it should allow person to be inside of calculator object")
// })