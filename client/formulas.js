console.log("formulas.js processed");

// the formulas page

var formulas_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Cell")
			]),
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Content")
			]),
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Penalty")
			]),
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Formula")
			])
		),
		m("div.buttonrow", [
			m("input[type=button].save", {tabindex:"-1"})
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

