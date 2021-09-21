class Contestant 
{
    constructor()
    {
        
        this.name = null;
        this.id = 0;
        this.index = null;
        

    }
    
    getCount()
    {
         contestantCountRef = database.ref('playerCount');
        contestantCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }
 
    updateCount(count)
 {
     database.ref('/').update({
         playerCount: count
     });
 }
 


 update()

 {
 

    var contestantIndex = "players/player" + this.index;
    database.ref(contestantIndex).set({
        name: this.name
        
        


    });

    
 }
 
static getPlayerInfo()
{
    var contestantInfoRef = database.ref('players');
    contestantInfoRef.on("value", (data) =>{
        allPlayers = data.val();
    });
}

}