//This script borrows heavily from the "Display a Popup" tutorial: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Display_a_Popup

var {components} = require("chrome");

var tabs = require("sdk/tabs");
var editedTab = tabs.activeTab;
var tabUtils = require("sdk/tabs/utils");
var SDKwindows = require("sdk/windows");
var windows = SDKwindows.browserWindows;

var editMenuItem = require("menuitems").Menuitem({
	id: "edit_edit_tab_title",
	menuid: "menu_EditPopup",
	label: "Edit current tab's title",
	onCommand: showPanel_currentTab,
	insertbefore: "menu_preferences",
	accesskey: "E"
});

var tabContextMenuItem = require("menuitems").Menuitem({
	id: "context_edit_tab_title",
	menuid: "tabContextMenu",
	label: "Edit CURRENT tab's title", //Emphasize current until we figure out how to work on the tab that was actually right-clicked on
	onCommand: function( event ) {
		console.log( "Event: " + event );
		showPanel_currentTab();
	},
	insertbefore: "menu_preferences",
	accesskey: "E"
});

var pageContextMenu = require("sdk/context-menu");
pageContextMenu.Item({
	label: "Edit current tab's title",
	context: pageContextMenu.PageContext(),
	contentScript: "self.on('click', function( node, data ) { self.postMessage( node ) } );",
	onMessage: function( node ) {
		showPanel_currentTab();
	},
	accesskey: "E"
});

var text_entry = require("sdk/panel").Panel( {
	contentURL: "./text-entry.html",
	contentScriptFile: "./get-text.js",
	height: 45 //41 pixels, determined through experimentation, is just big enough to prevent a scroll bar from appearing on the side. I upped it to 45 just in case. TODO: Is there a way to make the size of the panel dependent on its content rather than hard-coded numbers like this?
} );

function showPanelCommon() {
	text_entry.show();
}

function showPanel_currentTab() {
	editedTab = tabs.activeTab;
	showPanelCommon();
}

function showPanel_selectedTab() {
	console.log( contextMenuItem.value );
}

text_entry.on( "show", function() {
	text_entry.port.emit( "show", editedTab.title ); //The text box gets pre-filled with the tab's current title
} );

text_entry.port.on( "text-entered", function( text ) {
	console.log( 'Title of active tab is "' + editedTab.title + '". Setting it to "' + text + '".' );
	editedTab.title = text;
	text_entry.hide();
} );
