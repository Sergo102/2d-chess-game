 
  // Get the root element
  const root = document.documentElement;
  // Get the computed styles of the root element
  const style = getComputedStyle(root);
  // Get the value of the --color-font-general variable
  const pink = style.getPropertyValue('--pink');
  const green = style.getPropertyValue('--green');
  
  // Change of turns
  
  // This condition is temporary 
  // document.addEventListener('click', function(){
  //   let h1 = document.querySelector('h1');
  //   if(h1.className == "white"){
  //     h1.innerText = "Black's turn";
  //     h1.className = "black";
  //     a8.backgroundColor = 'pink';
  //   }else{
  //     h1.innerText = "White's turn"
  //     h1.className = "white";
  //   }
  // })
  
  let pawn_A7 = document.querySelector('.pawn_A7'); 
  if(pawn_A7){
    pawn_A7.addEventListener('click', movePawn)
  };
  // I use this condition to avoid the error

  function movePawn(){
    if(pawn_A7.className == 'piece pawn_A7 active'){
      a7.style.backgroundColor = '';
      a6.style.backgroundColor = '';
      a5.style.backgroundColor = '';
      pawn_A7.className = "piece pawn_A7";
    }else{
      a7.style.backgroundColor = `${pink}`;
      a6.style.backgroundColor = `${green}`;
      a5.style.backgroundColor = `${green}`;      
      pawn_A7.className = "piece pawn_A7 active";
    }
    
  };