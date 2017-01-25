function Hero() {
    this.speed = HERO_BASE_SPEED; // movement in pixels per second
    this.x = 0;
    this.y = 0;

    this.image = null;
    this.init();
};

Hero.prototype.init = function() {
    LOGGER.log("hero creation");

    this.image = ASSET_LOADER.getImage("hero");
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 2;
};

Hero.prototype.update = function(playerHoldingUp, playerHoldingDown, playerHoldingLeft, playerHoldingRight, modifier) {  
    if (this.image === null) {
        this.image = ASSET_LOADER.getImage("hero");

    } else {
        var velocity = this.speed * modifier;

        if (playerHoldingUp) { this.y -= velocity; }
        if (playerHoldingDown) { this.y += velocity; }
        if (playerHoldingLeft) { this.x -= velocity; }
        if (playerHoldingRight) { this.x += velocity; }

        this.restrainToArea();
    }
};

Hero.prototype.restrainToArea = function() {
    var hitsTop = this.y < 0;
    var hitsBottom = this.y > CANVAS_HEIGHT - this.image.height;
    var hitsLeft = this.x < 0;
    var hitsRight = this.x > CANVAS_WIDTH - this.image.width;

    if (hitsTop) { this.y = 0; }
    if (hitsBottom) { this.y = CANVAS_HEIGHT - this.image.height; }
    if (hitsLeft) { this.x = 0; }
    if (hitsRight) { this.x = CANVAS_WIDTH - this.image.width; }
};

