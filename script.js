console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameoverA = new Audio("gameover.mp3")
let gameoverB = new Audio("gameover2.mp3")
let turn = "X"
let gameover =false
let sound = true;

music.volume = 0.1;
if(sound == true){
    music.play()
}
else{
    music.pause();
}

// Function to change the turn
const changeTurn = ()=>{
    if (turn == "X"){
        return "0"
    }
    if (turn == "0"){
        return "X"
    }
}

// Function to check for a win 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, -2.2, 10, 0],
        [3, 4, 5, -2.2, 31, 0],
        [6, 7, 8, -2.2, 51, 0],
        [0, 3, 6, 3.5, 6, 90],
        [1, 4, 7, 10.8, 6, 90],
        [2, 5, 8, 18, 6, 90],
        [0, 4 ,8, 2.5, 14, 45],
        [2, 4, 6, 4, 55, -56]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && boxtext[e[0]].innerText != ""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won!";
            gameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "500px"
            document.querySelector(".line").style.opacity = "1"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`
            music.pause();
            gameoverA.currentTime = 0;
            gameoverB.currentTime = 0;
            gameoverA.play();
            setTimeout(() => gameoverA.pause(), 1500);
            setTimeout(() => gameoverB.play(), 1000)

        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box")
arr = Array.from(boxes)
arr.forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{
        if(boxtext.innerText == ""){
            boxtext.innerText = turn
            turn = changeTurn();
            ting.currentTime = 0;
            ting.play();
            checkWin();
            if (gameover == false){
                document.getElementsByClassName("info")[0].innerText =  'Turn for: ' + turn
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    })
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    turn = "X";
    gameover = false
    document.querySelector(".line").style.opacity = "0"
    document.getElementsByClassName("info")[0].innerText =  'Turn for: ' + turn
    music.currentTime = 0;
    if(sound == true){
        music.play()
    }
    else{
        music.pause()
    }
    gameoverB.pause();
})

document.querySelector("#test").getElementsByTagName("img")[0].addEventListener("click", ()=>{
    let cross = document.querySelector(".cross")
    if(sound == true){
        sound = false;
        music.pause()
        cross.style.width = "3vw"
    }
    else{
        sound= true
        music.play();
        cross.style.width = "0"
    }
})