class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
  }

  update(t) {
    if (this.width > 60) this.width -= 2;
    if (this.height < 60) this.height += 1;
  }

  onClick(event) {
    this.width = 100;
    this.height = 40;
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
}
