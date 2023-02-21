class Ball {
    constructor() {
        this.id = ballCount;
        ballCount++;
        this.xSpeed = this.getRandomNumber(-7, 7, false);
        this.ySpeed = this.getRandomNumber(-7, 7, false);
        this.position = {
            'x': Number(document.body.offsetWidth) / 2, 
            'y': Number(document.body.offsetHeight) / 2
        };
        console.log(this.position);
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.className = 'ball';
        this.element.style.backgroundColor = this.getRandomColor();
        this.element.style.opacity = 0.85;
        document.body.appendChild(this.element);
    }

    move() {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
    }

    updateCSSPosition() {
        this.element.style.left = `${this.position.x}px`;
        this.element.style.top = `${this.position.y}px`;
    }

    checkWalls() {
        if ((this.position.x + 32 >= document.body.offsetWidth) || (this.position.x <= 0)) {
            this.xSpeed = -this.xSpeed;
        }
        if ((this.position.y + 32 >= document.body.offsetHeight) || (this.position.y <= 0)) {
            this.ySpeed = -this.ySpeed;
        }
    }

    getRandomNumber(num1, num2, round=true) {
        let number = Math.random() * (num2 - num1);
        if (round) {
            number = Math.floor(number);
        }
        number += num1;
        return number;
    }
    
    getRandomColor() {
        return `hsl(${this.getRandomNumber(0, 256)}, ${this.getRandomNumber(80, 100)}%, ${this.getRandomNumber(30, 40)}%)`;
    }
}

let ballCount = 0;
const balls = [];

const moveBalls = () => {
    for (const ball of balls) {
        ball.move();
        ball.updateCSSPosition();
    }
}

const checkBalls = () => {
    for (const ball of balls) {
        ball.checkWalls();
    }
}

const update = () => {
    moveBalls();
    checkBalls();
}

const createBall = () => {
    balls.push(new Ball());
}

setInterval(update, 17);

setInterval(createBall, 4000);

createBall();