class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/bite-fish.gif";
    this.maxSwimSpeed = 200;
    this.width = options.width || 30;
    this.height = options.width || 30;
    this.isTasty = false;
  }
  updateOneTick() {
    super.updateOneTick();
    const ents = this.tank.denizens;
    for (let fish in ents) {
      if (ents[fish].isTasty && fish !== this.id &&
          ents[fish].position.x + ents[fish].width > this.position.x &&
          ents[fish].position.x < this.position.x + this.width &&
          ents[fish].position.y + ents[fish].height > this.position.y &&
          ents[fish].position.y < this.position.y + this.height
      ) {
        this.tank.removeDenizen(fish,undefined);
        this.width += 10;
        this.height += 10;
      }
    }
    // on collision, eat a fish and then increase size?
  }
  onClick() {
    // after on collision is implemented, split size in half after splitting
    this.width = Math.ceil(this.width / 2);
    this.height = Math.ceil(this.height / 2);
    let f = new BiteFish({
      width: this.width,
      height: this.height,
      tank: this.tank,
      position: this.position,
      velocity: this.makeNewVelocity(),
    });
  }
}
