let keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

/* document.onkeypress = function(event) {
	keyboard.push(event.charCode);
	console.log(keyboard);
}*/
function init(){
	let out = '';
	for (let i = 0; i < keyboard.length; i++) {
		if (i==12 || i == 24) {
			out +='<br>';
		}
		out += '<div class="k-key" data="' + keyboard[i] + '">' +String.fromCharCode(keyboard[i])+ '</div>';
	}
	document.querySelector('#keybord').innerHTML = out;
}

init();

  
 
document.onkeypress = function(event) {
	document.querySelectorAll('#keybord .k-key').forEach(function(element){
		element.classList.remove('active');
	})

	 document.querySelector('#keybord .k-key[data="' +event.keyCode+ '"]').classList.add('active');
	 
}

document.querySelectorAll('#keybord .k-key').forEach(function(element){
	element.onclick = function(event) {
		document.querySelectorAll('#keybord .k-key').forEach(function(element){
			element.classList.remove('active');
		});
		let code = this.getAttribute('data');
		this.classList.add('active');
	}
});