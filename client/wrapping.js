console.log("rolling.js processed");

// the rolling process input page

var wrapping_content = {
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
									m("td",	m("label.SAMPLINGPOINT")),
									m("td",	m("input", {type: "text", name: "name"}))
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
									m("td",	m("label.BATCH_QUALITY")),
									m("td",	m("div", {name: "quality"}, "--"))
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
					m("label.WRAPPING_FINISH")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.INCISSION")),
						m("td",	m("input.number", {name: "incision"})),
						m("td",	m("label.HEAD_EMPTY")),
						m("td",	m("input.number", {name: "empty"}))
					]),
					m("tr", [
						m("td",	m("label.SEAMS")),
						m("td",	m("input.number", {name: "seam"})),
						m("td",	m("label.HOLES")),
						m("td",	m("input.number", {name: "hole"}))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.WRAPPER_INTEGRITY")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.TIGHTNESS")),
						m("td",	m("input.number", {name: "tightness"})),
						m("td",	m("label.VEIN_LINES")),
						m("td",	m("input.number", {name: "veins"}))
					]),
					m("tr", [
						m("td",	m("label.CRACKS")),
						m("td",	m("input.number", {name: "crack"})),
						m("td",	m("label.SPLICES")),
						m("td",	m("input.number", {name: "splice"}))
					])
				])
			])
		),
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.CIGAR_APPEARANCE")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.WRAPPER_COLOR")),
						m("td",	m("input.number", {name: "color"})),
						m("td",	m("label.HEADEND")),
						m("td",	m("input.number", {name: "headend"}))
					]),
					m("tr", [
						m("td",	m("label.WRAPPED_OK")),
						m("td",	m("input.number", {name: "wrapok"})),
						m("td",	m("label.CREASE")),
						m("td",	m("input.number", {name: "crease"}))
					]),
					m("tr", [
						m("td",	m("label.SPOTS")),
						m("td",	m("input.number", {name: "spot"})),
						m("td",	m("label.BLOTS")),
						m("td",	m("input.number", {name: "blot"}))
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

