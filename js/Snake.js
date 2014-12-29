/**
 * Snake constructor.
 *
 * @constructor
 */
function Snake() {
    this.direction = '';
    this.head = null;
    this.tailElements = [];
}

/**
 * Initialize the snake object.
 *
 * @param direction
 * @param x - Position
 * @param y - Position
 */
Snake.prototype.init = function (direction, x, y) {
    this.direction = direction;

    this.tailElements = [];
    this.insert(x, y);
};

/**
 * Inserts a new snake element.
 *
 * @param x - Position
 * @param y - Position
 */
Snake.prototype.insert = function (x, y) {
    // add a new element on the beginning of the snake queue.
    this.tailElements.unshift({x: x, y: y});
    this.head = this.tailElements[0];
};