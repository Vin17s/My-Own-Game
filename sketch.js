var player,form,game,database
var gameState=0
var playerCount=0
var players,player1,player2,allPlayers,box,infinity


function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database()
  game= new Game()
  game.getState()
  game.start()
  
}

function draw() {
  background(255,255,255);  
  if(playerCount==2){
    game.update(1)

  }
  fill("black")
  text(mouseX+" , "+mouseY,mouseX,mouseY)
  if(gameState==1){
    clear()
    game.play()
  }

}