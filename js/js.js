var turn = true;
var square=[];

function reset(A,B,C){
    document.getElementById('c'+A).style.backgroundColor="#333";
    document.getElementById('c'+B).style.backgroundColor="#333";
    document.getElementById('c'+C).style.backgroundColor="#333";
    
    setTimeout(function(){
       location.reload(); 
    },2000);
}

function checkWinner(){
  for(var i=1; i<=9; i++){
     square[i]=document.getElementById("c"+i).innerHTML;
  }
      if(square[1]==square[2] && square[2]==square[3] && square[1]!=""){
        alert('player '+ square[1] + ' win');
        reset(1,2,3);
    }
      if(square[4]==square[5] && square[5]==square[6] && square[4]!=""){
        alert('player '+ square[4] + ' win');
          reset(4,5,6);
    }
      if(square[7]==square[8] && square[8]==square[9] && square[7]!=""){
        alert('player '+ square[7] + ' win');
          reset(7,8,9);
    }
      
      
      
      if(square[1]==square[4] && square[4]==square[7] && square[1]!=""){
        alert('player '+ square[1] + ' win');
          reset(1,4,7);
    }
      if(square[2]==square[5] && square[5]==square[8] && square[2]!=""){
        alert('player '+ square[2] + ' win');
          reset(2,5,8);
    }
      if(square[3]==square[6] && square[6]==square[9] && square[3]!=""){
        alert('player '+ square[3] + ' win');
          reset(3,6,9);
    }
      
      
      
      if(square[1]==square[5] && square[5]==square[9] && square[1]!=""){
        alert('player '+ square[1] + ' win');
          reset(1,5,9);
    }
      if(square[3]==square[5] && square[5]==square[7] && square[3]!=""){
        alert('player '+ square[3] + ' win');
          reset(3,5,7);
    }
}

function insert(id){
    var L=document.getElementById(id);
    if(turn && L.innerHTML==""){
        L.innerHTML="X";
        turn=!turn;
    }
    else if(!turn && L.innerHTML==""){
      L.innerHTML="O";
        turn=!turn;  
    }
    checkWinner();
}