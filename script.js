function textColor(color){
    // deklaruję funkcję i okreslam jaki bedzie jej parametr
    var text = document.getElementById('monitorInside');
    // do zmiennej text wsadzam to co jest w monitorInside
    text.style.color = color;
    //zmieniam kolor
  }
  
  function randomColor(){
    var rNumber = Math.floor(Math.random()*10) + 1;
    // document.getElementById('checkColor').innerText = rNumber;
  
    var rColor;
    
    if(rNumber % 2 == 0 && rNumber != 0) { rColor = 'red';}
    if(rNumber % 2 == 1 && rNumber != 5) { rColor = 'blue';}
    else if (rNumber == 5 || rColor == 0) {rColor = 'green'}
    
    document.getElementById('checkColor').innerText = rColor;
    
  }
  