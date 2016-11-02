console.log("rolling.js processed");

// the rolling process input pages

var rolling_content = {
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
					m("label.LENGTH")
				),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [
						m("td",	m("input.number", {name: "l1", style: "width:3em"})),
						m("td",	m("input.number", {name: "l2", style: "width:3em"})),
						m("td",	m("input.number", {name: "l3", style: "width:3em"})),
						m("td",	m("input.number", {name: "l4", style: "width:3em"})),
						m("td",	m("input.number", {name: "l5", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "l6", style: "width:3em"})),
						m("td",	m("input.number", {name: "l7", style: "width:3em"})),
						m("td",	m("input.number", {name: "l8", style: "width:3em"})),
						m("td",	m("input.number", {name: "l9", style: "width:3em"})),
						m("td",	m("input.number", {name: "l10", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-l.minichart"))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.HANDMADE_CIRCUMFERENCE")
				),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [
						m("td",	m("input.number", {name: "d1", style: "width:3em"})),
						m("td",	m("input.number", {name: "d2", style: "width:3em"})),
						m("td",	m("input.number", {name: "d3", style: "width:3em"})),
						m("td",	m("input.number", {name: "d4", style: "width:3em"})),
						m("td",	m("input.number", {name: "d5", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "d6", style: "width:3em"})),
						m("td",	m("input.number", {name: "d7", style: "width:3em"})),
						m("td",	m("input.number", {name: "d8", style: "width:3em"})),
						m("td",	m("input.number", {name: "d9", style: "width:3em"})),
						m("td",	m("input.number", {name: "d10", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-d.minichart"))
					])
				])
			])
		),
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.WEIGHT")
				),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [
						m("td",	m("input.number", {name: "w1", style: "width:3em"})),
						m("td",	m("input.number", {name: "w2", style: "width:3em"})),
						m("td",	m("input.number", {name: "w3", style: "width:3em"})),
						m("td",	m("input.number", {name: "w4", style: "width:3em"})),
						m("td",	m("input.number", {name: "w5", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "w6", style: "width:3em"})),
						m("td",	m("input.number", {name: "w7", style: "width:3em"})),
						m("td",	m("input.number", {name: "w8", style: "width:3em"})),
						m("td",	m("input.number", {name: "w9", style: "width:3em"})),
						m("td",	m("input.number", {name: "w10", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-w.minichart"))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend", 
					m("label.PRESSUREDROP")
				),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [
						m("td",	m("input.number", {name: "p1", style: "width:3em"})),
						m("td",	m("input.number", {name: "p2", style: "width:3em"})),
						m("td",	m("input.number", {name: "p3", style: "width:3em"})),
						m("td",	m("input.number", {name: "p4", style: "width:3em"})),
						m("td",	m("input.number", {name: "p5", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	m("input.number", {name: "p6", style: "width:3em"})),
						m("td",	m("input.number", {name: "p7", style: "width:3em"})),
						m("td",	m("input.number", {name: "p8", style: "width:3em"})),
						m("td",	m("input.number", {name: "p9", style: "width:3em"})),
						m("td",	m("input.number", {name: "p10", style: "width:3em"}))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-p.minichart"))
					])
				])
			])
		),
		m("fieldset.fieldset_header", {style: "width:50%"}, [
			m("table", {width: "100%", border: "0"}, [
				m("tr", [
					m("td",	m("label.SURFACE_OUT")),
					m("td",	m("input.number", {name: "surfout", style: "width:3em"})),
					m("td",	m("label.TIGHTNESS_OUT")),
					m("td",	m("input.number", {name: "thightout", style: "width:3em"})),
					m("td",	m("label.BLEND_ACC")),
					m("td",	m("input.number", {name: "blendacc", style: "width:3em"})),
					m("td",	m("label.PD_ACC")),
					m("td",	m("input.number", {name: "pdacc", style: "width:3em"}))
				])
			])
		]),
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
		
		$(".new").click(function() {
			$.getJSON('server/new.php', {	
					nr: 10
				},	function(data) {
					alert(JSON.stringify(data));
			});
		})
		
	},
	view: function () {
		return m("div", [this.header, this.contents]);
	}
}

