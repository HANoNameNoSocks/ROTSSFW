function Monster() {
    this.image = null;
    this.x = 0;
    this.y = 0;

    this.init();
};

Monster.prototype.init = function init() {
    LOGGER.log("creating monster");
    this.image = ASSET_LOADER.getImage("monster");
    this.toRandomPosition();
};

Monster.prototype.update = function update() {
    if (this.image === null) {
        this.image = ASSET_LOADER.getImage("monster");
    }
};

Monster.prototype.die = function repop() {
    this.toRandomPosition(); 
};

Monster.prototype.toRandomPosition = function toRandomPosition() {
    this.x = 32 + (Math.random() * (CANVAS_WIDTH - 64));
    this.y = 32 + (Math.random() * (CANVAS_HEIGHT - 64));
};

