function fDrop(posi_x){
	document.querySelector('#fruit').setAttribute('x',posi_x);
	y = -1;
	var fdrop = setInterval(function(){
		y += 1;
		//var position = document.querySelector('#fruit[x]');
		document.querySelector('#fruit').setAttribute('y',y);
		if (y == 10){
			clearInterval(fdrop);
			y = 0;
			pos = Math.floor(Math.random() * 5);
			fDrop(pos);
		}
	console.log(y);
	},1000);
}

function myFunction() {
  var myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}
fDrop(1);