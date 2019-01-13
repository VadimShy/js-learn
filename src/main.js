var btn = document.getElementsByTagName("button")[1];
var counter = 0;
function clicker(event) {
    console.log(event.target, 'clicked');
    counter++;
    console.log('total clicks: ', counter);
}

btn.addEventListener('click', clicker)


var subBtn = document.getElementById("button_submit");
subBtn.addEventListener('click', clicker)
function zero() {
    counter = 0;

}

var btnClear = findButton("clear");
btnClear.addEventListener('click', zero);

function findButton(param) {
   return  document.getElementById(param);
}