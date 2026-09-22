function randon(num){
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
    
}