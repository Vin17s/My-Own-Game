class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })  }  
        update(state){
          database.ref('/').update({
              gameState:state
          })
        }
        async start(){
          if(gameState==0){
              player = new Player()
              var playerRef=await database.ref('playerCount').once("value")
              if(playerRef.exists()){
                playerCount=playerRef.val()
                player.getCount()
              }
              form = new Form()
              form.display()
              
          }
          stroke("black")
          box = createSprite(displayWidth/2-100,100,800,800)
          box.shapeColor="white"
          player1 = createSprite(1058,400,10,100)
          player2 = createSprite(400,400,10,100)
          infinity = createSprite(713,400,20,20)
        }
        play(){
        //    form.hide()
            drawSprites()
        }
}