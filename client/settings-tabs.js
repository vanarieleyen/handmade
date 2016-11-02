console.log("data.js (create subtabs) processed");

// creates the data-entry subtabs


var settings_content = {
	subTabs: [
		m("#tabs2.subtabs1", [
			m("ul", [
				m("li", 
					m("a", {href: "#users_sub_tab", tabindex:"-1"}, [
						m("label", {class:"SETTINGS"})
					])
				)
			]),
			[			// the tabs used by ui-tabs
			//	m("#formulas_sub_tab", m.component(cutting_content)),
			//	m("#specs_sub_tab", m.component(storage_content)),
				m("#users_sub_tab", m.component(users_content))
			]
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized)
			return;
		
		$( "#tabs2" ).tabs();
	},
	view: function () {
		return m("div", this.subTabs);
	}
}


