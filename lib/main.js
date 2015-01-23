var menuItem = require("menuitems");
var tabs = require("sdk/tabs");

function handleClick(state) {
	console.log( "title of active tab is " + tabs.activeTab.title + ". Setting it to TEST." );
	tabs.activeTab.title = "TEST";
}

menuItem.Menuitem({
	id: "edit_tab_title",
	menuid: "menu_ToolsPopup",
	label: "Edit current tab's title",
	onCommand: handleClick,
	insertbefore: "menu_pageInfo"
});
