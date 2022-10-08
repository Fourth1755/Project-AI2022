import './index.css'
import {useEffect, useState} from 'react'
const GameCenter =()=>{
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
    let ai = 'X';
    let human = 'O';
    //let currentPlayer = human;
    const [myBoard,setMyBoard]=useState([
        {id :0 ,row: 0, col:0, value:""},
        {id :1 ,row: 0, col:1,value:""},
        {id :2 ,row: 0, col:2,value:""},
        {id :3 ,row: 1, col:0,value:""},
        {id :4 ,row: 1, col:1,value:""},
        {id :5 ,row: 1, col:2,value:""},
        {id :6 ,row: 2, col:0,value:""},
        {id :7 ,row: 2, col:1,value:""},
        {id :8 ,row: 2, col:2,value:""},
    ])
    const [currentPlayer,setCurrentPlayer]=useState(human)
    function mousePressed(item) {
        console.log(item)
        const i = item.row
        const j = item.col
        if (currentPlayer == human) {
            if (board[i][j] == "") {
                console.log(board)
                board[i][j] = human;
                setMyBoard(myBoard.map((board)=>board.id===item.id?{ ... board,value:[...board.value,human]}:{...board}))
                setCurrentPlayer(ai)
            }
        }
      }
      function equals3(a, b, c) {
        return a == b && b == c && a != '';
      }
      
      function checkWinner() {
        let winner = null;
      
        // horizontal
        for (let i = 0; i < 3; i++) {
          if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
          }
        }
      
        // Vertical
        for (let i = 0; i < 3; i++) {
          if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
          }
        }
      
        // Diagonal
        if (equals3(board[0][0], board[1][1], board[2][2])) {
          winner = board[0][0];
        }
        if (equals3(board[2][0], board[1][1], board[0][2])) {
          winner = board[2][0];
        }
      
        let openSpots = 0;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
              openSpots++;
            }
          }
        }
      
        if (winner == null && openSpots == 0) {
          return 'tie';
        } else {
          return winner;
        }
      }
    return(
        <div>
            <h1>My XO</h1>
            <div className='tic-tac-toe-container'>
                {myBoard.map((item)=>
                    <div className='tic-tac-toe-box' onClick={()=>mousePressed(item)}>{item.value}</div> 
                )}
            </div>
        </div>
    )
}
export default GameCenter