function Monster() {
    this.image = null;
    this.x = 0;
    this.y = 0;

    this.init();
};

Monster.prototype.init = function() {
    LOGGER.log("creating monster");
    this.image = ASSET_LOADER.getImage("monster");
    this.toRandomPosition();
};

Monster.prototype.update = function() {
    if (this.image === null) {
        this.image = ASSET_LOADER.getImage("monster");
    } else {
        this._restrainToArea();
    }
};

Monster.prototype.die = function() {
    this.toRandomPosition(); 
};

Monster.prototype.toRandomPosition = function() {
    this.x = MONSTER_WIDTH + (Math.random() * (CANVAS_WIDTH - MONSTER_WIDTH));
    this.y = MONSTER_HEIGHT + (Math.random() * (CANVAS_HEIGHT - MONSTER_HEIGHT));
};

Monster.prototype._restrainToArea = function() {
    var hitsTop = this.y < 0;
    var hitsBottom = this.y > CANVAS_HEIGHT - this.image.height;
    var hitsLeft = this.x < 0;
    var hitsRight = this.x > CANVAS_WIDTH - this.image.width;

    if (hitsTop) { this.y = 0; }
    if (hitsBottom) { this.y = CANVAS_HEIGHT - this.image.height; }
    if (hitsLeft) { this.x = 0; }
    if (hitsRight) { this.x = CANVAS_WIDTH - this.image.width; }
};

