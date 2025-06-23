function init(){
	function handleClick(){
	  let inputText = document.getElementById(entryinput).value;
	  alert ('Beatrice Pauletto:' + entryinput);
	  document.getElementById('textoutput').innerText = inputText;
} }
//add your javascrip between these two lines of code
window.addEventListener('load', init);