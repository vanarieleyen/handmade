console.log("evaluate.js processed");

var evaluate_content = {
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

	},
	view: function () {
		return m("#evaluate", this.contents);
	}
}