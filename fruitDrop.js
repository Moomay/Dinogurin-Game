function fDrop(x){
	document.querySelector('#fruit').setAttribute('x',x)
	var fdrop = setInterval(function(){
	y += 1;
	//var position = document.querySelector('#fruit[x]');
	document.querySelector('#fruit').setAttribute('y',y);
	if (y >= 10){
		clearInterval(fdrop);
	}
	console.log(y);
	},1000);
}
setInterval(function(){
	y = 0;
	x = Math.floor(Math.random() * 5);
	fDrop(x);
},10000)

