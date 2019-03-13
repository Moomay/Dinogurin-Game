var score = 0;
console.log(document.getElementById("dino").getAttribute("x"));
function ready_go() {
  var count = 0;
  var myVar = setInterval(random_on, 1000);
  //random_on();
  var delay = 1000;
  function random_on(){
  	//create Element wiht dive
  	var posXMeat = Math.floor(Math.random() * 5);
  	var posYMeat = -1;
  	meat = document.createElement('div');
  	meat.setAttribute("id", count);
  	meat.setAttribute("class", "fruit");
  	meat.setAttribute("y", posYMeat);
  	meat.setAttribute("x", posXMeat);
  	document.getElementById("content").appendChild(meat);
  	
  	//drop meat
    var temp = count;
    var iscount = 1;
    dorp_meat(meat ,temp, posXMeat, posYMeat, iscount);
    function dorp_meat(meat, para, posit_x, posit_y, is_count){
      setTimeout(function dorp(){
        var status = 1;
        posit_y += 1;
        //check hit
        if (posit_y >= 9 && posit_y <= 10 && status == 1 && is_count == 1){
          if (posit_x ==  document.getElementById("dino").getAttribute("x")){
            score += 1;
            document.getElementById("score").innerHTML = "SCORE:"+score;
            console.log("dino hit");
            console.log("this score: "+score);
            is_count = 0;
          }
        }
        meat.setAttribute("y", posit_y);
        // recursive
        if (posit_y <= 10 && status == 1){
         dorp_meat(meat, para, posit_x , posit_y, is_count);
        }
        // remove when out screen
        if (posit_y == 10){
         remove(temp);
         status = 0;
    }
  }, delay);
  }

	//count id +1
	count += 1;
  //remove ID
  function remove(meatID){
	var elem = document.getElementById(meatID);
    return elem.parentNode.removeChild(elem);
  }
  }
}
//เผื่อเพื่อนอยากทำ count down
ready_go();