console.log("rolling.js processed");

// the rolling process input page

var defects_content = {
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
									m("td",	m("label.SAMPLING_FREQ")),
									m("td",	m("input", {type: "text", name: "sample"}))
								])
							])
						),
						m("td",
							m("table", {width: "100%"}, [
								m("tr", [
									m("td",	m("label.INSPECTOR")),
									m("td",	m("input", {type: "text", name: "inspector"}))
								]),
								m("tr", [
									m("td",	m("label.REMARK")),
									m("td",	m("textarea", {style: "height:3em; width:15em; resize:none", name: "remarks"}))
								])
							])						
						),
						m("td", {valign: "top"},
							m("table", {width: "100%"}, [
								m("tr", [
									m("td",	m("label.STICK_PACKING_SCORE")),
									m("td",	m("div", {name: "sscore"}, "--"))
								]),
								m("tr", [
									m("td",	m("label.PACKING_SCORE")),
									m("td",	m("div", {name: "pscore"}, "--"))
								]),
								m("tr", [
									m("td",	m("label.SLEEVEBOX_SCORE")),
									m("td",	m("div", {name: "bscore"}, "--"))
								])
							])
						)					
					])
				)
			])			
		)
	],
	contents: [
		m("span.flex-col#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:97%"}, [
				m("legend", 
					m("label.STICK_PACK_QUALITY")
				),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td", m("label.JOBNR")),
						m("td",	m("input.number", {name: "sjob"})),
						m("td", m("label.DETERMINATION")),
						m("td",	m("input.number", {name: "sjudge"})),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "sremarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.RING")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "srd1"})),
										m("td",	m("input.number", {name: "srd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "srd2"})),
										m("td",	m("input.number", {name: "srd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "srd3"})),
										m("td",	m("input.number", {name: "srd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.CELLOPHANE")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "scd1"})),
										m("td",	m("input.number", {name: "scd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "scd2"})),
										m("td",	m("input.number", {name: "scd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "scd3"})),
										m("td",	m("input.number", {name: "scd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.CIGAR_SET")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "ssd1"})),
										m("td",	m("input.number", {name: "ssd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "ssd2"})),
										m("td",	m("input.number", {name: "ssd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "ssd3"})),
										m("td",	m("input.number", {name: "ssd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "spd1"})),
										m("td",	m("input.number", {name: "spd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "spd2"})),
										m("td",	m("input.number", {name: "spd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "spd3"})),
										m("td",	m("input.number", {name: "spd3_nr"}))
									])
								])
							])
						)
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:97%"}, [
				m("legend", 
					m("label.PACKAPPEARANCE")
				),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td", m("label.JOBNR")),
						m("td",	m("input.number", {name: "pjob"})),
						m("td", m("label.DETERMINATION")),
						m("td",	m("input.number", {name: "pjudge"})),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "premarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACK_QUALITY")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "ppd1"})),
										m("td",	m("input.number", {name: "ppd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "ppd2"})),
										m("td",	m("input.number", {name: "ppd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "ppd3"})),
										m("td",	m("input.number", {name: "ppd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "bmd1"})),
										m("td",	m("input.number", {name: "bmd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bmd2"})),
										m("td",	m("input.number", {name: "bmd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bmd3"})),
										m("td",	m("input.number", {name: "bmd3_nr"}))
									])
								])
							])
						)
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:97%"}, [
				m("legend", 
					m("label.SLEEVEBOX")
				),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td", m("label.JOBNR")),
						m("td",	m("input.number", {name: "pjob"})),
						m("td", m("label.DETERMINATION")),
						m("td",	m("input.number", {name: "pjudge"})),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "premarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.SLEEVE_QUALITY")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "bsd1"})),
										m("td",	m("input.number", {name: "bsd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bsd2"})),
										m("td",	m("input.number", {name: "bsd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bsd3"})),
										m("td",	m("input.number", {name: "bsd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.BOX_QUALITY")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "bbd1"})),
										m("td",	m("input.number", {name: "bbd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bbd2"})),
										m("td",	m("input.number", {name: "bbd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "bbd3"})),
										m("td",	m("input.number", {name: "bbd3_nr"}))
									])
								])
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [
									m('tr', [
										m("td",	m("select", {name: "pmd1"})),
										m("td",	m("input.number", {name: "pmd1_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "pmd2"})),
										m("td",	m("input.number", {name: "pmd2_nr"}))
									]),
									m('tr', [
										m("td",	m("select", {name: "pmd3"})),
										m("td",	m("input.number", {name: "pmd3_nr"}))
									])
								])
							])
						)
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
		$('.date').Zebra_DatePicker(d_options);
		
		// save data
		$("input:text").blur(function () {
			var field = $(this).attr('name');
		})
	},
	view: function () {
		return m("div", [this.header, this.contents]);
	}
}

