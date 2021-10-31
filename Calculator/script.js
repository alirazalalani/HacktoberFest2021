// let screen=document.getElementById('screen');
// let btn=document.querySelectorAll('button');
let screenValue='';
function calculate(yourChoice){
    let screen=document.getElementById('screen');

let buttonText=yourChoice.innerText;
// console.log(buttonText);
if(buttonText =='X')
{
    buttonText='*';
    screenValue+=buttonText;
    screen.value=screenValue;
}
else if(buttonText=='C')
{   
    screen.value="";
    screenValue='';
}
else if(buttonText=='=')
{
    screen.value=eval(screenValue);
}
else{
    screenValue+=buttonText;
    screen.value=screenValue;
}

}
