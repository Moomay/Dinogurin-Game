var x = 2;
//setInterval(function(){
 //x = Math.floor(Math.random() * 5);
  document.body.onkeydown = function(event) {
    console.log(event.code);
    console.log(x);
      if (event.code == "ArrowRight")
        x += 1;
      else if (event.code == "ArrowLeft")
        x -= 1;
      if (x >= 4){
        x = 4
      }
      else if (x <= 0){
        x = 0
      }
      document.querySelector('#dino').setAttribute('x',x); 
  }
  document.querySelector('#dino').setAttribute('x',x);  
//},1000)