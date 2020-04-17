slideN = 0


for (i = 1; i < 6; i++) {
	$('p').eq(i).addClass('hidden');
  }
function myFunction(event) {
  var x = event.which;
  
  
  if (x == 39){
	for (i = 0; i < 6; i++) {
		$('p').eq(i).removeClass('shown');
		$('p').eq(i).addClass('hidden');
		console.log("for");
	}
	slideN = slideN + 1;
    $('p').eq(slideN).addClass('shown');
  }
  if (x == 37){
	for (i = 0; i < 6; i++) {
		$('p').eq(i).removeClass('shown');
		$('p').eq(i).addClass('hidden');
		console.log("for");
	}
	slideN = slideN - 1;
    $('p').eq(slideN).addClass('shown');
  }
  console.log(slideN);
}