console.log("formulas.js processed");

// the formulas page

var formulas_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Cell"),
				m("div", {style: "height:35em; overflow-y:auto"},
					m("span.flex-col", [
						m("table", {width: "100%"}, [
							m("tr", m("td[colspan=2]", {align:"center"}, m("label.ROLLING_PROCESS")) ),
							m("tr", [ m("td", {width: "20%"}, m("", "A1")),	m("td", m("label", "长度偏小次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A2")),	m("td", m("label", "长度偏大次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A3")),	m("td", m("label", "长度合格次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A4")),	m("td", m("label", "圆周偏小次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A5")),	m("td", m("label", "圆周偏大次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A6")),	m("td", m("label", "圆周合格次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A7")),	m("td", m("label", "质量偏小次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A8")),	m("td", m("label", "质量偏大次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A9")),	m("td", m("label", "质量合格次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A10")),	m("td", m("label", "质量合格次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A11")),	m("td", m("label", "吸阻偏大次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A12")),	m("td", m("label", "吸阻合格次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A13")),	m("td", m("label.SURFACE_OUT" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A14")),	m("td", m("label.BLEND_ACC" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A15")),	m("td", m("label.PD_ACC" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "B1")),	m("td", m("label.LENGTH" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "C1")),	m("td", m("label.CIRCUMFERENCE" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "D1")),	m("td", m("label.WEIGHT" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "E1")),	m("td", m("label.PRESSUREDROP" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A16")),	m("td", m("label.BATCH_SCORE" )) ]),
							m("tr", m("td[colspan=2]", {align:"center"}, m("label.WRAPPING_PROCESS")) ),
							m("tr", [	m("td", {width: "20%"}, m("", "A17")),	m("td", m("label.TIGHTNESS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A18")),	m("td", m("label.WRAPPER_COLOR" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A19")),	m("td", m("label.HEADEND" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A20")),	m("td", m("label.WRAPPED_OK" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A21")),	m("td", m("label.INCISSION" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A22")),	m("td", m("label.HEAD_EMPTY" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A23")),	m("td", m("label.TIGHTNESS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A24")),	m("td", m("label.VEIN_LINES" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A25")),	m("td", m("label.CREASE" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A26")),	m("td", m("label.SPOTS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A27")),	m("td", m("label.BLOTS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A28")),	m("td", m("label.SEAMS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A29")),	m("td", m("label.HOLES" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A30")),	m("td", m("label.CRACKS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A31")),	m("td", m("label.SPLICES" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A32")),	m("td", m("label.BATCH_SCORE" )) ]),
							m("tr", m("td[colspan=2]", {align:"center"}, m("label.MACHINE_CUTTING")) ),
							m("tr", [	m("td", {width: "20%"}, m("", "A33")),	m("td", m("label.HEADEND" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A34")),	m("td", m("label.INCISSION" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A35")),	m("td", m("label.HEAD_EMPTY" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A36")),	m("td", m("label.CREASE" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A37")),	m("td", m("label.BLOTS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A38")),	m("td", m("label.SEAMS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A39")),	m("td", m("label.CRACKS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A40")),	m("td", m("label.BATCH_SCORE" )) ]),
							m("tr", m("td[colspan=2]", {align:"center"}, m("label.STORAGE_PROCESS")) ),
							m("tr", [	m("td", {width: "20%"}, m("", "A41")),	m("td", m("label.DOPANT" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A42")),	m("td", m("label.HEADEND" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A43")),	m("td", m("label.HEAD_EMPTY" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A44")),	m("td", m("label.SEAMS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A45")),	m("td", m("label.HOLES" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A46")),	m("td", m("label.CRACKS" )) ]),
							m("tr", [ m("td", {width: "20%"}, m("", "A47")),	m("td", m("label", "水分偏小次数" )) ]),
							m("tr", [ m("td", {width: "20%"}, m("", "A48")),	m("td", m("label", "水分偏大次数" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A49")),	m("td", m("label.MILDEW_WORMS" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "A50")),	m("td", m("label.BATCH_SCORE" )) ]),
							m("tr", [ m("td", {width: "20%"}, m("", "A51")),	m("td", m("label", "水分合格次数" )) ]),
							m("tr", [ m("td", {width: "20%"}, m("", "A52")),	m("td", m("label", "水标±0.5%次数" )) ]),
							m("tr", m("td[colspan=2]", {align:"center"}, m("label.SPECS")) ),
							m("tr", [	m("td", {width: "20%"}, m("", "S1 (min)")),	m("td", m("label.LENGTH" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S2 (max)")),	m("td", m("label.LENGTH" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S3 (min)")),	m("td", m("label.CIRCUMFERENCE" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S4 (max)")),	m("td", m("label.CIRCUMFERENCE" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S5 (min)")),	m("td", m("label.WEIGHT" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S6 (max)")),	m("td", m("label.WEIGHT" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S7 (min)")),	m("td", m("label.PRESSUREDROP" )) ]),
							m("tr", [	m("td", {width: "20%"}, m("", "S8 (max)")),	m("td", m("label.PRESSUREDROP" )) ])
						])
					])
				)
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

