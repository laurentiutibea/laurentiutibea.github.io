class Snake{
    constructor(){
        this.snake = document.getElementById("snake_head");
        this.food = document.getElementById("food");
        this.x = this.snake.getAttribute("x");
        this.y = this.snake.getAttribute("y");
        this.foodX = this.food.getAttribute("x");
        this.foodY = this.food.getAttribute("y");
        this.maxX = 780;
        this.minX = 0;
        this.maxY = 480;
        this.minY = 0;
        this.interval = 0;
        this.snakePoz = this.snake.getBoundingClientRect();
        this.speed = 205;
        this.level = 1;
        this.points = 0;
        this.showLevel = document.getElementById("level");
        this.showPoints = document.getElementById("points");
    }

    start(){
        this.foodX = Math.floor(Math.random()*(this.maxX/20))*20;
        this.foodY = Math.floor(Math.random()*(this.maxY/20))*20;
        this.food.setAttribute("x", this.foodX);
        this.food.setAttribute("y", this.foodY);
        this.food.style.display = "block";
        this.foodPoz = this.food.getBoundingClientRect();
        if(this.points !== 0 && this.points % 5 === 0){
            this.level++;
            this.speed -= 5;
        }
        this.showLevel.innerHTML = `Level: ${this.level}`;
        this.showPoints.innerHTML = `Points: ${this.points}`;
    }

    move(type, direction, poz, max, min){
        let coords;
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if(type === "x"){
                direction === "+" ? this.x -= -20 : this.x -= 20;
                coords = this.x;
            }
            else if(type === "y"){
                direction === "+" ? this.y -= -20 : this.y -= 20;
                coords = this.y;
            }
            if(coords <= max && coords >= min){
                this.snake.setAttribute(`${poz}`, coords);
                this.snakePoz = this.snake.getBoundingClientRect();
                if(this.snakePoz.x === this.foodPoz.x && this.snakePoz.y === this.foodPoz.y){
                    console.log("Good job!");
                    this.points++;
                    this.start();
                }
            }
            else {
                clearInterval(this.interval);
                this.gameOver();
            }
        },this.speed);
    }

    gameOver(){
        alert("Game over!");
        this.x = this.y = 100;
        this.snake.setAttribute("x", this.x);
        this.snake.setAttribute("y", this.y);
        this.speed = 200;
        this.level = 1;
    }

    check(e){
        if (e.key === "ArrowRight") this.move("x","+","x",this.maxX,this.minX);
        else if (e.key === "ArrowLeft") this.move("x","-","x",this.maxX,this.minX);
        else if (e.key === "ArrowUp") this.move("y","-","y",this.maxY,this.minY);
        else if (e.key === "ArrowDown") this.move("y","+","y",this.maxY,this.minY);
    }
}

document.getElementById("start").addEventListener("click", () => {
    const snakeOb = new Snake();
    snakeOb.start();
    document.addEventListener("keydown", snakeOb.check.bind(snakeOb));
});