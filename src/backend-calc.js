export class User {
  constructor (age) {
    this.earthA = age;
    this.mercuryA = this.calMercAge();
    this.venusA = this.calVenusAge();
    this.marsA = this.calMarsAge();
    this.jupitarA = this.calJupAge();
    this.avergLife = 81;
  }

calMercAge() {
  return this.earthA / .24 ;
}
calVenusAge() {
  return this.earthA / .62 ;
}
calMarsAge() {
  return this.earthA / 1.88;
}
calJupAge(){
  return this.earthA / 11.86
}


remainLife() {
  let lifeExpectEarth = this.avergLife;
  this.remainEarth = (lifeExpectEarth - this.earthA).toFixed(0);
  this.remainMerc = (this.remainEarth / .24 ).toFixed(0);
  this.remainVenus =(this.remainEarth / .62 ).toFixed(0);
  this.remainMars = (this.remainEarth / 1.88).toFixed(0);
  this.remainJupitar = (this.remainEarth / 11.86).toFixed(0);
}











lifeCheck() {
  if (this.earthA < this.avergLife){
    this.remainLife() 
    } else {
      this.surpassedlife();
  }
}
};

