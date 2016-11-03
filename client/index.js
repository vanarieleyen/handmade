window.$ = require("jquery");
window.m = require('mithril');
jQuery = window.$;

require("ui-css");
require("master-css");
require("zebra-css");

require('jquery-ui-bundle');
require("jstorage");
require("zebra-js");

require("script!language");
require("script!functions");


// the complete handmade component
var handmade = {
	controller: function (element, isInitialized) {	
	    if (!isInitialized) {
		    $(element).css({				// place the flags in the upper right corner
				"position": "absolute",
				"width": "90px",
				"height": "27px",
				"top": "6px",
				"right": "1em",
				"display": "-webkit-flex",
				"-webkit-flex-direction": "row",
				"-webkit-justify-content": "space-between",
				"z-index": "1000"
			})
		}	
	},		
	view: function () {
		return [	flagBox,	uiTabs,	tabContents	];
	}
}

// the language box

var flagBox = [ 
	m("span", {config: handmade.controller}, [
		m("img", {src: require("../assets/CN.jpg"), onclick: function(){$.jStorage.set("lang", 0); fill_labels();} }),
		m("img", {src: require("../assets/GB.jpg"), onclick: function(){$.jStorage.set("lang", 1); fill_labels();} })
	])
]

// read and evaluate the tab-scripts 
// childs first, then the parents
eval(require('script!./rolling.js'));		// children of data-tab
eval(require('script!./wrapping.js'));
eval(require('script!./cutting.js'));
eval(require('script!./storage.js'));
eval(require('script!./defects.js'));
eval(require('script!./data-tabs.js'));	// parent

eval(require('script!./history.js'));

eval(require('script!./specs.js'));					// children of settings-tab
eval(require('script!./formulas.js'));	
eval(require('script!./users.js'));	
eval(require('script!./settings-tabs.js'));	// parent


// the tabs used by ui-tabs
var tabContents = [
	m("#data_tab", m.component(data_content)),
	m("#history_tab", m.component(history_content)),
	m("#export_tab", "export"),
	m("#settings_tab", m.component(settings_content))
]

var uiTabs = [
	m("#tabs.pagecontainer", [
		m("ul", [
			m("li", 
				m("a", {href: "#data_tab", tabindex:"-1" }, [
					m("label", {class:"PACKING50"})
				])
			),
			m("li",
				m("a", {href: "#history_tab", tabindex:"-1"}, [
					m("label", {class:"HISTORY"})
				])
			),
			m("li",
				m("a", {href: "#export_tab", tabindex:"-1"}, [
					m("label", {class:"EXPORT"})
				])
			),
			m("li",
				m("a", {href: "#settings_tab", tabindex:"-1"}, [
					m("label", {class:"SETTINGS"})
				])
			)
		]),
		tabContents
	])
]

m.mount(document.body, handmade );

$(document).ready(function() {

	if ($.jStorage.get("handmade_maintab") == null)
		$.jStorage.set("handmade_maintab", 0);
	if ($.jStorage.get("handmade_subtab") == null)
		$.jStorage.set("handmade_subtab", 0);

	fill_labels();

	$( "#tabs" ).tabs({
		active: $.jStorage.get("handmade_maintab"),			// default tab when page is first loaded
		activate: function( event, ui ) {
			keus = ui.newPanel[0].id;
			console.log(ui);
			switch (keus) {
				case "data_tab":		$.jStorage.set("handmade_maintab", 0);
											break;
				case "history_tab": 	$.jStorage.set("handmade_maintab", 1);
											break;
				case "export_tab": 	$.jStorage.set("handmade_maintab", 2);
											break;
				case "settings_tab": $.jStorage.set("handmade_maintab", 3);
											break;
			}
		}
	});

	console.log('exit');
});

