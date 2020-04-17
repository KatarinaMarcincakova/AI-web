slideN = 0


for (i = 1; i < 6; i++) {
	$('div').eq(i).addClass('hidden');
  }
function myFunction(event) {
  var x = event.which;
  
  
  if (x == 39){
	for (i = 0; i < 6; i++) {
		$('div').eq(i).removeClass('shown');
		$('div').eq(i).addClass('hidden');
		console.log("for");
	}
	slideN = slideN + 1;
    $('div').eq(slideN).addClass('shown');
  }
  if (x == 37){
	for (i = 0; i < 6; i++) {
		$('div').eq(i).removeClass('shown');
		$('div').eq(i).addClass('hidden');
		console.log("for");
	}
	slideN = slideN - 1;
    $('div').eq(slideN).addClass('shown');
  }
  console.log(slideN);
}