/*
	add event listener to li items to turn it off/on

	when an li is clicked inside of a ul, it will this code
	added a listener to an element that exists when the page loads (ul),
	but only listening to the li's that are clicked inside of the ul

	on() is used instead of click() because click() only adds listeners
	to existing elements. 
	on() will add listeners to all existing elements, but also all potential
	future elements that are clicked, so that we can add the listener's to 
	li's that we dynamically create
*/
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete the list item when the X is clicked
$("ul").on("click", "span", function(){

	// remove the entire list item from the DOM
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	// stop the action listeners of the list item's parent from firing
	event.stopPropagation();
});

// add the new li element to the DOM when the enter button is pressed
$("input[type='text']").keypress(function(event){
	/*
		the which value will refer to the code of the key that was pressed
		the code for the enter key is 13
		code table can be found here:
		https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	*/
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		var liText = "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li";
		$("ul").append(liText);
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});