var myBtn=document.getElementById('btn');
var myDiv= document.getElementById('one');
//onclik function doSomething
myBtn.addEventListener('click', doSomething);

//function has an argument e - EVENT 
function doSomething(e){
//if the ALTKEY is pressed
if (e.altKey===true){
    myDiv.style.background="yellow";
}else{
    myDiv.style.background="purple";
}
}
