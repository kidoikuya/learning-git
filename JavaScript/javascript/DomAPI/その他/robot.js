class Point {
    #x;
    #y;
    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
    }
    get x() {
        return this.#x;
    }
    set x(x) {
        this.#x = x;
    }
    get y() {
        return this.#y;
    }
    set y(y) {
        this.#y = y;
    }
}

class Robot{
    #point;
    constructor(x = 0, y = 0) {
        this.#point = new Point(x, y);
    }
    moveX(amount) {
        this.#point.x += amount;
    }
    moveY(amount) {
        this.#point.y += amount;
    }
    moveXY(amountX, amountY) {
        this.moveX(amountX);
        this.moveY(amountY);
    }
    getPosition() {
        // return this.#point;
        return new Point(this.#point.x, this.#point.y);
    }
}

const robot = new Robot();
robot.moveX(5);
robot.moveY(10);
let pos = robot.getPosition()
console.log(pos.x, pos.y); // [5, 10]
robot.moveXY(10, 5);
console.log(pos.x, pos.y); // [15, 15]
pos.x = 100
pos.y = 200
