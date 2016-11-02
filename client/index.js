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
	controller: function (element, isInitialized) {	// used for placing the flags
	    if (!isInitialized) {
		    $(element).css({
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
eval(require('script!./rolling.js'));
eval(require('script!./wrapping.js'));
eval(require('script!./cutting.js'));
eval(require('script!./storage.js'));
eval(require('script!./defects.js'));
eval(require('script!./data.js'));

eval(require('script!./history.js'));


// the tabs used by ui-tabs
var tabContents = [
	m("#data_tab", m.component(data_content)),
	m("#history_tab", m.component(history_content)),
	m("#export_tab", "export"),
	m("#settings_tab", "settings")
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

	if ($.jStorage.get("handmade_tab") == null)
		$.jStorage.set("handmade_tab", 0);

	console.log($.jStorage.get("handmade_tab"));
	
	fill_labels();

	$( "#tabs" ).tabs({
		active: $.jStorage.get("handmade_tab"),			// default tab when page is first loaded
		activate: function( event, ui ) {
			keus = ui.newPanel[0].id;
			console.log(ui);
			switch (keus) {
				case "data_tab":		$.jStorage.set("handmade_tab", 0);
											break;
				case "history_tab": 	$.jStorage.set("handmade_tab", 1);
											break;
				case "export_tab": 	$.jStorage.set("handmade_tab", 2);
											break;
				case "settings_tab": $.jStorage.set("handmade_tab", 3);
											break;
			}
		}
	});

	console.log('exit');
});

