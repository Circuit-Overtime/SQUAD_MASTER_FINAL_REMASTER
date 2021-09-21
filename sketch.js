var playerCount, allPlayers, gameState = 0, updateResult = 0; updateChoice = 0, whomChoose = "", updateChoose ="";

var gameResult ;

var database, counttemp, playertemp;
var form, player, game; 
var plr;
var back_img, back_img_King, back_img_Rob, back_img_Mur, back_img_Pol;
var newId, parray, contestantCountRef;
var checkboxking;
var p1,  p2, p3, p4;
var kingch, whomCh, whom ;
var murname, thiefname;
function preload()
{
  back_img = loadImage("kind court.jpg");
  back_img_Pol = loadImage("policefinal.jpg");
  back_img_Mur = loadImage("murdererfinal.jpg");
  back_img_Rob = loadImage("robberfinal.jpg");
  back_img_King = loadImage("kingfinal.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.getChoice();
  game.start();
  game.getResult();
  game.getWhom();
 
  
}

function draw() 


{
 /*console.log(murname);
  console.log(thiefname);*/
if(playerCount === 4)
{
  game.updateState(1);
}
if(gameState === 1)
{
  clear();
  game.play();
}
if(gameState === 2)
{
  game.end();
}

}