
var storage_content = {
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
									{label:"label.IN_CHARGE", soort:"input", field:"incharge"}
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
								[ {label:"label.BATCH_SCORE", field:"score"}, {label:"label.BATCH_QUALITY_OK", field:"quality"} ].map(function (a) {
									return m("tr", [
													m("td",	m(a.label)),
													m("td",	m("div", {name: a.field}, "--"))
												])
								}),
								m("tr", [
									m("td",	m("label.INSPECTOR")),
									m("td",	m("select[name=inspector]"))
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
				m("legend.PROCESSING_DATE"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.START_DATE", field:"start"}, {label:"label.END_DATE", field:"end"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.datum", {name: a.field}))]
						})
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.MOISTURE_LIMITS"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.LOWER_LIMIT", field:"moistmin"}, {label:"label.UPPER_LIMIT", field:"moistmax"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					])
				])
			])
		),
		m("span.flex-row#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.APPEARANCE_QUALITY"),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td", m("label.MILDEW_WORMS")),
						m("td",	{colspan: 3}, m("select", {name: "deworm"}))
					]),
					m("tr", [
						[	{label:"label.HEADEND", field:"headend"},	{label:"label.HEAD_EMPTY", field:"empty"}	].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[	{label:"label.SEAMS", field:"seam"},	{label:"label.HOLES", field:"hole"}	].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					]),
					m("tr", [
						[	{label:"label.DOPANT", field:"dopant"},	{label:"label.CRACKS", field:"break"}	].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.MOISTURE"),
				m("table", {width: "100%", border: "0"}, [
					m("tr", [1,2].map(function(n) {		return m("td",	m("input.number", {name: "m"+n}))		})),
					m("tr", [3,4].map(function(n) {		return m("td",	m("input.number", {name: "m"+n}))		})),
					m("tr", [5,6].map(function(n) {		return m("td",	m("input.number", {name: "m"+n}))		})),
					m("tr", [7,8].map(function(n) {		return m("td",	m("input.number", {name: "m"+n}))		}))
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
			
		// set selectbox options
		$.get('server/get_status.php?lang='+$.jStorage.get("lang"), function(data) {
			$('#storage [name=deworm]').append(data);	
		});		
		
		// get the current location 
		get_current("gwc_handmade.storage");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.storage") == null) {
			$("#storage input").not("[type=button]").attr("disabled", "disabled");
			$("#storage textarea").attr("disabled", "disabled");
		}
		
		// fill the selectbox options
		$.get('server/get_names.php', function(data) {
			$('#storage [name=inspector]').append(data);	
		});
		
		// display the data
		show_data("storage");
		
		// save data
		$("#storage input:text").blur(function () {
			current = $.jStorage.get("handmade.current.storage");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			var sql = sprintf('UPDATE gwc_handmade.storage SET %s="%s" WHERE id=%s', this.field, this.value, current );
			$.getJSON('server/send_query.php', {query: sql}, function (data) {
				$.getJSON('server/calc_scores.php', {
					id: current, 
					table: "storage"
				}, function (data) {
					$("#storage [name=score]").html(data.score);
					$("#storage [name=quality]").html(data.quality);
				});
			});			
		
		})

		$("#storage textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.storage");	
			this.remarks = $("#storage [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.storage SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#storage select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.storage");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.storage SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		})
		
		$("#storage select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.storage");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.storage SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		});
		
		$("#storage .new").click(function() {
			new_rec("gwc_handmade.storage", "#storage");
			show_data("storage");
		})

	
		$('#storage .next').click(function() {
			next_rec("gwc_handmade.storage");
			show_data("storage");
		});
	
		$('#storage .prev').click(function() {
			prev_rec("gwc_handmade.storage");
			show_data("storage");
		});

	},
	view: function () {
		return m("#storage", [this.header, this.contents]);
	}
}

