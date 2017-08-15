class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onPlanet(orbitalPeriod) {
    var planetAge = this.seconds / (31557600 * orbitalPeriod);
    return parseFloat(planetAge.toFixed(2));
  }

  onEarth() {
    var earthAge = this.seconds / 31557600;
    return parseFloat(earthAge.toFixed(2));
  }

  onMercury() {
    return this.onPlanet(0.2408467);
  }

  onVenus() {
    return this.onPlanet(0.61519726);
  }

  onMars() {
    return this.onPlanet(1.880815);
  }

  onJupiter() {
    return this.onPlanet(11.862615);
  }

  onSaturn() {
    return this.onPlanet(29.447498);
  }

  onUranus() {
    return this.onPlanet(84.016846);
  }

  onNeptune() {
    return this.onPlanet(164.79132);
  }
}

module.exports = SpaceAge;
