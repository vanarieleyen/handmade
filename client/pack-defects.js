
var packdefects_content = {
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
									{label:"label.SAMPLING_FREQ", soort:"input", field:"sample"}
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
								m("tr", [
									m("td",	m("label.INSPECTOR")),
									m("td",	m("select[name=inspector]"))
								]),
								m("tr", [
									m("td",	m("label.REMARK")),
									m("td",	m("textarea", {style: "height:3em; width:15em; resize:none", name: "remarks"}))
								])
							])						
						),
						m("td", {valign: "top"},
							m("table", {width: "100%"}, 
								m("tr", [	
									m("td",	m("label.SCORE")),	
									m("td",	m("div[name=score]", "--"))	
								])
							)
						)					
					])
				)
			])			
		)
	],
	contents: [
		m("span.flex-col#data_length", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:97%"}, [
				m("legend.DEFECTS"),
				m("table", {width: "100%"}, [
					m('tr', [
						[	{label:"label.JOBNR", field:"pjob"}, {label:"label.DETERMINATION", field:"judge"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						}),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "premarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend", m("label.PACK_QUALITY")	),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "ppd"+n}), m("span", " "), m("input.number", {name: "ppd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", m("label.PACKING_MARK") ),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "pm"+n}), m("span", " "), m("input.number", {name: "pm"+n+"_nr"}) ])	)
								}))
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

		// fill the selectbox options
		$.get('server/get_defects.php?type=pack pack', function(data) {
			for (var i=1; i<=3; i++)	$('#packDefects [name=ppd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=pack mark', function(data) {
			for (var i=1; i<=3; i++)	$('#packDefects [name=pm'+i+']').append(data);
		});

		// get the current location 
		get_current("gwc_handmade.packDefects");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.packDefects") == null) {
			$("#packDefects input").not("[type=button]").attr("disabled", "disabled");
			$("#packDefects textarea").attr("disabled", "disabled");
			$("#packDefects select").attr("disabled", "disabled");
		}
		
		// fill the selectbox options
		$.get('server/get_names.php', function(data) {
			$('#packDefects [name=inspector]').append(data);	
		});
		
		// display the data
		show_data("packDefects");

		// save data
		$("#packDefects input:text").blur(function () {
			this.current = $.jStorage.get("handmade.current.packDefects");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.packDefects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})

		$("#packDefects textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.packDefects");	
			this.remarks = $("#packDefects [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.packDefects SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#packDefects select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.packDefects");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.packDefects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		});
		
		$("#packDefects .new").click(function() {
			new_rec("gwc_handmade.packDefects", "#packDefects");
			show_data("packDefects");
		})
	
		$('#packDefects .next').click(function() {
			next_rec("gwc_handmade.packDefects");
			show_data("packDefects");
		});
	
		$('#packDefects .prev').click(function() {
			prev_rec("gwc_handmade.packDefects");
			show_data("packDefects");
		});		

	},
	view: function () {
		return m("#packDefects", [this.header, this.contents]);
	}
}

