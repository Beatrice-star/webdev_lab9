function init(){
	function handleClick(){
	  let inputText = document.getElementById('entryinput').value;
	  alert ('Beatrice Pauletto:' + inputText);
	  document.getElementById('textoutput').innerText = inputText;
} 
  document.getElementById('entryinput').addEventListener('click', handleClick);
}
//add your javascrip between these two lines of code
window.addEventListener('load', init);