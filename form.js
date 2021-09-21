class Form
{
    constructor()
    {
        this.title = createElement('h1')
        this.lobby = createElement('h1')
       
        this.input1 = createInput().attribute( 'maxlength', '10' );
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.reset  = createButton('Reset');
        
    }
    hide()
    {
        this.input1.hide();
        this.button.hide();
        this.title.hide();
    }

    display()
    {
        this.input1.attribute('placeholder', 'Enter Your Name');
        this.lobby.html("Waiting For Other Players...");
        this.lobby.position( displayWidth/2-450, displayHeight/2 - 450);
        this.lobby.style('color', 'Yellow');
        this.lobby.style('font-size', '5em');
        this.lobby.style('opacity', '0%');
        
        this.reset.style('height', '50px');
        this.reset.style('width', '100px');
        this.reset.style('background', 'transparent')
        this.reset.style('border', '4px solid purple')
        this.reset.style('color', 'purple')
        this.reset.style('font-size', '24px')
        this.reset.style('border-radius', '15px')
        this.reset.style('cursor', 'pointer')
        this.reset.style('box-shadow', '0 10px 40px purple');

        this.reset.position(displayWidth - 130 , 40);
        this.title.html("SQUAD MASTER");
        this.title.position( displayWidth/2-450, displayHeight/2 - 450);
        this.title.style('color', 'Yellow');
        this.title.style('font-size', '7em');
        //this.input1.html.placeholder("Enter Name");
        this.input1.position(displayWidth/2-200, displayHeight/2-100);
        this.input1.style('height', '60px');
        this.input1.style('width', '500px');
        this.input1.style('font-size', '2em');
        this.input1.style('box-shadow', '0 20px 40px #fff');
        this.input1.style('border', 'none');
        this.input1.style('outline', 'none')
        this.input1.style('color', 'white')
        this.input1.style('border-radius', '10px')
        this.input1.style('background', 'transparent')
        this.input1.style('border', '2px solid #fff')  
        this.input1.style('font-size', '20px');
        this.button.position(displayWidth/2-40, displayHeight/2 + 40);
        this.button.style('height', '50px');
        this.button.style('width', '100px');
        this.button.style('background', 'transparent')
        this.button.style('border', '4px solid cyan')
        this.button.style('color', 'cyan')
        this.button.style('font-size', '24px')
        this.button.style('border-radius', '15px')
        this.button.style('cursor', 'pointer')
        this.button.style('box-shadow', '0 10px 40px cyan');
        background(back_img); 

      
    this.button.mousePressed(()=>{
       
        const checkname = this.input1.value();
        //console.log(checkname);
        if(checkname !== "")
        {

            
                this.input1.hide();
                this.button.hide();
                this.title.hide();
                this.lobby.style('opacity', '100%');
                player.name = this.input1.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                //console.log("HI" + player.name);
                this.greeting.html(player.name);
                this.greeting.style('')
                this.greeting.position(displayWidth/2-290, displayHeight/2-150);
                this.greeting.style('color', 'white');
                this.greeting.style('font-size', '5em');
                this.greeting.style('text-shadow', '0 20px 40px cyan');
                this.greeting.style('text-transform', 'uppercase');
                this.greeting.style('text-align', 'center');
                /*this.greeting.style('color', 'red');*/
        
            
           
        }
        else{
            alert("enter a valid name");

        }


});
    
 
this.reset.mousePressed(()=>
{
  player.updateCount(0);
  game.updateState(0);
  game.updateChoice(0);
  game.updateResult(0);
  game.updateWhom("Waiting For Order From King");
  database.ref('/').update(
     {
       players : null
     });    
  form.display(); 
    
  this.greeting.hide();
 gameState = 0;
  game.start();
});

}
}
