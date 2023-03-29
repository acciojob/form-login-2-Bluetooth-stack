//your JS code here. If required.
const fn = document.querySelector("#fn");
const ln = document.querySelector("#ln");
const pn = document.querySelector("#pn");
const ml = document.querySelector("#ml");
const btn = document.querySelector("#sub");
let f = document.getElementById('myForm').getElementsByTagName("INPUT");



btn.addEventListener("click", ()=>{
	alert(fn.name + " " +fn.value +"\n" + ln.name +" "+ln.value +"\n" + pn.name +" "+pn.value
		 +"\n" + ml.name +" "+ml.value);
});