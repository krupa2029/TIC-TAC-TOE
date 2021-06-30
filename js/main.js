import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=>{
    onRestartClick();
})

// console.log(game.board);
// console.log("My turn:", game.turn);
// game.nextTurn();
// console.log("My turn:", game.turn);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(5);
// console.log(game.board);
// gameView.updateBoard(game);

let tiles =  document.querySelectorAll(".board-tile");

tiles.forEach((tile) =>{
    tile.addEventListener("click", ()=> {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //do something
    // make a move
    game.makeMove(i);
    // update board
    gameView.updateBoard(game);
    

}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}