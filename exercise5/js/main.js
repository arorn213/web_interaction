var text = document.getElementById("logo");
var background = document.getElementById("info");

function fillBlue() {
  document.getElementById('logo').style.color = '#214273';
}

function fillGreen() {
  document.getElementById('logo').style.color = '#00A572';
}

function fillGrey() {
  document.getElementById('logo').style.color = '#39393A';
}

//change the font family 

function fontFunction(){
	var font = document.getElementById("changefonts").value;
	text.style.fontFamily = font;
}


//change the letter spacing

function spacingFunction(){
	var spacing = document.getElementById("glider").value;
	text.style.letterSpacing = spacing + "px";
}



