//This script borrows heavily from the "Display a Popup" tutorial: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Display_a_Popup

var textArea = document.getElementById( "edit-box" );
var button = document.getElementById( "ok-button" );

function doMagic() {
	var text = textArea.value; //Should we do any kind of filtering here? Removing newlines, etc?
	self.port.emit( "text-entered", text ); //Lets main.js know what the new title should be
	textArea.value = "";
}

textArea.addEventListener( "keypress", function( event ) {
	if( event.keyCode == 13 ) { //key code 13 is enter
		doMagic();
	}
}, false );

button.addEventListener( "click", doMagic, false );

self.port.on( "show", function( oldTitle ) {
	textArea.value = oldTitle;
	textArea.focus();
} );
