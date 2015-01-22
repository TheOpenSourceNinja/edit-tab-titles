var menuItem = require("menuitems");
var tabs = require("sdk/tabs");

function handleClick(state) {
	console.log( "test" );
	console.log('active: ' + tabs.activeTab.url);
	console.log( "title of active tab is " + tabs.activeTab.title + ". Setting it to TEST." );
	tabs.activeTab.title = "TEST";
}

menuItem.Menuitem({
	id: "clickme",
	menuid: "menu_ToolsPopup",
	label: "Edit current tab's title",
	onCommand: handleClick,
	insertbefore: "menu_pageInfo"
});
