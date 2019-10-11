var clock= document.getElementById("clock");

//get date and push it to clock

function getDate() {
var d= new Date();
var t= d.toLocaleTimeString();
clock.innerHTML = t;
}

getDate()

setInterval(function(){
	getDate()
},1000)


function fontFunction(){
	var font = document. getElementById("myFonts").value;
	// console.log('font') to see if it works
	clock.style.fontFamily = font;
}

//bold
function boldFunction(){
	var checkBox = document.getElementById("boldCheck");
	// console.log( checkBox.checked )
	if ( checkBox.checked == true) {
		//do something if ture
		clock.style.fontWeight= 'bold';
	}
	else{
		// if false do this
		clock.style.fontWeight= 'inherit';

	}
}

//italic
function italicFunction(){
	var checkBox = document.getElementById("italicCheck");
	// console.log( checkBox.checked )
	if ( checkBox.checked == true) {
		//do something if ture
		clock.style.fontStyle= 'italic';
	}
	else{
		// if false do this
		clock.style.fontStyle= 'inherit';

	}
}

function sizeFunction(){
	var checkSize= document.getElementById("size").value;
	// console.log(checkSize)

	clock.style.fontSize = checkSize + "px";

}