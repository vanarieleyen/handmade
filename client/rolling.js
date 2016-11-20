console.log("rolling.js processed");

// the rolling process input page

var rolling_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend.MEASUREMENTS"),
				m("table", {width: "100%", border: "0"}, 
					m("tr", [
						m("td",
							m("table", {width: "100%"}, [
								[
									{label:"label.HANDMADE_DATE", soort:"input.datum", field:"date"},
									{label:"label.PRODUCT", soort:"input", field:"product"},
									{label:"label.SAMPLINGPOINT", soort:"input", field:"name"}
								].map(function (a) {							
									return m("tr", [
													m("td",	m(a.label)),
													m("td",	m(a.soort, {type: "text", name: a.field}))
												])
								})
							])
						),
						m("td",
							m("table", {width: "100%"}, [
								[	{label:"label.BATCH_SCORE", field:"score"},	{label:"label.BATCH_QUALITY", field:"quality"} ].map(function (a) {
									return m("tr", [
													m("td",	m(a.label)),
													m("td",	m("div", {name: a.field}, "--"))
												])
								}),
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
				m("legend.LENGTH"),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [1,2,3,4,5].map(function(n) {
						return m("td",	m("input.number", {name: "l"+n}))
					})), 
					m("tr", [6,7,8,9,10].map(function(n) {
						return m("td",	m("input.number", {name: "l"+n}))
					})),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-l.minichart"))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.HANDMADE_CIRCUMFERENCE"),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [1,2,3,4,5].map(function(n) {
						return m("td",	m("input.number", {name: "d"+n}))
					})), 
					m("tr", [6,7,8,9,10].map(function(n) {
						return m("td",	m("input.number", {name: "d"+n}))
					})),
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
				m("legend.label.WEIGHT"),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [1,2,3,4,5].map(function(n) {
						return m("td",	m("input.number", {name: "w"+n}))
					})), 
					m("tr", [6,7,8,9,10].map(function(n) {
						return m("td",	m("input.number", {name: "w"+n}))
					})),
					m("tr", [
						m("td",	{colspan:"5"}, m("hr"))
					]),
					m("tr", [
						m("td",	{colspan:"5"}, m("#chart-w.minichart"))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.PRESSUREDROP"),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [1,2,3,4,5].map(function(n) {
						return m("td",	m("input.number", {name: "p"+n}))
					})), 
					m("tr", [6,7,8,9,10].map(function(n) {
						return m("td",	m("input.number", {name: "p"+n}))
					})),
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
					[
						{label:"label.SURFACE_OUT", field:"surfout"},
						{label:"label.TIGHTNESS_OUT", field:"tightout"},
						{label:"label.BLEND_ACC", field:"blendacc"},
						{label:"label.PD_ACC", field:"pdacc"}
					].map(function (a) {
						return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
					})
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
		
		// get the current location 
		get_current("gwc_handmade.rolling");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.rolling") == null) {
			$("#rolling input").not("[type=button]").attr("disabled", "disabled");
			$("#rolling textarea").attr("disabled", "disabled");
		}
		
		// display the data
		show_data("rolling");
		
		// save data
		$("#rolling input:text").blur(function () {
			this.current = $.jStorage.get("handmade.current.rolling");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.rolling SET %s="%s" WHERE id=%s', this.field, this.value, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})

		$("#rolling textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.rolling");	
			this.remarks = $("#rolling [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.rolling SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#rolling .new").click(function() {
			new_rec("gwc_handmade.rolling", "#rolling");
			show_data("rolling");
		})

		$('#rolling .next').click(function() {
			next_rec("gwc_handmade.rolling");
			show_data("rolling");
		});
	
		$('#rolling .prev').click(function() {
			prev_rec("gwc_handmade.rolling");
			show_data("rolling");
		});

	},
	view: function () {
		return m("#rolling", [this.header, this.contents]);
	}
}


