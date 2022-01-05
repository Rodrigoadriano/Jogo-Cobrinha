let html = document.querySelector("body")


var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');
var box = 32
let snake = []
snake[0] = {
    x:8 * box,
    y:8 * box,
}
let direção = "direita"

function criaBG(){
    
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, 16 * box, 16 * box);
    
}

let food  = {
    x: Math.floor(Math.random()  * 16 ) * box,
    y: Math.floor(Math.random()  * 16 ) * box


}

function drawFood(){
    ctx.fillStyle = "red"
    ctx.fillRect(food.x, food.y, box ,box)

}

function criaCobra(){
    for (let index = 0; index < snake.length; index++) {
        const element = snake[index];
        ctx.fillStyle = "green"
        ctx.fillRect(element.x,element.y,box,box)
        
    }
    

}


function IniaJogo(){ 
    
    if(snake[0].x > 15 * box && direção != "esquerda") snake[0].x = 0
    if(snake[0].x < 0 && direção != "direita") snake[0].x = 15* box

    if(snake[0].y > 15 * box && direção != "cima") snake[0].y = 0
    if(snake[0].y < 0 && direção != "baixo") snake[0].y = 15* box

    criaBG()
    criaCobra()
    drawFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y
    

    if(direção == "direita") snakeX += box;

    if(direção == "esquerda") snakeX -= box;
    if(direção == "baixo") snakeY += box;
    if(direção == "cima") snakeY -= box;
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();

    }else{
        food.x = Math.floor(Math.random()  * 16 ) * box
        food.y = Math.floor(Math.random()  * 16 ) * box
    }
    
    console.log(direção)

    
    let NewHead = {
        x: snakeX, 
        y: snakeY
        
        
    }
    snake.unshift(NewHead)
    console.log(NewHead)
}

document.addEventListener("keydown" , update)

function update(event){
    
    if(event.keyCode == 37 && direção != "direita" ) direção = "esquerda";
    if(event.keyCode == 38 && direção != "baixo" ) direção = "cima";
    if(event.keyCode == 39 && direção != "esquerda" ) direção = "direita";
    if(event.keyCode == 40 && direção != "cima" ) direção = "baixo";
}

let jogo = setInterval(IniaJogo, 100)


