var pname;
function textcheck(){
	var name = document.getElementById('users').value;
	var namer = name.trim();
	console.log(namer);
	if (namer == ''){
		document.getElementById("warning").innerText = "กรอกชื่อเถอะครับ"
	}
	else if (namer.length <= 3){
		document.getElementById("warning").innerText = "ชื่อสั้นว่ะ"
	}
	else {
		pname = namer;
		ready_go();
		document.getElementById('input').style.display = 'none';
		document.getElementById('name').innerText = document.getElementById('users').value;
	}
}