/**
 * Grid constructor.
 *
 * @constructor
 */
function Grid() {
    this.width  = null;
    this.height = null;
    this.elements  = null;
}

/**
 * Initialize the grid
 */
Grid.prototype.init = function (type, width, height) {
    this.width = width;
    this.height = height;

    this.elements = [];

    var x, y;
    for (x = 0; x < width; x++) {
        this.elements.push([]);
        for (y = 0; y < height; y++) {
            this.elements[x].push(type);
        }
    }
};