let container = document.getElementsByClassName('inputRBS')[0];

let after = document.getElementsByClassName("after")[0];
let nam = document.getElementsByClassName("turn")[0];
let nm = document.getElementsByClassName("nam")[0];

let buttons = document.getElementsByClassName("option");
let options = ["rock", "paper", "scissors"];

let RBS = function(symbol) {
    computer = options[Math.floor(Math.random()*3)];
    if (symbol == computer) {
        motion(symbol, computer, "Draw!!", "D");
        return;
    }
    let winCondition = "";
    switch (symbol) {
        case "rock":
            winCondition = "scissors";
            break;
        case "paper":
            winCondition = "rock";
            break;
        case "scissors":
            winCondition = "paper";
    }
    let msg = "";
    let W = "";
    if (computer == winCondition) {
        msg = "You Win!!";
        W = "W";
    } else {
        msg = "You Lose!!";
        W = "L";
    }
    motion(symbol, computer, msg, W);
}

let motion = function(me, cpu, msg, W) {
    container.style.flexDirection = "row";
    nam.innerHTML = '<p class="nam nam1">CPU</p><p class="nam vs">VS</p><p class="nam nam2">YOU</p>';

    for (let button of buttons) {
        if (button.id != me) {
            button.style.display = "none";
        } else {
            button.setAttribute("class", "option moveRight");
            button.setAttribute("onClick", "");
        }
    }
    let option = document.createElement("div");
    let img = document.createElement("img");

    option.setAttribute("class", "option");
    img.setAttribute("class", "cpu");
    
    img.src = "imgs/" + cpu + ".png";

    option.appendChild(img);
    container.insertBefore(option, buttons[0]);

    setTimeout(() => {
        option.classList.add("moveLeft");
    }, 1)

    after.children[0].innerText = msg;
    after.children[0].classList.add(W);
    after.style.display = "flex";
}

let resetRBS = function() {
    container.style.flexDirection = "";
    container.children[0].remove();
    nam.innerHTML = "<p class='nam'>Choose a Pose</p>";
    after.style.display = "none";
    after.children[0].setAttribute("class", "msg");
    let i = 0;
    for (let button of buttons) {
        button.setAttribute("onClick", "RBS('" + options[i++] + "')");
        button.style.display = "flex";
        button.setAttribute("class", "option clk");
    }
}

let squares = document.getElementsByClassName("square");
let line = document.getElementsByClassName("line")[0];
let turn = 0;
let played = [];
let map = [ ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"] ];
let end = false;

let XO = function(row, column) {
    let index = 3 * row + column;
    let win = "";
    let letter = "";
    if (played.includes(index) || end) {
        return;
    }
    played.push(index);
    let img = document.createElement("img");
    if (turn % 2 == 0) {
        nm.innerText = "O's Turn";
        img.src = "imgs/X.png";
        map[row][column] = "X";
    } else {
        nm.innerText = "X's Turn";
        img.src = "imgs/O.png";
        map[row][column] = "O";
    }
    squares[index].appendChild(img);
    turn++;
    if (map[0][0] == map[0][1] && map[0][0] == map[0][2]) {
        win = "row1";
        letter = map[0][0];
    } else if (map[1][0] == map[1][1] && map[1][0] == map[1][2]) {
        win = "row2";
        letter = map[1][0];
    } else if (map[2][0] == map[2][1] && map[2][0] == map[2][2]) {
        win = "row3";
        letter = map[2][0];
    } else if (map[0][0] == map[1][0] && map[0][0] == map[2][0]) {
        win = "col1";
        letter = map[0][0];
    } else if (map[0][1] == map[1][1] && map[0][1] == map[2][1]) {
        win = "col2";        
        letter = map[0][1];
    } else if (map[0][2] == map[1][2] && map[0][2] == map[2][2]) {
        win = "col3";
        letter = map[0][2];
    } else if (map[0][0] == map[1][1] && map[0][0] == map[2][2]) {
        win = "dig1";
        letter = map[0][0];
    } else if (map[0][2] == map[1][1] && map[0][2] == map[2][0]) {
        win = "dig2";
        letter = map[0][2];
    }
    if (win) {
        end = true;
        nam.style.display = "none";
        line.classList.add(win);
        line.classList.add("win");
        after.children[0].innerText = letter + " Won!!";
        after.children[0].classList.add("nm");
        after.style.display = "flex";
        return;
    }
    if (played.length == 9) {
        end = true;
        nam.style.display = "none";
        after.children[0].innerText = "Draw!!";
        after.children[0].classList.add("nm");
        after.children[0].classList.add("D");
        after.style.display = "flex";
    }
}

let resetXO = function() {
    after.style.display = "none";
    nam.style.display = "flex";
    nm.innerText = "X's Turn"
    after.children[0].setAttribute("class", "nam");
    turn = 0;
    map = [ ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"] ];
    end = false;
    line.setAttribute("class", "line")
    for (let index of played) {
        squares[index].children[0].remove();
    }
    played = [];
}
