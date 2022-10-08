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
    const [myBoard,setMyBoard]=useState([])
    const [currentPlayer,setCurrentPlayer]=useState(human)
    function mousePressed(cellindex,rowindex) {
       
        let i = rowindex
        let j = cellindex
        if (currentPlayer == human) {
            if (board[i][j] == '') {
                //console.log(rowindex)
                //console.log(cellindex)
                board[i][j] = human;
                setCurrentPlayer(ai)
                setMyBoard(board)
            }
        }
        
      }
    //console.log(myBoard==board)
    useEffect(()=>{
        if(myBoard!=board){
            setMyBoard(board)
            
        }
    },[])
    return(
        <div>
            <h1>My XO</h1>
            <div className='tic-tac-toe-container'>
                {myBoard.map((row,index)=>{
                    let index2=index
                    return row.map((cell,index)=>{
                        return <div className='tic-tac-toe-box' onClick={()=>mousePressed(index,index2)}>{cell}</div>
                    })
                }
                    
                )}
                
            </div>
        </div>
    )
}
export default GameCenter