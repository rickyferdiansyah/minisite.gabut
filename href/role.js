alert("landscape orientation is recommended")


var playerHP = 100;
var bossHP = 100;
var playerHPdoc = document.getElementById("hitpoint-player-num")
var bossHPdoc = document.getElementById("hitpoint-boss-num")
var thunder = document.getElementById("thunderAtt")
var blade1 = document.getElementById("bladeAtt1")
var blade2 = document.getElementById("bladeAtt2")
var blade3 = document.getElementById("bladeAtt3")
var rock = document.getElementById("rockAtt")
var hpNum = document.getElementsByClassName("hitpoint-num")

var thunderBtn = document.getElementById("thunder-attack")
var bladeBtn = document.getElementById("blade-attack")
var releaseBtn = document.getElementById("release-attack")





function thunderAttack() {
    thunder.classList.remove("thunder-appear-initial")
    thunder.classList.add("thunder-appear-final")
    rock.classList.add("rock-appear-final")
    rock.classList.remove("rock-appear-initial")
    
    
    // document.getElementById("damage-on-boss").innerText = Math.floor(Math.random()*21)

    
    setTimeout(function (){
        
        bossHP -= Math.floor(Math.random()*51)
        bossHPdoc.innerText = bossHP
              
        
        
    }, 200);

    setTimeout(function (){
        playerHP -= Math.floor(Math.random()*51)
        playerHPdoc.innerText = playerHP

        releaseBtn.style.display = "block"
        
        
                  
    }, 1500);

    setTimeout(function (){
        
        if (playerHP < 1) {
            alert("you lose")
            location.reload()
            playerHPdoc.innerText = 0
        }
        else if (bossHP < 1) {
            alert("you win")
            location.reload()
            bossHPdoc.innerText = 0
            document.getElementById("boss-character").style.opacity = "0"
            document.getElementById("boss-character").style.transitionDuration = "2s"

        }
              
        
        
    }, 2500);

    thunderBtn.style.display = "none"
    bladeBtn.style.display = "none"



    
    

}



function bladeAttack() {
 
    blade1.classList.remove("blade1-appear-initial")
    blade1.classList.add("blade1-appear-final")
    blade1.style.transitionDuration = "2s"
    blade2.classList.remove("blade2-appear-initial")
    blade2.classList.add("blade2-appear-final")
    blade2.style.transitionDuration = "2s"
    blade3.classList.remove("blade3-appear-initial")
    blade3.classList.add("blade3-appear-final")
    blade3.style.transitionDuration = "2s"
    
    

    document.getElementById("player-character").classList.add("player-character")

    setTimeout(function(){

        document.getElementById("player-character").classList.remove("player-character")

    }, 1800)
    
    
    // document.getElementById("damage-on-boss").innerText = Math.floor(Math.random()*21)

    
    setTimeout(function (){
        
        rock.classList.add("rock-appear-final")
        rock.classList.remove("rock-appear-initial")
        
    }, 1000);

    setTimeout(function (){

        bossHP -= Math.floor(Math.random()*41) + Math.floor(Math.random()*31)
        bossHPdoc.innerText = bossHP
        
    }, 2000);

    setTimeout(function (){  

        releaseBtn.style.display = "block"
        
    }, 2500);

    setTimeout(function (){
        
        playerHP -= Math.floor(Math.random()*51)
        playerHPdoc.innerText = playerHP 
        
    }, 3000);

    setTimeout(function (){
        
        if (bossHP < 1) {
            alert("you win")
            location.reload()
            bossHPdoc.innerText = 0
            document.getElementById("boss-character").style.display = "none"
            // document.getElementById("boss-character").style.transitionDuration = "2s"
        }
        else if (playerHP < 1) {
            alert("you lose")
            location.reload()
            playerHPdoc.innerText = 0
        }
              
        
        
    }, 3500);

    thunderBtn.style.display = "none"
    bladeBtn.style.display = "none"


}


function releaseAttack() {
    thunder.classList.remove("thunder-appear-final")
    thunder.classList.add("thunder-appear-initial")
    blade1.classList.remove("blade1-appear-final")
    blade1.classList.add("blade1-appear-initial")
    blade2.classList.remove("blade2-appear-final")
    blade2.classList.add("blade2-appear-initial")
    blade3.classList.remove("blade3-appear-final")
    blade3.classList.add("blade3-appear-initial")
    rock.classList.remove("rock-appear-final")
    rock.classList.add("rock-appear-initial")
    
    blade1.style.transitionDuration = "0s"
    blade2.style.transitionDuration = "0s"
    blade3.style.transitionDuration = "0s"
    
    releaseBtn.style.display = "none"

    setTimeout(function(){
         
        thunderBtn.style.display = "block"
        bladeBtn.style.display = "block"
                  
    }, 1500);

}


// if (hpNum > 50) {
//     hpNum.style.color = "yellow";
// }
// else if (hpNum < 20) {
//     hpNum.style.color = "red";
// }


