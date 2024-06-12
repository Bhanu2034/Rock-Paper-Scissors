let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const drawgame =() =>{
    console.log("game was draw");
    msg.innerText="Game was Draw Play again!";
    msg.style.backgroundColor="blue";
}
const gencompchoice =()=>{
    const options =["rock","paper","scissors"];
   const rand= Math.floor( Math.random() * 3);
   return options[rand];

}
const showWinner =(userwin,compchoice,userchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        console.log("you win");
        msg.innerText=`You Win!`;
        msg.style.backgroundColor ="green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lost");
        msg.innerText=`You Lose!`;
        msg.style.backgroundColor ="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice =",compchoice);
    if(userchoice==compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice== "rock"){
            userwin = compchoice === "papaer"?false:true;
        
        }else if(userchoice == "paper"){
            userwin= compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});