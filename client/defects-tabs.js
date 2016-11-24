
// creates the defects subtabs

var defects_content = {
	subTabs: [
		m("#tabs3.subtabs1", [
			m("ul", [
				[
					{label:"label.STICK_PACK_QUALITY", href:"#stick_sub_tab"},
					{label:"label.PACKAPPEARANCE", href:"#pack_sub_tab"},
					{label:"label.SLEEVEBOX", href:"#sleeve_sub_tab"}
				].map(function (a) {
					return m("li", 
									m("a", {href: a.href, tabindex:"-1" }, [
										m(a.label)
									])
								)
				})
			]),
			[			// the tabs used by ui-tabs
				m("#stick_sub_tab", m.component(stickdefects_content)),
				m("#pack_sub_tab", m.component(packdefects_content)),
				m("#sleeve_sub_tab", m.component(sleevedefects_content))
			]
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized)
			return;
		
		$( "#tabs3" ).tabs({
			active: $.jStorage.get("handmade_defectstab"),			// default tab when page is first loaded
			activate: function( event, ui ) {
				keus = ui.newPanel[0].id;
				//console.log(ui);
				switch (keus) {
					case "stick_sub_tab":		$.jStorage.set("handmade_defectstab", 0);
												break;
					case "pack_sub_tab": 		$.jStorage.set("handmade_defectstab", 1);
												break;
					case "sleeve_sub_tab": 	$.jStorage.set("handmade_defectstab", 2);
												break;
				}
			}
		});
	},
	view: function () {
		return m("div", this.subTabs);
	}
}


