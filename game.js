class Game 
{
    constructor(){
        this.kingtxt = createElement('h1');
        this.murderer = createButton('Murderer');
        this.thief = createButton('Thief');
        this.kingtxtThief = createElement('h1');
        this.kingtxtMur = createElement('h1');
        this.Robtxt = createElement('h3');
        this.Robcom = createElement('h5');
        this.Murtxt = createElement('h3');
        this.Murcom = createElement('h5');
        this.Policemur = createElement('h3');
        this.murdererDec  = createElement('h3'); //tells victory/defeat
        this.thiefDec  = createElement('h3'); //tells victory or defeat
        this.thiefNameDisp = createElement('h5');
        this.murNameDisp = createElement('h5');
        this.kingOrder = createElement('h2');
        this.taskfinder  = createButton('Find Task!');
        this.didwin = createButton('Check for Police!');
        this.kingRes = createElement('h3');

        /*this.policemurderer = createButton(murname);
        this.policethief = createButton(thiefname);*/
        

 }
getResult()
{
    var getGameResult = database.ref('gameResult');
    getGameResult.on("value", function(resultdata){
        gameResult = resultdata.val();
    })
}
updateResult(result)
{
    database.ref('/').update({
        gameResult: result
    })
}
getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value" , function(data) {
            gameState = data.val();
    })
}
updateState(state)
     {
         database.ref('/').update({
                 gameState: state
         });
     }

getChoice()
     {
         var updateChoiceRef = database.ref('kingch');
         updateChoiceRef.on("value", function(datachoice) {
             updateChoice = datachoice.val();
         })
     }

updateChoice(choice)
 {
     database.ref('/').update({
         kingch: choice
     });
 }

 getWhom()
 {
     var updateWhomRef = database.ref('whomCh');
     updateWhomRef.on("value", function(whomChoose){
         updateChoose = whomChoose.val();
     })
 }
 updateWhom(whom)
 {
     database.ref('/').update({
         whomCh: whom
     })
 }
     async start()
     {
         if(gameState === 0){
             player = new Contestant();
             var contestantCountRef = await database.ref('playerCount').once("value");
             if(contestantCountRef.exists()){
                 playerCount = contestantCountRef.val();
                 player.getCount();
             }
             form = new Form();
             form.display();
         }
         p1= createSprite(100,200, 0,0);
         p2 = createSprite(200,200, 0,0);
         p3 = createSprite(300,200, 0,0);
         p4 = createSprite(400,200, 0,0);
        parray = [p1, p2, p3, p4];
       
      
        }
            
       
        
            
        
         play()
         {
             form.hide();
             Contestant.getPlayerInfo();
             //console.log(gameResult);
             if(allPlayers !== undefined)
             {
                 
                 var x = 0;
                 var y = 0;
                var index = 0;
                 background(back_img);
                 form.reset.hide();
                 for(var plr in allPlayers)
                 {
                    murname  = allPlayers.player2.name; //murderer
                    thiefname = allPlayers.player4.name ; //thief
                     index = index + 1;
                      x = x + 200;
                      y = displayHeight - allPlayers[plr].y;
                     parray[index-1].x = x;
                     parray[index-1].y = y;
                    
                     

                    //console.log(allPlayers.player2.name);
                    // POLICE
                     if(index === player.index && player.index === 1)
                     {
                        
                        this.policemurderer = createButton(murname);
                        this.policethief = createButton(thiefname);
                        background(back_img_Pol); 
                        form.lobby.hide();
                        form.greeting.hide(); 
                        //shows the task
                        this.kingOrder.position( displayWidth/2-100, displayHeight/2 - 300);
                        this.kingOrder.style('color', 'red');
                        this.kingOrder.style('font-size', '3em');
                        this.kingOrder.style('text-shadow', '0 20px 40px green');
                        this.kingOrder.html(updateChoose);
                       // console.log(updateChoose);

                        this.taskfinder.style('height', '100px');
                        this.taskfinder.style('width', '100px');
                        this.taskfinder.style('background', 'transparent')
                        this.taskfinder.style('border', '4px solid transparent')
                        this.taskfinder.style('color', 'transparent')
                        this.taskfinder.style('font-size', '24px')
                        this.taskfinder.style('border-radius', '15px')
                        this.taskfinder.style('cursor', 'pointer')
                        this.taskfinder.style('box-shadow', '0 10px 40px transparent');
                        this.taskfinder.position(displayWidth - 230 , 40);
                        
                        this.taskfinder.mousePressed(()=>
                    {

                        
                       if(updateChoice === 0)
                       {
                        this.policemurderer.html("");
                        this.policethief.html("");
                        this.kingOrder.position( displayWidth/2-100, displayHeight/2 - 300);
                        this.kingOrder.style('color', 'red');
                        this.kingOrder.style('font-size', '3em');
                        this.kingOrder.style('text-shadow', '0 20px 40px green');
                        this.kingOrder.html(updateChoose);
                        
                        

                       }
                        if(updateChoice === 1)
                       {
                        this.kingOrder.position( displayWidth/2-100, displayHeight/2 - 300);
                        this.kingOrder.style('color', 'red');
                        this.kingOrder.style('font-size', '3em');
                        this.kingOrder.style('text-shadow', '0 20px 40px green');
                        this.kingOrder.html(updateChoose);
                        this.policemurderer.style('display', 'block');
                        this.policethief.style('display', 'block');
                        

                       }
                       if(updateChoice === 2)
                       {
                        this.kingOrder.position( displayWidth/2-100, displayHeight/2 - 300);
                        this.kingOrder.style('color', 'red');
                        this.kingOrder.style('font-size', '3em');
                        this.kingOrder.style('text-shadow', '0 20px 40px green');
                        this.kingOrder.html(updateChoose);
                        this.policemurderer.style('display', 'block');
                        this.policethief.style('display', 'block');
                        

                       }
                    })

                        
                        

                         // murderer button
                         this.policemurderer.style('height', '100px');
                         this.policemurderer.style('width', '170px');
                         this.policemurderer.style('background', 'transparent')
                         this.policemurderer.style('border', '4px solid #2e00ff')
                         this.policemurderer.style('color', '#2e00ff')
                         this.policemurderer.style('font-size', '27px')
                         this.policemurderer.style('border-radius', '15px')
                         this.policemurderer.style('cursor', 'pointer')
                         this.policemurderer.style('box-shadow', '0 10px 40px #2e00ff');
                         this.policemurderer.position(displayWidth/2-150, displayHeight/2 + 40);
                         this.policemurderer.style('backdrop-filter', '3px');
                         this.policemurderer.style('display', '');


                       //thief button
                       this.policethief.style('height', '100px');
                       this.policethief.style('width', '220px');
                       this.policethief.style('background', 'transparent')
                       this.policethief.style('border', '4px solid #870c89')
                       this.policethief.style('color', '#870c89')
                       this.policethief.style('font-size', '32px')
                       this.policethief.style('border-radius', '15px')
                       this.policethief.style('cursor', 'pointer')
                       this.policethief.style('box-shadow', '0 10px 40px #870c89');
                       this.policethief.position(displayWidth/2+150, displayHeight/2 + 40);
                       this.policethief.style('backdrop-filter', '3px');
                       this.policethief.style('display', '');
                    
                        this.murdererDec.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.murdererDec.style('color', 'red');
                        this.murdererDec.style('font-size', '3em');
                        this.murdererDec.style('text-shadow', '0 20px 40px green');
                        this.murdererDec.style('display', 'block');

                        this.thiefDec.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.thiefDec.style('color', 'red');
                        this.thiefDec.style('font-size', '3em');
                        this.thiefDec.style('text-shadow', '0 20px 40px green');
                        this.thiefDec.style('display', 'block');
                        
                       this.policethief.mousePressed(()=>
                       {
                           //console.log(updateChoice)
        
                         if(updateChoice === 1)
                            {  
                                
                               
                                this.kingOrder.hide();  
                                this.policethief.style('border', '4px solid transparent')
                                this.policethief.style('color', 'transparent')
                                this.policethief.style('box-shadow', '0 10px 40px transparent');
                                this.policemurderer.style('border', '4px solid transparent')
                                this.policemurderer.style('color', 'transparent')
                                this.policemurderer.style('box-shadow', '0 10px 40px transparent');
                                this.murdererDec.html("Victory! Thief has been Qurantined in JAIL!");                    
                                this.thiefNameDisp.position( displayWidth/2-120, displayHeight/2 - 200);
                                this.thiefNameDisp.style('color', 'red');
                                this.thiefNameDisp.style('font-size', '3em');
                                this.thiefNameDisp.style('text-shadow', '0 20px 40px green');
                                this.thiefNameDisp.html(thiefname + "     Was a Thief");
                                this.updateResult(1); //police catches thief
                                this.updateState(2);
                                }
                        else
                        {
                            
                            
                            this.kingOrder.hide(); 
                             this.policethief.style('border', '4px solid transparent')
                            this.policethief.style('color', 'transparent')
                            this.policethief.style('box-shadow', '0 10px 40px transparent');
                            this.policemurderer.style('border', '4px solid transparent')
                            this.policemurderer.style('color', 'transparent')
                            this.policemurderer.style('box-shadow', '0 10px 40px transparent');
                            this.murdererDec.html("Defeat! Murderer has Escaped!");                   
                            this.thiefNameDisp.position( displayWidth/2-120, displayHeight/2 - 200);
                            this.thiefNameDisp.style('color', 'red');
                            this.thiefNameDisp.style('font-size', '3em');
                            this.thiefNameDisp.style('text-shadow', '0 20px 40px green');
                            this.thiefNameDisp.html(thiefname + "     Was not a Murderer");
                            this.updateResult(2); // police fails to catch thief
                            this.updateState(2);
                         

                        }
                        
                       });

                       this.policemurderer.mousePressed(()=>
                       {
                           //console.log(updateChoice)
                            if(updateChoice === 2)
                            {   
                                
                                
                                this.policemurderer.hide();
                                this.policethief.hide();
                                this.kingOrder.hide(); 
                                this.policethief.style('border', '4px solid transparent')
                                this.policethief.style('color', 'transparent')
                                this.policethief.style('box-shadow', '0 10px 40px transparent');
                                this.policemurderer.style('border', '4px solid transparent')
                                this.policemurderer.style('color', 'transparent')
                                this.policemurderer.style('box-shadow', '0 10px 40px transparent');

                                this.murdererDec.html("Victory! Murderer has been Qurantined in JAIL") ;                     
                                this.murNameDisp.position( displayWidth/2-120, displayHeight/2 - 200);
                                this.murNameDisp.style('color', 'red');
                                this.murNameDisp.style('font-size', '3em');
                                this.murNameDisp.style('text-shadow', '0 20px 40px green');
                                this.murNameDisp.html(murname + "     Was a Murderer");
                                this.updateResult(3); // police catches murderer
                                this.updateState(2)    
                                
                    }
                        else{
                            
                           
                            this.policemurderer.hide();
                            this.policethief.hide();
                            this.kingOrder.hide(); 
                             this.policethief.style('border', '4px solid transparent')
                            this.policethief.style('color', 'transparent')
                            this.policethief.style('box-shadow', '0 10px 40px transparent');
                            this.policemurderer.style('border', '4px solid transparent')
                            this.policemurderer.style('color', 'transparent')
                            this.policemurderer.style('box-shadow', '0 10px 40px transparent');
                            this.murdererDec.html("Defeat! The Thief has Escaped...") 
                            this.murNameDisp.position( displayWidth/2-120, displayHeight/2 - 200);
                            this.murNameDisp.style('color', 'red');
                            this.murNameDisp.style('font-size', '3em');
                            this.murNameDisp.style('text-shadow', '0 20px 40px green');
                            this.murNameDisp.html(murname + "     Was not Thief");
                            this.updateResult(4); // police fails to catch murderer
                            this.updateState(2);
                            
                        }
                        
                       });

                       this.Policemur.position( displayWidth/2-120, displayHeight/2 - 200);
                       this.Policemur.style('color', 'red');
                       this.Policemur.style('font-size', '3em');
                       this.Policemur.style('text-shadow', '0 20px 40px green');


                           
                        
                     }
                    if(index === player.index && player.index === 2)
                     {
                        background(back_img_Mur);
                        form.lobby.hide();
                        form.greeting.hide();
                        this.Murtxt.position( displayWidth/2-120, displayHeight/2 - 200);
                        this.Murtxt.style('color', 'red');
                        this.Murtxt.style('font-size', '3em');
                        this.Murtxt.style('text-shadow', '0 20px 40px green');
                        this.Murtxt.html("You are The Murderer!");

                        this.Murcom.position( displayWidth/2-120, displayHeight/2 - 190);
                        this.Murcom.style('color', 'blue');
                        this.Murcom.style('font-size', '1em');
                        this.Murcom.style('text-shadow', '0 20px 40px green');
                        this.Murcom.html("Will you Get Caught?!");

                        if(updateChoice === 2)
                        {
                            this.Murcom.html("King has ordered to catch murderer");
                        }
                        if(updateChoice === 1)
                        {
                            this.Murcom.html("King has ordered to catch thief");
                        }
                        else{
                            
                        }

                        if(gameResult === 3)
                        {
                            this.Murcom.html("You have been CAUGHT! by the POLICE");
                        }
                        else if(gameResult === 4)
                        {
                            this.Murcom.html("Kudos! You have escaped Police");
                        }
                        else{

                        }


                     }
                     // KING
                    if(index === player.index && player.index === 3)
                     {
                        background(back_img_King);
                        form.lobby.hide();
                        form.greeting.hide();
                        
                        this.murderer.style('height', '100px');
                        this.murderer.style('width', '170px');
                        this.murderer.style('background', 'transparent')
                        this.murderer.style('border', '4px solid purple')
                        this.murderer.style('color', 'purple')
                        this.murderer.style('font-size', '27px')
                        this.murderer.style('border-radius', '15px')
                        this.murderer.style('cursor', 'pointer')
                        this.murderer.style('box-shadow', '0 10px 40px purple');
                        this.murderer.position(displayWidth/2-150, displayHeight/2 + 40);
                        this.murderer.style('backdrop-filter', '3px');

                        this.thief.style('height', '100px');
                        this.thief.style('width', '150px');
                        this.thief.style('background', 'transparent')
                        this.thief.style('border', '4px solid purple')
                        this.thief.style('color', 'purple')
                        this.thief.style('font-size', '32px')
                        this.thief.style('border-radius', '15px')
                        this.thief.style('cursor', 'pointer')
                        this.thief.style('box-shadow', '0 10px 40px purple');
                        this.thief.position(displayWidth/2+150, displayHeight/2 + 40);
                        this.thief.style('backdrop-filter', '3px');

                        this.kingtxt.html("Choose Whom To Catch Thief or Murderer");
                        this.kingtxt.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.kingtxt.style('color', 'cyan');
                        this.kingtxt.style('font-size', '3em');
                        this.kingtxt.style('text-shadow', '0 20px 40px purple');

                        
                        this.kingtxtThief.position( displayWidth/2-420, displayHeight/2 - 330);
                        this.kingtxtThief.style('color', 'lime');
                        this.kingtxtThief.style('font-size', '3em');
                        this.kingtxtThief.style('text-shadow', '0 20px 40px green');
                        this.kingtxtThief.style('display', 'block');

                        this.thief.mousePressed(()=>
                        {
                         
                            this.murderer.hide();
                            this.thief.hide();
                            this.kingtxt.hide();
                            this.kingtxtThief.style('display', 'block');
                            this.kingtxtThief.position( displayWidth/2-420, displayHeight/2 - 330);
                            this.kingtxtThief.style('color', 'lime');
                            this.kingtxtThief.style('font-size', '3em');
                            this.kingtxtThief.style('text-shadow', '0 20px 40px green');
                            this.kingtxtThief.html("You Have Chosen to Catch the Thief! Order has been Sent to Police!");
                            this.updateChoice(1);
                            this.updateWhom("You Have To Catch The Thief");
                            
                           
                        });

                        this.murderer.mousePressed(()=>
                        {
                          
                            this.murderer.hide();
                            this.thief.hide();
                            this.kingtxt.hide();
                            this.kingtxtMur.style('display', 'block');
                            this.kingtxtMur.position( displayWidth/2-420, displayHeight/2 - 330);
                            this.kingtxtMur.style('color', 'lime');
                            this.kingtxtMur.style('font-size', '3em');
                            this.kingtxtMur.style('text-shadow', '0 20px 40px green');
                            this.kingtxtMur.html("You Have Chosen to Catch the Murderer! Order has been Sent to Police!");
                            this.updateWhom("You Have To Catch The Murderer");
                            this.updateChoice(2);
                            //text(allPlayers[index-1], "Hello", displayWidth/2, displayHeight/2);
                            //giving order to police for murderer
                            

                            
                           
                            
                            
                        });
                        this.didwin.position( displayWidth/2-150, 40);
                        this.didwin.style('font-size', '1em');
                        this.didwin.style('text-shadow', '0 20px 40px green');
                        this.didwin.style('width', '200px');
                        this.didwin.style('background', 'transparent')
                        this.didwin.style('border', '4px solid red')
                        this.didwin.style('color', 'purple')
                        this.didwin.style('border-radius', '15px')
                        this.didwin.style('cursor', 'pointer')
                        this.didwin.style('box-shadow', '0 10px 40px red');

                        this.kingRes.position( displayWidth/2-120, displayHeight/2 - 200);
                        this.kingRes.style('color', 'red');
                        this.kingRes.style('font-size', '3em');
                        this.kingRes.style('text-shadow', '0 20px 40px green');
                        

                        this.didwin.mousePressed(()=>{

                                               
                        if(gameState === 2 && updateChoice === 1 && gameResult === 1)
                        {
                            this.kingRes.html("THE THIEF HAS BEEN CAUGHT !");
                            this.kingtxtMur.hide();
                            this.kingtxtThief.hide();
                            this.didwin.hide();
                        }
                        else if(gameState === 2 && updateChoice === 1 && gameResult === 4)
                        {
                            this.kingRes.html("FAIL! THE THIEF HAS ESCAPED !");
                            this.kingtxtMur.hide()
                            this.kingtxtThief.hide()
                            this.didwin.hide();
                        }
                        else if(gameState === 2 && updateChoice === 2 && gameResult === 3)
                        {
                            this.kingRes.html("THE MURDERER HAS BEEN CAUGHT");
                            this.kingtxtMur.hide()
                            this.kingtxtThief.hide()
                            this.didwin.hide();
                        }
                        else if(gameState === 2 && updateChoice === 2 && gameResult === 4)
                        {
                            this.kingRes.html("FAIL! THE MURDERER HAS ESCAPED !");
                            this.kingtxtMur.hide()
                            this.kingtxtThief.hide()
                            this.didwin.hide();
                        }
                        else
                        {
                            this.kingRes.html("Police is still Searching");
                        }
                    }) 
                        
                     }
                     // ROBBER
                     if(index === player.index && player.index === 4)
                     {
                        background(back_img_Rob);
                        form.lobby.hide();
                        form.greeting.hide();
                        this.Robtxt.position( displayWidth/2-120, displayHeight/2 - 200);
                        this.Robtxt.style('color', 'red');
                        this.Robtxt.style('font-size', '3em');
                        this.Robtxt.style('text-shadow', '0 20px 40px green');
                        this.Robtxt.html("You are The Thief!");

                        this.Robcom.position( displayWidth/2-120, displayHeight/2 - 190);
                        this.Robcom.style('color', 'blue');
                        this.Robcom.style('font-size', '1em');
                        this.Robcom.style('text-shadow', '0 20px 40px green');
                        this.Robcom.html("Will you Get Caught?!");

                        if(updateChoice === 2)
                        {
                            this.Robcom.html("King has ordered to catch murderer");
                        }
                        if(updateChoice === 1)
                        {
                            this.Robcom.html("King has ordered to catch thief");
                        }
                        else{

                        }

                        
                        if(gameResult === 1)
                        {
                            //console.log(gameResult);
                            this.Robcom.html("You have been CAUGHT! by the POLICE");
                        }
                        else if(gameResult === 2)
                        {
                            //console.log(gameResult);
                            this.Robcom.html("Kudos! You have escaped Police");
                        }
                        else{

                        }
                        

                     }

                    

                 }

             }
             drawSprites();
             if(gameResult > 0)
             {
                 this.updateState(2);
             }
         }
         end()
         {
            this.policemurderer.attribute('disabled', '');
            this.policethief.attribute('disabled', '');
            /*if(gameState === 2 && this.updateChoice === 1 && gameResult === 1)
                        {
                            this.kingtxtMur.html("THE THIEF HAS BEEN CAUGHT !");
                        }
                        else if(gameState === 2 && this.updateChoice === 1 && gameResult === 2)
                        {
                            this.kingtxtMur.html("FAIL! THE THIEF HAS ESCAPED !");
                        }
                        else if(gameState === 2 && this.updateChoice === 2 && gameResult === 3)
                        {
                            this.kingtxtMur.html("THE MURDERER HAS BEEN CAUGHT");
                        }
                        else if(gameState === 2 && this.updateChoice === 2 && gameResult === 4)
                        {
                            this.kingtxtMur.html("FAIL! THE MURDERER HAS ESCAPED !");
                        }*/
         }
         
     }

    


