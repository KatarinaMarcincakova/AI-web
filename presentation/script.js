var slideN;
slideN = 1;

var i;
for (i = 0; i <= 5; i++){
    document.getElementById(i.toString()).style.display = "none";
}
            
function myFunction(event) {
    var x = event.which;
    if (x == 39 && slideN < 5){
    document.getElementById(slideN.toString()).style.display = "none";
    slideN = slideN + 1;
    document.getElementById(slideN.toString()).style.display = "contents";
    }
    if (x == 37 && slideN > 1){
    document.getElementById(slideN.toString()).style.display = "none";
    slideN = slideN - 1;
    document.getElementById(slideN.toString()).style.display = "contents";
    }
}