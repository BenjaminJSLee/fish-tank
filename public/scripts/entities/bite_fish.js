class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/bite-fish.gif";
    this.maxSwimSpeed = 200;
    this.width = 30;
    this.height = 30;
  }
  updateOneTick() {
    super.updateOneTick();
  }
  onClick() {
    var f = new BiteFish({
      tank: this.tank,
      position: this.position,
      velocity: this.makeNewVelocity(),
      type: this.tank.getRandomSpecies(),
    });
  }
}
