let playbtn  = document.getElementById("play-btn")
let playgamescreen = document.getElementById("play-game")
playbtn.addEventListener("click" ,()=>{
    playgamescreen.style.top="-100vh"
})

let btnbox = document.querySelectorAll(".btn-box") 
let btn = document.querySelectorAll("#btn")
let turn = 'X';
let winOrOver = document.getElementById("win")
let alertBox = document.querySelector("#alertBox")
let playGame = document.querySelector("#playGame")
let cancelGame = document.querySelector("#cancelGame")
let alertText = document.querySelector("#alertBox #win")
let boxText = document.getElementsByClassName("btn-box")
let alertImage = document.getElementById("image")
let alertImage2 = document.getElementById("image2")
alertText.innerHTML= winOrOver.innerText;    

let count=0;

const changeTurn = ()=>{
   return turn === 'X' ? 'O' : 'X';  
}

btnbox.forEach((e)=>{
         e.addEventListener("click",()=>{
         e.innerText=turn;        
         e.classList.add(turn)
         e.classList.add("disable")
         turn = changeTurn()
         winOrOver.innerHTML=`Turn of ${turn}`
         checkWin()
         count+=1;      
         drawMacth()
         console.log(count)
        })  
 })


const checkWin = () => {
      let Wins =[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
    ]
    Wins.forEach((e)=>{
       if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && (boxText[e[0]].innerText!=="")){
        //   winOrOver.style.display="flex";
          winOrOver.innerHTML = boxText[e[0]].innerText +" is Won the Macth";    
          alertText.innerHTML = boxText[e[0]].innerText +" is Won the Macth";    
        //   alertImage.style.display="block"
        //   alertImage2.style.display="none"
          resetGame()
          alertBox.style.display="flex" 
        }
    })
}
  
function resetGame(){
    let Text = document.querySelectorAll(".btn-box")
    Text.forEach((e)=>{
         e.innerText="";
         e.classList.remove("disable")         
         count=0;
         winOrOver.innerHTML=""
            
     })
}  

// Reset Button 
let resetBtn = document.getElementById("resetBtn")

resetBtn.addEventListener("click",()=>{
   resetGame()
})


playGame.addEventListener("click" ,()=>{
   alertBox.style.display="none"
   winOrOver.innerHTML=""
   count=0;
   resetGame()   
})

cancelGame.addEventListener("click" ,()=>{
  window.close()
})
 
function drawMacth(){
    if(count>=9){
        winOrOver.innerHTML="OOps Match is Draw!! "
        resetGame()
        alertBox.style.display="flex"
        alertText.innerHTML="OOps Match is Draw!!"
        count=0;
        // alertImage.style.display="none";
        // alertImage2.style.display="block";
    }
} 
