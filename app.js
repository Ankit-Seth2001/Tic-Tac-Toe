console.log("hi");
let boxes=document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let turn =true; // for X
let message=document.querySelector(".message");
let newGameBtn=document.querySelector("#newGame-btn");
let msg=document.querySelector("#msg");
let tie =0;
let currentMove=document.querySelector("h2");
let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
console.log(boxes);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        tie++;
        console.log(tie);
        if(turn){
            box.innerHTML="X"
            box.style.color="red";
            currentMove.innerHTML=`O's move`;
            turn =false;
        }
        else{
            box.innerHTML="O"
            box.style.color="yellowz";
            currentMove.innerHTML=`X's move`;
            turn =true;
        }
        box.disabled = true;
        winner();
    });
});

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(pos1Val)=>{
    msg.innerHTML=`Winner is player ${pos1Val}`;
    message.classList.remove("hide");
    disableBoxes();
};
const tieGame= ()=>{
    msg.innerHTML=`Its a Tie`;
    message.classList.remove("hide");
    disableBoxes();
};
const resetGame=()=>{
    turn =true;
    message.classList.add("hide");
    for (let box of boxes){
        box.innerText="";
        box.disabled=false;
    }

};
const winner=()=>{
    for(let winPatern of winningPattern){
        // console.log(winPatern[0],winPatern[1],winPatern[2]);
        // console.log(boxes[winPatern[0]],boxes[winPatern[1]],boxes[winPatern[2]]);
        const pos1Val=boxes[winPatern[0]].innerText;
        const pos2Val=boxes[winPatern[1]].innerText;
        const pos3Val=boxes[winPatern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
            }
    }
    }
    if(tie==9) tieGame();
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);