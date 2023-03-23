import './App.css';
import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const TicTacToe=()=>{
    const initialValue=[
        null,null,null,
        null,null,null,
        null,null,null,
    ]
    const [board,setBoard]=useState(initialValue)
    const [isXturn,setisXturn]=useState(true)
    
    const handleClick=(index)=>{
        console.log(index)
        const boardCopy=[...board]
        if(winner==null &&boardCopy[index]==null){
        boardCopy[index]=isXturn?"X":"O"
        setBoard(boardCopy)
        setisXturn(!isXturn) 
        }
    }  
    const { width, height } = useWindowSize()   
const decideWinner=(board)=>{
    
    const listItems=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let i=0;i<listItems.length;i++){
        const[a,b,c]=listItems[i];
        if(board[a]!==null && board[a]===board[b] && board[b]===board[c] ){
            console.log("Winner",board[a])
            console.log(board)
            return board[a]
        }
    }
    return null;
}
const winner=decideWinner(board)
return(
    <>
    {winner?<Confetti width={width} height={height} gravity={0.02}/>:null}
    
    <div className='board'>
       {
        board.map((element,index)=>{
            return <GameBox val={element} playerClick={()=>handleClick(index)}/>
        })
       }
      
    </div>
     {winner?<h2>Winner is {winner}</h2>:null}
     <button onClick={()=>
        {setBoard(initialValue)
        setisXturn(true) 
        }
    }>Restart</button>
     </>
)
}

const GameBox=({val,playerClick})=>{
    // const[val,setVal]=useState('')
    const valStyles={
        color :(val==="X")?"green":"navy"
    }
    return(
        <>
          <div className="gamebox" style={valStyles}
          onClick={()=>{
            // setVal(val==="X"?"O":"X")
            playerClick()
        }}
          >
           {val}
          </div>
        </>
    )
    }
export default TicTacToe