function random(num){
    return Math.floor(Math.random() * num);
}

class Canvas {
    constructor(canvasSelector, canvasColor = '#000', makeFullScreen = true){
        this.canvas = document.querySelector(canvasSelector);
        this.canvas.style.background = canvasColor;
        if (makeFullScreen) {
            this.makeFullScreen();
        }
    }

    getCtx(dimention = '2D') {
        return this.canvas.getContext(dimention);
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeigth() {
        return this.canvas.heigth;
    }

    clear() {
        this.getCtx().clearRect(0, 0, this.getWidth(), this.getHeigth())
    }

    makeFullScreen() {
        this.canvas.heigth = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }
}

class Animation {
    constructor(canvas, circleNumber = 120, circles = null){
        this.canvas = canvas;
        if (circles === null){
            circles = [];
            for(let i = 0; i < circleNumber; i++){
                circles.push(new circleNumber(this.getCanvas()));
            }
        };
        this.circles = circles;
        this.render();
    }

    getCanvas(){
        return this.canvas;
    }

    getCircles() {
        return this.circles;
    }

    moveCircles(stepSize = 10){
        this.getCircles().forEach((circle) => {
            circle.move(stepSize);
        });
    }

    drawCircles() {
        this.getCircles().forEach((circle) =>{
            circle.draw();
        });
    }

    render(timeFrame = 40) {
        setInterval(() => {
            this.canvas.clear();
            this.moveCircles();
            this.drawCircles();
        }, timeFrame);
    }  
}

class Circle {
    constructor(canvas) {
        this.setCanvas(canvas);
        this.setRandomPosition();
        this.setSize();

        this.draw();
    }

    move(stepSize) {
        let xDis = (this.x - (this.getCanvasWidth() / 2));
        let yDis = (this.y - (this.getCanvasHeight() / 2));
        let dis = Math.floor(Math.sqrt((xDis * xDis) + (yDis * yDis)));
        let stepChange = dis * 0.007;
        this.lastX = this.x;
        this.lastY = this.y;
        this.x += (stepSize * stepChange / dis) * xDis;
        this.y += (stepSize * stepChange / dis) * yDis;

        this.setSize();
        this.checkPosition();
    }

    setRandomPosition() {
        this.x = random(this.getCanvasWidth());
        this.y = random(this.getCanvasHeight());
        this.lastY = this.y;
        this.lastX = this.x;
    }

    checkPosition() {
        if(this.x > this.getCanvasWidth() || this.x < 0 || this.y > this.getCanvasHeight() || this.y < 0){
            this.setRandomPosition();
            this.setSize();
        }
    }

    setSize(maxSize = 6, minSize = 1) {
        this.size = Math.abs(this.getCanvasWidth() / 2 - this.x) + Math.abs(this.getCanvasHeight() / 2 - this.y);
        let mx = (this.getCanvasHeight() + this.getCanvasWidth()) / 2;
        this.size = (maxSize - minSize) / mx * this.size + minSize;
        this.size *= 0.6;
    }

    getCtx() {
        return this.canvas,this.getCtx();
    }

    draw(circleColor = '#fff', lineColor = '#fff') {
        this.getCtx().beginPath();
        this.getCtx().fillStyle = circleColor;
        this.getCtx().arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.getCtx().fill();
        this.getCtx().beginPath();
        this.getCtx().strokeStyle = lineColor;
        this.getCtx().fillStyle = lineColor;
        this.getCtx().moveTo(this.lastX, this.lastY);
        this.getCtx.lineTo(this.x, this.y);
        this.getCtx().stroke();
    }

    getCanvasWidth() {
        return this.canvas.getWidth();
    }

    getCanvasHeight() {
        return this.canvas.getHeigth();
    }
}

new Animation(new Canvas('#animation-canvas'));