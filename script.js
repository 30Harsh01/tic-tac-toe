let boxes=document.querySelectorAll('.box')
// let resetbtn=document.getElementById('reset-btn')
let winnermessage=document.querySelector('#msg')
let newgame=document.querySelector('#reset-btn')

let turnO=true;

const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box clicked")
        if(turnO===true){
            box.innerHTML="O"
            turnO=false;
        }
        else{
            box.innerHTML="X"
            turnO=true;
        }
        box.disabled=true

        checkwinner();
    })
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""
        winnermessage.innerHTML=""
    }
}


const showwinner=(winner)=>{
    winnermessage.innerHTML=`WINNER ${winner}`
    // winnermessage.innerHTML=""
    disableboxes()
}

const checkwinner=()=>{
    for(let patterns of winpatters){
        // console.log(patterns[0],patterns[1],patterns[2])
        let box1=boxes[patterns[0]].innerHTML
        let box2=boxes[patterns[1]].innerHTML
        let box3=boxes[patterns[2]].innerHTML
        // console.log(box1,box2,box3)

        if(box1!="" && box2!="" &&box3!=""){
            if(box1===box2 && box2===box3){
            // console.log("winner is ",box1)
            // disablebtn()
            showwinner(box1)
            }
        }
    }
}

const resetgame=()=>{
    turnO=true;
    enableBoxes()
}

newgame.addEventListener("click",resetgame)
// resetbtn.addEventListener("cick",resetgame)