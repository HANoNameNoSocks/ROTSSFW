function Game() {
    this.hero = null;
    this.monster = null;
    this.playScreen = null;
    this.player = null;

    this.score = 0;
};

Game.prototype.create = function create() {
    LOGGER.log("creating the game");

    this.player = new Player(PLAYER_NAME);
    this.playScreen = new PlayScreen();
    this.hero = new Hero();
    this.monster = new Monster();

    this.render();
};

Game.prototype.update = function update(modifier) {
    LOGGER.log("updating the game");
    this.checkCollisions();

    this.playScreen.update();
    this.hero.update(
        this.player.holdingUp(), this.player.holdingDown(), 
        this.player.holdingLeft(), this.player.holdingRight(), modifier);
    this.monster.update();
    
    this.render();
};

Game.prototype.checkCollisions = function checkCollisions() {
    if (this.hero.x <= (this.monster.x + 32)
        && this.monster.x <= (this.hero.x + 32)
        && this.hero.y <= (this.monster.y + 32)
        && this.monster.y <= (this.hero.y + 32)) {

        LOGGER.log("OMG A COLLISION !");
        this.score++;
        this.monster.die();
        this.renderScore();
    }
};

Game.prototype.render = function render() {
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    this.renderObject(this.playScreen);
    this.renderObject(this.monster);
    this.renderObject(this.hero);
    this.renderScore();
};

Game.prototype.renderObject = function renderObject(renderable) {
    if (renderable.image != null) {
        CTX.drawImage(renderable.image, renderable.x, renderable.y);
    }
}; 

Game.prototype.renderScore = function renderScore() {
    CTX.fillStyle = SCORE_FILL_STYLE;
    CTX.font = SCORE_FONT;
    CTX.fillText(this.player.name + " killed " + this.score + " monsters OMG", 32, 32);
};


