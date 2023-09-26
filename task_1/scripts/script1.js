function reverseString() {
    var x = document.getElementById("myInput").value;
    setTimeout(function(){ 
      document.getElementById("reverse").innerHTML = x.split("").reverse().join(""); 
    }, 1000);
  }