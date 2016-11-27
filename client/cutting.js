
var cutting_content = {
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
									{label:"label.PRODUCT", soort:"select", field:"product"},
									{label:"label.SAMPLINGPOINT", soort:"select", field:"name"}
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
				m("legend.WRAPPING_FINISH"),
				m("table", {width: "100%"}, [
					m("tr", [
						[	{label:"label.CREASE", field:"crease"},	{label:"label.BLOTS", field:"blot"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						})
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:50%"}, [
				m("legend.WRAPPER_INTEGRITY"),
				m("table", {width: "100%"}, [
					m("tr", [
						[ {label:"label.SEAMS", field:"seam"}, {label:"label.CRACKS", field:"crack"} ].map(function (a) {
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
						[
							{label:"label.HEADEND", field:"headend"},
							{label:"label.INCISSION", field:"incision"},
							{label:"label.HEAD_EMPTY", field:"empty"}
						].map(function (a) {
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
		get_current("gwc_handmade.cutting");
		
		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.cutting") == null) {
			$("#cutting input").not("[type=button]").attr("disabled", "disabled");
			$("#cutting textarea").attr("disabled", "disabled");
		}	
		
		// fill the selectbox options
		$.getJSON('server/get_names.php', function(data) {
			$('#cutting [name=inspector]').append(data.inspectors);	
			$('#cutting [name=name]').append(data.sampling);	
		});
		$.get('server/get_products.php', function(data) {
			$('#cutting [name=product]').append(data);	
		});
		
		// display the data
		show_data("cutting");
		
		// save data
		$("#cutting input:text").blur(function () {
			current = $.jStorage.get("handmade.current.cutting");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			var sql = sprintf('UPDATE gwc_handmade.cutting SET %s="%s" WHERE id=%s', this.field, this.value, current );
			$.getJSON('server/send_query.php', {query: sql}, function (data) {
				$.getJSON('server/calc_scores.php', {
					id: current, 
					table: "cutting"
				}, function (data) {
					$("#cutting [name=score]").html(data.score);
					$("#cutting [name=quality]").html(data.quality);
				});
			});			
		})

		$("#cutting textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.cutting");	
			this.remarks = $("#cutting [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.cutting SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#cutting select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.cutting");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.cutting SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		})
		
		$("#cutting .new").click(function() {
			new_rec("gwc_handmade.cutting", "#cutting");
		})
		
		$('#cutting .next').click(function() {
			next_rec("gwc_handmade.cutting");
		});
	
		$('#cutting .prev').click(function() {
			prev_rec("gwc_handmade.cutting");
		});

	},
	view: function () {
		return m("#cutting", [this.header, this.contents]);
	}
}

