let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties:0
};

let images=[{
  id:"rock",
  img:"/images/rock.jpeg"
}, 
{id:"paper",
  img:"/images/paper.jpeg"
},
{id:"scissor",
  img:"/images/scissor.jpeg"
},
]
updatedScore();

function takeComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove ='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove ='paper';
  }
  else if(randomNumber>=2/3 && randomNumber<=1){
    computerMove ='scissor';
  }
  return computerMove;
}

function playerChoice(playerMove){
  let result='';
  const computerMove=takeComputerMove();
  if(playerMove==='rock'){
    if (computerMove==='rock'){
      result='Tie';
    }
    else if(computerMove==='paper'){
      result='You lose';
    }
    else if(computerMove==='scissor'){
      result='You win';
    }
  }
  else if(playerMove==='paper'){
    if (computerMove==='rock'){
      result='You win';
    }
    else if(computerMove==='paper'){
      result='Tie';
    }
    else if(computerMove==='scissor'){
      result='You lose';
    }
  }
  else if(playerMove==='scissor'){
    if (computerMove==='rock'){
      result='You lose';
    }
    else if(computerMove==='paper'){
      result='You win';
    }
    else if(computerMove==='scissor'){
      result='Tie';
    }
  }
  if(result==='You win'){
    score.wins+=1;
  }
  else if(result==='You lose'){
    score.loses+=1;
  }
  else if(result==='Tie'){
    score.ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  updatedScore();

  document.querySelector('.js-result')
    .innerHTML=result;
    //for show player move image
    let jsplayerMoveEle=document.getElementById("jsplayermove")
    
    const img1 = document.createElement('img');
    let move1=`${playerMove}`;
    
    img1.src =  `/images/${move1}.jpeg`;
    img1.classList="result-img";
    img1.width = 150; // Optional size
    
    jsplayerMoveEle.innerHTML = "Your Move:";
    jsplayerMoveEle.appendChild(img1);
   //for show computer move image  
    let jscomputerMoveEle=document.getElementById("jscomputermove")
    
    const img = document.createElement('img');
    let move=`${computerMove}`;
    
    img.src =  `/images/${move}.jpeg`;
    img.classList="result-img";
    img.width = 150; // Optional size
    
    jscomputerMoveEle.innerHTML = "Computer Move:";
    jscomputerMoveEle.appendChild(img);
    
  // document.querySelector('.js-moves').innerHTML=
  //   `Your move: ${playerMove}    Computer move: ${computerMove}`
}
function updatedScore(){
  document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins},Loses:${score.loses},Ties:${score.ties}`;
}
