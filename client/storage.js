console.log("rolling.js processed");

// the rolling process input page

var storage_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", 
					m("label.MEASUREMENTS")
				),
				m("table", {width: "100%", border: "0"}, 
					m("tr", [
						m("td",
							m("table", {width: "100%"}, [
								m("tr", [
									m("td",	m("label.HANDMADE_DATE")),
									m("td",	m("input.datum", {type: "text", name: "date"}))
								]),
								m("tr", [
									m("td",	m("label.PRODUCT")),
									m("td",	m("input", {type: "text", name: "product"}))
								]),
								m("tr", [
									m("td",	m("label.IN_CHARGE")),
									m("td",	m("input", {type: "text", name: "incharge"}))
								])
							])
						),
						m("td",
							m("table", {width: "100%"}, [
								m("tr", [
									m("td",	m("label.BATCH_SCORE")),
									m("td",	m("div", {name: "score"}, "--"))
								]),
								m("tr", [
									m("td",	m("label.BATCH_QUALITY_OK")),
									m("td",	m("div", {name: "batchok"}, "--"))
								]),
								m("tr", [
									m("td",	m("label.INSPECTOR")),
									m("td",	m("input", {type: "text", name: "inspector"}))
								])
							])						
						),
						m("td", {valign: "top"},
							m("table", {width: "100%"}, [
								m("tr", [
									m("td",	m("label.REMARK")),
									m("td",	m("textarea", {style: "height:4em; width:15em; resize:none", name: "remarks"}))
								])
							])
						)					
					])
				)
			])			
		)
	],
	contents: [
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.PROCESSING_DATE")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.START_DATE")),
						m("td",	m("input.datum", {name: "start"})),
						m("td",	m("label.END_DATE")),
						m("td",	m("input.datum", {name: "end"}))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.MOISTURE_LIMITS")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.LOWER_LIMIT")),
						m("td",	m("input.number", {name: "moistmin"})),
						m("td",	m("label.UPPER_LIMIT")),
						m("td",	m("input.number", {name: "moistmax"}))
					])
				])
			])
		),
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.APPEARANCE_QUALITY")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td", m("label.MILDEW_WORMS")),
						m("td",	{colspan: 3}, m("select", {name: "deworm"}))
					]),
					m("tr", [
						m("td",	m("label.HEADEND")),
						m("td",	m("input.number", {name: "headend"})),
						m("td",	m("label.HEAD_EMPTY")),
						m("td",	m("input.number", {name: "empty"}))
					]),
					m("tr", [
						m("td",	m("label.SEAMS")),
						m("td",	m("input.number", {name: "seam"})),
						m("td",	m("label.HOLES")),
						m("td",	m("input.number", {name: "hole"}))
					]),
					m("tr", [
						m("td",	m("label.DOPANT")),
						m("td",	m("input.number", {name: "dopant"})),
						m("td",	m("label.CRACKS")),
						m("td",	m("input.number", {name: "break"}))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.MOISTURE")
				),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [
						m("td",	m("input.number", {name: "m1"})),
						m("td",	m("input.number", {name: "m2"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "m3"})),
						m("td",	m("input.number", {name: "m4"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "m5"})),
						m("td",	m("input.number", {name: "m6"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "m7"})),
						m("td",	m("input.number", {name: "m8"}))
					])
				])
			])
		),
		m("div.buttonrow", [
			m("input[type=button].prev", {value: " <<< ", tabindex:"-1"}),
			m("input[type=button].next", {value: " >>> ", tabindex:"-1"}),
			m("input[type=button].new", {tabindex:"-1"}),
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
			
		// save data
		$("input:text").blur(function () {
			var field = $(this).attr('name');
		})
	},
	view: function () {
		return m("div", [this.header, this.contents]);
	}
}

