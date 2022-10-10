import './index.css'
import {useEffect, useState} from 'react'
import SideBar from '../SideBar';
import ProfileAI from '../ProfileAI';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
var board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
];
let ai = 'X';
let human = 'O';
const GameCenter =(props)=>{
    const MySwal = withReactContent(Swal)
    const [width,setWidth] =useState(3);
    function setTable(){
      for(let i=0;i<3;i++){
        for(let j=0;i<3;j++){
          board[i][j]='1'
        }
      }
    }
    //setTable()
    console.log(board)
    //let currentPlayer = human;
    const [currentPlayer,setCurrentPlayer]=useState(human)
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
    
    function mousePressed(item) {
        const i = item.row
        const j = item.col
        if (currentPlayer == human) {
            if (board[i][j] == "") {
                board[i][j] = human;
                setCurrentPlayer(ai)
                bestMove(item)
                //setMyBoard(myBoard.map((board)=>board.id===item.id?{ ... board,value:human}:{...board}))
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
    function bestMove(item) {
      // AI to make its turn
      let bestScore = -Infinity;
      let move;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Is the spot available?
          if (board[i][j] == '') {
            board[i][j] = ai;
            let score = minimax(board, 0, false);
            
            board[i][j] = '';
            if (score > bestScore) {
              bestScore = score;
              
              move = { i, j };
            }
            
          }
        }
      }
      if(bestScore==1){
        props.onCheckboxClick("ไอ้กากเอ้ยย")
        // Swal.fire({
        //   title: `You Noob`,
        // })
      }
      if(bestScore==-1){
        props.onCheckboxClick("น่าสนใจดีหนิ")
        Swal.fire({
          title: `น่าสนใจดีหนิ`,
        })
      }
      console.log("------------>",bestScore)
      board[move.i][move.j] = ai;
      setMyBoard(myBoard.map((board)=>{
        if(board.row==move.i&&board.col==move.j){
          return { ... board,value:ai}
        }if(board.id===item.id){
          return { ... board,value:human}
        }else{
          return {...board}
        }
      }))
      setCurrentPlayer(human)
    }

    let scores = {
      X: 1,
      O: -1,
      tie: 0
    };

    function minimax(board, depth, isMaximizing) {
      let result = checkWinner();
      if (result !== null) {
        return scores[result];
      }
    
      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
              board[i][j] = ai;
              let score = minimax(board, depth + 1, false);
              board[i][j] = '';
              bestScore = Math.max(score, bestScore);

            }
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
              board[i][j] = human;
              let score = minimax(board, depth + 1, true);
              board[i][j] = '';
              bestScore = Math.min(score, bestScore);
            }
          }
        }
        return bestScore;
      }
    }
    
      let result = checkWinner();
      if (result != null) {
        if (result == 'tie') {
          Swal.fire({
            title: 'Tie!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://i.gifer.com/embedded/download/EUsl.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            confirmButtonText:'<a href="/" style="color:white;text-decoration: none;">Try Again</a>'
          })
        } else if(result == 'X'){
          Swal.fire({
            title: `You lose`,
            text: 'ฮ่า ฮ่า ฮ่า นายแพ้ AI แล้ว',
            imageUrl: 'http://pa1.narvii.com/5641/fd95165fb5f98552f226a2103b8fd20a5ea6b92f_00.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            confirmButtonText:'<a href="/" style="color:white;text-decoration: none;">Try Again</a>'
          })
        }else{
          Swal.fire({
            title: `You Win`,
            text: 'Modal with a custom image.',
            imageUrl: 'https://i.kym-cdn.com/photos/images/newsfeed/000/858/423/fdf.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText:'<a href="/" style="color:white;text-decoration: none;">Try Again</a>'
          })
        }
      }
    useEffect(()=>{
      Swal.fire({
        title: 'เลือกว่าใครเล่นก่อน',
      })
    },[])
    return(
      <div className='tic-tac-toe-container'>
        <ProfileAI/>
        <div className='game-container'>
            <h1>Tic-Tac-Toe</h1>
            <div className='tic-tac-toe-game-container'>
                {myBoard.map((item)=>
                    <div className='tic-tac-toe-box' onClick={()=>mousePressed(item)}>{item.value}</div> 
                )}
            </div>
        </div>
        <SideBar />
      </div>
    )
}
export default GameCenter