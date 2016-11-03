console.log("data.js (create subtabs) processed");

// creates the data-entry subtabs


var settings_content = {
	subTabs: [
		m("#tabs2.subtabs1", [
			m("ul", [
				m("li", 
					m("a", {href: "#specs_sub_tab", tabindex:"-1"}, [
						m("label", {class:"SPECS"})
					])
				),
				m("li", 
					m("a", {href: "#formulas_sub_tab", tabindex:"-1"}, [
						m("label", {class:"PENALTY"})
					])
				),
				m("li", 
					m("a", {href: "#users_sub_tab", tabindex:"-1"}, [
						m("label", {class:"SETTINGS"})
					])
				)
			]),
			[			// the tabs used by ui-tabs
				m("#formulas_sub_tab", m.component(formulas_content)),
				m("#specs_sub_tab", m.component(specs_content)),
				m("#users_sub_tab", m.component(users_content))
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
				}
			}
		});
	},
	view: function () {
		return m("div", this.subTabs);
	}
}


