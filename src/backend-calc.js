export class User {
  constructor (age) {
    this.earthA = age;
    this.mercuryA = this.calMercAge();
    this.venusA = this.calVenusAge();
    this.marsA = this.calMarsAge();
    this.jupitarA = this.calJupAge();
    this.avergLife = 91;
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


lifeCheck() {
  if (this.earthA < this.avergLife){
    this.remainLife() 
    } else {
      this.surpassedlife();
  }
}
remainLife() {
  let lifeExpectEarth = this.avergLife;
  this.remainEarth = (lifeExpectEarth - this.earthA).toFixed(0);

}


};

