console.log("data.js (create subtabs) processed");

// creates the data-entry subtabs

var data_content = {
	subTabs: [
		m("#tabs1.subtabs1", [
			m("ul", [
				m("li", 
					m("a", {href: "#rolling_sub_tab", tabindex:"-1"}, [
						m("label", {class:"ROLLING_PROCESS"})
					])
				),
				m("li", 
					m("a", {href: "#wrapping_sub_tab", tabindex:"-1"}, [
						m("label", {class:"WRAPPING_PROCESS"})
					])
				),
				m("li", 
					m("a", {href: "#cutting_sub_tab", tabindex:"-1"}, [
						m("label", {class:"MACHINE_CUTTING"})
					])
				),
				m("li", 
					m("a", {href: "#storage_sub_tab", tabindex:"-1"}, [
						m("label", {class:"STORAGE_PROCESS"})
					])
				),
				m("li", 
					m("a", {href: "#defects_sub_tab", tabindex:"-1"}, [
						m("label", {class:"DEFECTS"})
					])
				)
			]),
			[	// the tabs used by ui-tabs
				m("#rolling_sub_tab", m.component(rolling_content)),
				m("#wrapping_sub_tab", m.component(wrapping_content)),
				m("#cutting_sub_tab", m.component(cutting_content)),
				m("#storage_sub_tab", m.component(storage_content)),
				m("#defects_sub_tab", m.component(defects_content))
			]
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized)
			return;
		
		$( "#tabs1" ).tabs({
			active: $.jStorage.get("handmade_subtab"),			// default tab when page is first loaded
			activate: function( event, ui ) {
				keus = ui.newPanel[0].id;
				$.jStorage.set("handmade_lasttab", keus);

				switch (keus) {
					case "rolling_sub_tab":		$.jStorage.set("handmade_subtab", 0);
												break;
					case "wrapping_sub_tab": 	$.jStorage.set("handmade_subtab", 1);
												break;
					case "cutting_sub_tab": 	$.jStorage.set("handmade_subtab", 2);
												break;
					case "storage_sub_tab": 	$.jStorage.set("handmade_subtab", 3);
												break;
					case "defects_sub_tab": 	$.jStorage.set("handmade_subtab", 4);
												break;
				}
			}
		});
		
	},
	view: function () {
		return m("div", this.subTabs);
	}
}


