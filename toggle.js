
const colors=["crimson","cyan", "pink","teal","skyblue","orange","red"]
let btn=document.querySelector(".btn")
let index=0
let gameState="OFF"
let cycle;



      // stopCycle()
         //gameState="off"
         //console.log("stopped changing")
  //  }

function toggleColors(){
  btn.addEventListener("click",()=>{

    if(gameState=="OFF"){
        startCycle();
        gameState="ON"
        document.querySelector(".switch").innerText=gameState
    }else if(gameState=="ON"){
        stopCycle();
        gameState="OFF"
        document.querySelector(".switch").innerText=gameState
    }
    
    
function startCycle(){
  
   cycle= window.setInterval(()=>{
document.body.style.backgroundColor=colors[index]
index=index+1
   },2000)

console.log("colors are changing")

}


   function stopCycle(){
   clearInterval(cycle)
console.log("stopped")
   
       
       }
    
    })

}

toggleColors()