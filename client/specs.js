console.log("specs.js processed");

// the specs page

var specs_content = {
	contents: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("span.flex-col", [
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "PRODUCT"}),
					m("table", {width: "100%"}, [
						m("tr", {align: "center"}, [
							m("td",	m("label.NAME")),
							m("td",	m("input[type=text].number", {name: "name"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.PRODNR")),
							m("td",	m("input[type=text].number", {name: "nr"}))
						])
					])
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "ROLLING_PROCESS"}),						
					m("table", {width: "100%"}, [
						m("tr", {align: "center"}, [
							m("td",	m("label.LENGTH")),
							m("td",	m("input[type=text].number", {name: "rol_l_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_l_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.CIRCUMFERENCE")),
							m("td",	m("input[type=text].number", {name: "rol_c_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_c_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.WEIGHT")),
							m("td",	m("input[type=text].number", {name: "rol_w_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_w_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.PRESSUREDROP")),
							m("td",	m("input[type=text].number", {name: "rol_p_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_p_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.BLEND_ACC")),
							m("td",	{colspan: "3"}, m("input[type=text].number", {name: "rol_blendacc"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.PD_ACC")),
							m("td",	{colspan: "3"}, m("input[type=text].number", {name: "rol_pdacc"}))
						])
					])
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "WRAPPING_PROCESS"}),
					m("div", {style: "height: 4em"})
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "MACHINE_CUTTING"}),
					m("div", {style: "height: 4em"})
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "STORAGE_PROCESS"}),
					m("div", {style: "height: 4em"})
				])
			]),
			m("span.flex-col#data_header",
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend", {class: "PRODUCT"}),
					m("div", {style: "height:20em; overflow:auto"}, 
						m("table#productlist", {width: "100%", border: "1"}, [
							m("thead", {valign: "top"}, [
								m("th", {"data-dynatable-column":"id"}),
								m("th", {"data-dynatable-column":"name"}),
								m("th", {"data-dynatable-column":"nr"})
							]),
							m("tbody", {style:"height:20em; overflow:auto"})					
						])
					),
					m("div", {style: "height:10em; overflow:auto"}, 
						m("table#productlist", {width: "100%", border: "1"}, [
							m("thead", {valign: "top"}, [
								m("th", {"data-dynatable-column":"id"}),
								m("th", {"data-dynatable-column":"start"}),
								m("th", {"data-dynatable-column":"end"})
							]),
							m("tbody", {style:"height:20em; overflow:auto"})					
						])
					)
				])
			)
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
			
		// application code
	},
	view: function () {
		return m("div", this.contents);
	}
}

