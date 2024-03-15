let i=1,j=1;
let gameTool= document.querySelectorAll(".img");
let userMove= document.querySelector("#user-move");
console.log(userMove.innerText);
let compChoice=()=>{
    let arr=["stone","paper","scissor"];
   let index= Math.floor(Math.random()*3);
     return arr[index];
}
let drawGame=()=>{
    console.log("Computer choice "+computerChoice +" Game was Draw");
    userMove.innerText=`Computer choice: ${computerChoice } , Match Draw`;
}
let showWinner = (userWin)=>{
    if(userWin==true){
     console.log("Computer choice "+computerChoice +" you won the game");
     let userScore=document.querySelector(".user-score")
      userScore.innerText=`${i++}`;
      userMove.innerText= `Computer choice: ${computerChoice } , you won`;
    }
    else{
        console.log("Computer choice "+computerChoice +" you loss the game");
        let compScore=document.querySelector(".comp-score");
        compScore.innerText=j++;
        userMove.innerText= `Computer choice: ${computerChoice } , you loss`;
    }

}

let computerChoice = compChoice();
let playGame= (userChoice)=>{
         console.log("user choice is ", userChoice);
        // let computerChoice = compChoice();
        computerChoice = compChoice();
        console.log("comp choice is ",computerChoice);

        if(userChoice===computerChoice){
            drawGame();
        }
        else{
           let userWin= true;
            if(userChoice=="stone"){
                userWin= computerChoice=="paper"? false :true;
            }
            else if(userChoice=="paper"){
                userWin= computerChoice=="scissor"? false : true;
            }
            else{
                userWin= computerChoice=="stone"? false : true;
            }
            showWinner(userWin);
        }
        
}
gameTool.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})