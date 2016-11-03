console.log("rolling.js processed");

// the rolling process input page

var cutting_content = {
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
									m("td",	m("input.date", {type: "text", name: "date"}))
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
						m("td",	m("label.CREASE")),
						m("td",	m("input.number", {name: "crease"})),
						m("td",	m("label.BLOTS")),
						m("td",	m("input.number", {name: "blot"}))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.WRAPPER_INTEGRITY")
				),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	m("label.SEAMS")),
						m("td",	m("input.number", {name: "seam"})),
						m("td",	m("label.CRACKS")),
						m("td",	m("input.number", {name: "break"}))
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
						m("td",	m("label.HEADEND")),
						m("td",	m("input.number", {name: "headend"})),
						m("td",	m("label.INCISSION")),
						m("td",	m("input.number", {name: "incision"})),
						m("td",	m("label.HEAD_EMPTY")),
						m("td",	m("input.number", {name: "empty"}))
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
			
		var d_options = {
			show_week_number: WEEK,
			days: DAYS,
			months: MONTHS,
			offset: [10, 220],
			lang_clear_date: ""
		};	
		$('#data_header .date').Zebra_DatePicker(d_options);
		
		// save data
		$("input:text").blur(function () {
			var field = $(this).attr('name');
		})
	},
	view: function () {
		return m("div", [this.header, this.contents]);
	}
}

