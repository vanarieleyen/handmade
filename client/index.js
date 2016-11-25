window.$ = require("jquery");
window.m = require('mithril');
jQuery = window.$;

require("ui-css");
require("master-css");
require("zebra-css");

require('jquery-ui');
require("jstorage");
require("zebra-js");

require("script!sprintf-js");
require("script!language");
require("script!functions");

var debug=false;

// wrapper for require script (shows which file is processed)
function include(filename) {
	if (debug)
		console.log("processing: "+filename);	
	require('script!./'+filename);
}

// the complete handmade component
var handmade = {
	setStyle: function() {		// dynamically create style - called by (m)config
		document.styleSheets[0].insertRule('.number {	width: 5em;	}', 0);		// create .number style
	},	
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
// where initially evaluated: eval(require('script!./rolling.js'));	but doesn't seem to be necessary

include('stick-defects.js');
include('pack-defects.js');
include('sleeve-defects.js');

include("rolling.js");
include('wrapping.js');
include('cutting.js');
include('storage.js');
include('defects-tabs.js');
include('data-tabs.js');			// parent

include('history.js');

include('evaluate.js');

include('specs.js');					// children of settings-tab
include('formulas.js');	
include('users.js');	
include('names.js');	
include('settings-tabs.js');	// parent


// the tabs used by ui-tabs
var tabContents = [
	m("#data_tab", {config: handmade.setStyle}, m.component(data_content)),
	m("#history_tab", m.component(history_content)),
	m("#evaluate_tab", m.component(evaluate_content)),
	m("#settings_tab", {config: handmade.setStyle}, m.component(settings_content))
]

var uiTabs = [
	m("#tabs.pagecontainer", [
		m("ul", [
			[
				{label:"label.PACKING50", href:"#data_tab"},
				{label:"label.HISTORY", href:"#history_tab"},
				{label:"label.EVALUATE", href:"#evaluate_tab"},
				{label:"label.SETTINGS", href:"#settings_tab"}
			].map(function (a) {
				return m("li", 
								m("a", {href: a.href, tabindex:"-1" }, [
									m(a.label)
								])
							)
			})
		]),
		tabContents
	])
]


$(document).ready(function() {
	m.mount(document.body, handmade );
		
	if ($.jStorage.get("lang") == null)
		$.jStorage.set("lang", 0);
	if ($.jStorage.get("handmade_maintab") == null)
		$.jStorage.set("handmade_maintab", 0);
	if ($.jStorage.get("handmade_subtab") == null)
		$.jStorage.set("handmade_subtab", 0);

	fill_labels();

	$( "#tabs" ).tabs({
		active: $.jStorage.get("handmade_maintab"),			// default tab when page is first loaded
		activate: function( event, ui ) {
			keus = ui.newPanel[0].id;
			switch (keus) {
				case "data_tab":			
					$.jStorage.set("handmade_maintab", 0);
					break;
				case "history_tab": 	
					show_history(); 												// update the history
					$.jStorage.set("handmade_maintab", 1);
					break;
				case "evaluate_tab": 		
					$.jStorage.set("handmade_maintab", 2);
					break;
				case "settings_tab": 	
					show_specs();
					$.jStorage.set("handmade_maintab", 3);
					break;
			}
		}
	});

	$('.datum').Zebra_DatePicker();

	console.log('ready');
});

