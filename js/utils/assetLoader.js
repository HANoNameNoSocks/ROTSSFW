function AssetLoader() {
    this.images = [];
};

AssetLoader.prototype.load = function load() {
    LOGGER.log("loading assets");

    this._loadImage("monster", "resources/img/monster.png", MONSTER_WIDTH, MONSTER_HEIGHT);
    this._loadImage("hero", "resources/img/hero.png", HERO_WIDTH, HERO_HEIGHT);
    this._loadImage("background", "resources/img/background.png", CANVAS_HEIGHT, CANVAS_WIDTH);
};

AssetLoader.prototype.getImage = function getImage(name) {
    LOGGER.log("fetching " + name + " image...");
    LOGGER.log("found " + this.images[name]);
    return this.images[name];
};

AssetLoader.prototype._loadImage = function loadImage(name, src, width, height) {
    var img = new Image(width, height);
    img.src = src;

    var me = this;
    img.onload = function() {
        me.images[name] = img;
    };

    this.images[name] = null;
};
    
