var price = 12.99;

function decrementCounter(el){
   var current = el.parentNode.querySelector('[type=number]');
   var but = el.parentNode;
   if(current.value == 0){
     var button = but.querySelector('.arrow-left') 
     button.className += button.className.indexOf('arrow-disable') !== -1 ? '' :  ' arrow-disable';
   }
   else{
      setPrice(but.parentNode,+current.value - 1)
      current.stepDown();
   }
}

function incrementCounter(el){
    var current = el.parentNode.querySelector('[type=number]');
   var but = el.parentNode;
    if(but.querySelector('.arrow-left').className.indexOf('arrow-disable') !== -1){
        but.querySelector('.arrow-left').className = but.querySelector('.arrow-left').className.replace(' arrow-disable','') ;
    }
    setPrice(but.parentNode,+current.value + 1)
    current.stepUp();
 }

 function setPrice(element,value){
    element.querySelector('.re-purchase-price').innerText = '$' + value * price;
 }

function getResponsive() {
    var x = document.getElementById("sidebar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

