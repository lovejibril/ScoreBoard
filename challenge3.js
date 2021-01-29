/*

You will create an ice hockey scoreboard.
You can add and remove goals.
You can control the current period (there are 3 periods in Hockey)

Lastly, you can add a player name to the penalty list.
Create an area where you can add and remove players name from a penalty area.

1. You will need variables to store the points
2. When a user clicks on the add button, you will need to add to the variable, and then display it in HTML
3. When a user clicks the subtract button, you will need to subtract from the variable, and then display it in HTML
4. Use CSS Flexbox or Grids to build your scoreboard layout
5. You will need a button to clear the penalty list
6. A reset score button should also be included that clears your entire scoreboard.
7. The score cannot be less than 0
8. The period can only be 1, 2, or 3 (starting from 1)

GOOD LUCK ✌🏒

*/
function increment(element){
    console.log(element)
    selectorString = '' + element + '';
    console.log(selectorString);
    var add = document.getElementById(element).innerHTML;
    add++;
    document.getElementById(element).innerHTML = add;
}

function decrement(element) {
    console.log(element)
    selectorString = '' + element + '';
    console.log(selectorString);
    var sub = document.getElementById(element).innerHTML;
    sub--;
    document.getElementById(element).innerHTML = sub;
    if (sub<=0){
        document.getElementById(element).innerHTML = 0;
    }
}

function periodInc(element){
    console.log(element)
    selectorString = '' + element + '';
    console.log(selectorString);
    var add = document.getElementById(element).innerHTML;
    add++;
    document.getElementById(element).innerHTML = add;
    if (add >= 3){
        document.getElementById(element).innerHTML = 3;
    }
}

function periodDec(element) {
    console.log(element)
    selectorString = '' + element + '';
    console.log(selectorString);
    var sub = document.getElementById(element).innerHTML;
    sub--;
    document.getElementById(element).innerHTML = sub;
    if (sub<=1){
        document.getElementById(element).innerHTML = 1;
    }
}
// Create a "close" button and append it to each list item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var btn = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  myList[i].appendChild(btn);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var clear = document.getElementById("clear");
clear.onclick = function() {
    var list = document.getElementById("myUL");
    list.innerHTML = "";
}

var clear1 = document.getElementById("clear1");
clear1.onclick = function(){
    var list1 = document.getElementById("myUL1");
    list1.innerHTML = "";
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addName").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("addName").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newElement1() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addName1").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL1").appendChild(li);
    }
    document.getElementById("addName1").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

//Time
window.onload = function () {
    var mins = 00;
    var seconds = 00;   
    var tens = 00;
    var appendMins = document.getElementById("mins");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;
  
    buttonStart.onclick = function () {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    buttonStop.onclick = function () {
      clearInterval(Interval);
    };
  
    buttonReset.onclick = function () {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      mins = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMins.innerHTML = mins;
    };
  
    function startTimer() {
      tens++;
  
      if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
  
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 60) {
          console.log("mins");
          mins++;
          appendMins.innerHTML = "0" + mins;
          seconds = 0;
          appendSeconds.innerHTML = "0" + 0;
      }
    }
  };
  
//   Reset all 
  function reset(){
    document.getElementById("point1").innerHTML = 0;
    document.getElementById("point2").innerHTML = 0;
    document.getElementById("g1").innerHTML = 0;
    document.getElementById("g2").innerHTML = 0;
    document.getElementById("period").innerHTML = 1;
    document.getElementById("button-reset").click(); 
    document.getElementById("clear").click();
    document.getElementById("clear1").click();
  }
