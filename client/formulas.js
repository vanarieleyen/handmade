console.log("formulas.js processed");

// the formulas page

var formulas_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Formulas")
			])
		),
		m("div.buttonrow", [
			m("input[type=button].save", {tabindex:"-1"}),
			m("input[type=button].new", {tabindex:"-1"}),
			m("span", [
				m("input[type=checkbox].toggle"),
				m("input[type=button].delete", {tabindex:"-1"})
			])
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
			

	},
	view: function () {
		return m("div", [this.header, this.contents]);
	}
}

