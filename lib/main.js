//This script borrows heavily from the "Display a Popup" tutorial: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Display_a_Popup

var menuItem = require("menuitems").Menuitem({
	id: "edit_tab_title",
	menuid: "menu_EditPopup",
	label: "Edit current tab's title",
	onCommand: showPanel,
	insertbefore: "menu_preferences"
});

var tabs = require("sdk/tabs");

var text_entry = require("sdk/panel").Panel( {
	contentURL: "./text-entry.html",
	contentScriptFile: "./get-text.js",
	height: 45 //41 pixels, determined through experimentation, is just big enough to prevent a scroll bar from appearing on the side. I upped it to 45 just in case. TODO: Is there a way to make the size of the panel dependent on its content rather than hard-coded numbers like this?
} );

function showPanel() {
	text_entry.show();
}

text_entry.on( "show", function() {
	text_entry.port.emit( "show", tabs.activeTab.title ); //The text box gets pre-filled with the tab's current title
} );

text_entry.port.on( "text-entered", function( text ) {
	console.log( 'Title of active tab is "' + tabs.activeTab.title + '". Setting it to "' + text + '".' );
	tabs.activeTab.title = text;
	text_entry.hide();
} );
