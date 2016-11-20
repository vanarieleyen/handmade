

var history_content = {
	contents: [
		m("div", {style: "height:41em; overflow:auto"},
			m("table#lijst", {width: "99%"},
				[
					m("thead.header"), 	// head of the list
					m("tbody")		// the lines in the list
				]
			)
		)
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;

		$('#history #lijst tbody').on('click', 'td', function(e) {		// open the selected row
			var id = parseInt($(this).parent().find("td:first").text());
			var table = $.jStorage.get("handmade_lasttab").split('_')[0];

			$.jStorage.set("handmade.current."+table, id);
			show_data(table);		// update the data in the tab before it is selected
			$('.PACKING50').click();
		});

		// initial filling of the history tab is done by calling show_history() in view-config
		// filling of the history when changing tabs is done in index.js
	},
	view: function () {
		return m("#history", {config: show_history}, this.contents);
	}
}