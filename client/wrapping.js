console.log("rolling.js processed");

// the rolling process input page

var wrapping_content = {
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
				m("legend.WRAPPING_FINISH"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.INCISSION", field:"incision"}, {label:"label.HEAD_EMPTY", field:"empty"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[	{label:"label.SEAMS", field:"seam"}, {label:"label.HOLES", field:"hole"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.WRAPPER_INTEGRITY"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.TIGHTNESS", field:"tightness"},	{label:"label.VEIN_LINES", field:"veins"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[	{label:"label.CRACKS", field:"crack"}, {label:"label.SPLICES", field:"splice"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					])
				])
			])
		),
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.CIGAR_APPEARANCE"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.WRAPPER_COLOR", field:"color"}, {label:"label.HEADEND", field:"headend"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[	{label:"label.WRAPPED_OK", field:"wrapok"},	{label:"label.CREASE", field:"crease"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[ {label:"label.SPOTS", field:"spot"}, {label:"label.BLOTS", field:"blot"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
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
	
		// get the current location 
		get_current("gwc_handmade.wrapping");
		
		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.wrapping") == null) {
			$("#wrapping input").not("[type=button]").attr("disabled", "disabled");
			$("#wrapping textarea").attr("disabled", "disabled");
		}	
		
		// display the data
		show_data("wrapping");
		
		// save data
		$("#wrapping input:text").blur(function () {
			current = $.jStorage.get("handmade.current.wrapping");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			var sql = sprintf('UPDATE gwc_handmade.wrapping SET %s="%s" WHERE id=%s', this.field, this.value, current );
			$.getJSON('server/send_query.php', {query: sql}, function (data) {
				$.getJSON('server/calc_scores.php', {
					id: current, 
					table: "wrapping"
				}, function (data) {
					$("#wrapping [name=score]").html(data.score);
					$("#wrapping [name=quality]").html(data.quality);
				});
			});	
		})

		$("#wrapping textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.wrapping");	
			this.remarks = $("#wrapping [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.wrapping SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#wrapping .new").click(function() {
			new_rec("gwc_handmade.wrapping", "#wrapping");
			show_data("wrapping");
		})
		
		$('#wrapping .next').click(function() {
			next_rec("gwc_handmade.wrapping");
			show_data("wrapping");
		});
	
		$('#wrapping .prev').click(function() {
			prev_rec("gwc_handmade.wrapping");
			show_data("wrapping");
		});


	},
	view: function () {
		return m("#wrapping", [this.header, this.contents]);
	}
}

