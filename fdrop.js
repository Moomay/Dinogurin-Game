var score = 0;
var hp = 10;
var mulscore = 1;
console.log(document.getElementById("dino").getAttribute("x"));
function ready_go() {
  var count = 0;
  //random_on();
  var delay_drop = 1000;
  var delay_spawn = 1000;
  var myVar = setInterval(random_on, delay_spawn);
  function random_on(){
  	//create Element with dive
    var rate = Math.floor(Math.random() * 100);
  	var posXMeat = Math.floor(Math.random() * 5);
  	var posYMeat = -1;
  	meat = document.createElement('div');
  	meat.setAttribute("id", count);
    if (rate >= 30){
  	 meat.setAttribute("class", "fruit");
    }
    else {
      meat.setAttribute("class", "meteor");
    }
  	meat.setAttribute("y", posYMeat);
  	meat.setAttribute("x", posXMeat);
  	document.getElementById("content").appendChild(meat);
  	
  	
    var temp = count;
    var iscount = 1;
    //drop meat
    drop_meat(meat, temp, posXMeat, posYMeat, iscount);
    function drop_meat(meat, para, posit_x, posit_y, is_count){
      setTimeout(function drop(){
        var status = 1;
        posit_y += 1;
        //check hit
        if (posit_y >= 9 && posit_y <= 10 && status == 1 && is_count == 1){
            console.log("dino hit");
          if (posit_x ==  document.getElementById("dino").getAttribute("x")){
            console.log(document.getElementById(para).getAttribute("class"));
            if (document.getElementById(para).getAttribute("class") == "fruit"){
              score += (1*mulscore);
              document.getElementById("score").innerHTML = "SCORE: "+score;
              console.log("this score: "+score);
            }
            else {
              hp -= (1*mulscore);
              console.log("HP -1");
              document.getElementById("hp").innerHTML = "HP: "+hp;
              if (hp == 0){
                console.log("Game End");
                mulscore = 0;
                clearInterval(myVar);
              }
            }
            is_count = 0; //no count;
          }
        }
        meat.setAttribute("y", posit_y);
        // recursive
        if (posit_y <= 10 && status == 1){
         drop_meat(meat, para, posit_x, posit_y, is_count);
        }
        // remove when out screen
        if (posit_y == 10){
         remove(para);
         status = 0;
    }
  }, delay_drop);
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
