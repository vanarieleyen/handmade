console.log("data.js (create subtabs) processed");

// creates the data-entry subtabs

var settings_content = {
	subTabs: [
		m("#tabs2.subtabs1", [
			m("ul", [
				[
					{label:"label.SPECS", href:"#specs_sub_tab"},
					{label:"label.PENALTY", href:"#formulas_sub_tab"},
					{label:"label.SETTINGS", href:"#users_sub_tab"},
					{label:"label.NAAM", href:"#names_sub_tab"}
				].map(function (a) {
					return m("li", 
									m("a", {href: a.href, tabindex:"-1" }, [
										m(a.label)
									])
								)
				})
			]),
			[			// the tabs used by ui-tabs
				m("#formulas_sub_tab", m.component(formulas_content)),
				m("#specs_sub_tab", m.component(specs_content)),
				m("#users_sub_tab", m.component(users_content)),
				m("#names_sub_tab", m.component(names_content))
			]
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized)
			return;
		
		$( "#tabs2" ).tabs({
			active: $.jStorage.get("handmade_subtab"),			// default tab when page is first loaded
			activate: function( event, ui ) {
				keus = ui.newPanel[0].id;
				console.log(ui);
				switch (keus) {
					case "specs_sub_tab":		$.jStorage.set("handmade_subtab", 0);
												break;
					case "formulas_sub_tab": 	$.jStorage.set("handmade_subtab", 1);
												break;
					case "users_sub_tab": 	$.jStorage.set("handmade_subtab", 2);
												break;
					case "names_sub_tab": 	$.jStorage.set("handmade_subtab", 3);
												break;
				}
			}
		});
	},
	view: function () {
		return m("div", this.subTabs);
	}
}


