let yourScore=0;
let computerScore=0;
function choice(x) {  
    let cc=Math.floor((Math.random() * 3) + 1);
    let chosed=["","Rock","Paper","Scissors"];
    let message="";
    if(cc===x){
        message=" Draw , You Both have Chosen "+chosed[cc];
    }
    else if(cc===1 && x===2){
        yourScore+=1;
        message="You win, Computer chossed "+chosed[cc];
    }
    else if(cc===1 && x===3){
        computerScore+=1;
        message="You Lose, Computer chossed "+chosed[cc];
    }
    else if(cc===2 && x===3){
        yourScore+=1;
        message="You win, Computer chossed "+chosed[cc];
    }
    else if(cc===2 && x===1){
        computerScore+=1;
        message="You Lose, Computer chossed "+chosed[cc];
    }
    else if(cc===3 && x===1){
        yourScore+=1;
        message="You win, Computer chossed "+chosed[cc];
    }
    else if(cc===3 && x===2){
        computerScore+=1;
        message="You Lose, Computer chossed "+chosed[cc];
    }
    // document.getElementById("ele").style.backgroundColor =red;
    // document.getElementById("p1").innerHTML = "Your Points"+ yourScore+"Computer Points    "+computerScore;
    document.getElementById("ys").innerHTML =  yourScore;
    document.getElementById("cc").innerHTML =computerScore;
    
    document.getElementById("p2").innerHTML = message;
};  
