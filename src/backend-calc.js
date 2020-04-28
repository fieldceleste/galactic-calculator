export class User {
  constructor (age) {
    this.earthA = age;
    this.mercuryA = this.calMercAge(age);
    this.venusA = this.calVenusAge(age);
    this.marsA = this.calMarsAge(age);
    this.jupitarA = this.calJupAge(age);
    this.avergLife = 81;
   
  }

calMercAge(earthA) {
  return this.earthA / .24 ;
}
calVenusAge(earthA) {
  return this.earthA / .62 ;
}
calMarsAge(earthA) {
  return this.earthA / 1.88;
}
calJupAge(earthA){
  return this.earthA / 11.86
}

lifeCheck() {
  if (this.earthA < this.avergLife){
    this.remainLife() 
    } else {
      this.surpassLife();
  }
}
remainLife() {
  let lifeExpEarth = this.avergLife;
  this.remainEarth = (lifeExpEarth - this.earthA).toFixed(0);
  this.remainMerc = (this.remainEarth / .24 ).toFixed(0);
  this.remainVenus =(this.remainEarth / .62 ).toFixed(0);
  this.remainMars = (this.remainEarth / 1.88).toFixed(0);
  this.remainJup = (this.remainEarth / 11.86).toFixed(0);
}



surpassLife() {
  let lifeExpEarth = this.avergLife;
  this.ageSurpEarth= (this.earthA - lifeExpEarth ).toFixed(0);
  this.ageSurpMerc = (this.ageSurpEarth / .24).toFixed(0);
  this.ageSurpVenus = (this.ageSurpEarth / .62).toFixed(0);
  this.ageSurpMars = (this.ageSurpEarth / 1.88).toFixed(0);
  this.ageSurpJup = (this.ageSurpEarth / 11.86).toFixed(0);
}








};

