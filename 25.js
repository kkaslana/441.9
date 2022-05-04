
   function validateform() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var number = document.getElementById("number").value;
    var reg = /\d/;
    if (!firstname) {
        alert("Name can't be blank");
        return false;
    }
    else if (!lastname) {
        alert("Name can't be blank");
        return false;
    }
    else if (!number || !reg.test(number))
       alert("Your input is wrong");
       return false;
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}