const game=()=>{
    let pScore=0;
    let cScore=0;
    //game shuru korbe ei function
    const startGame=()=>{
        const playbtn=document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match=document.querySelector(".match");

        playbtn.addEventListener("click",()=>{
           //intro portion ta fade out korbe
            introScreen.classList.add("fadeOut");
            //game portion fadein korbe
            match.classList.add("fadeIn")
        });
    };
    //update score
    const updateScore=()=>{
        const playerScore=document.querySelector('.player-score p');
        const computerScore=document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }
    //play match
    const playMatch=()=>{
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".players-hand");
        const computerHand=document.querySelector(".computers-hand");
        const hands=document.querySelectorAll(".hands img");

        hands.forEach(hand=>{
           hand.addEventListener('animationend',function () {
               this.style.animation='';
           })
        });
        const computerOptions=["Rock","Paper","Scissors"]
        options.forEach(option=>{
            //ekhane amra normal function use korsi arrow function use korle this keyword ta ei function e bound thakbe na



            //arrow function use korle this keyword direct window object ke invoke korbe
           option.addEventListener('click',function () {
               const computerNumbers=Math.floor(Math.random()*3);
               const computerChoice=computerOptions[computerNumbers];

               setTimeout(()=>{
                   //calling compare function
                   compareHands(this.textContent,computerChoice);
                   //update images
                   playerHand.src=`./assets/${this.textContent}.png`;
                   computerHand.src=`./assets/${computerChoice}.png`;
               },2000);

             // console.log(playerHand.src);
               playerHand.style.animation="shakePlayer 2s ease";
               computerHand.style.animation="shakeComputer 2s ease";
           });
        });
      //0 to 1 er moddhe number generate korbe
        //console.log(computerNumbers);

    };
    //ei game e ke jitbe sheta compare korar jonno function
    const compareHands = (playerChoice,computerChoice) => {
        //update text
        const winner=document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent="It's a tie";
            return;
        }
        //player choice rock then what situation occurs
        if(playerChoice === 'Rock'){
            if(computerChoice === 'Scissors'){
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //player choice paper
        if(playerChoice==='Paper'){
            if(computerChoice==='Scissors'){
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //player choice scissor
        if(playerChoice==='Scissors'){
            if(computerChoice==='Rock'){
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

    };


    startGame();
    playMatch();

}

game();