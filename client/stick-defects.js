
var stickdefects_content = {
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
									m("td",	m("input", {type: "text", name: "inspector"}))
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
						[	{label:"label.JOBNR", field:"sjob"}, {label:"label.DETERMINATION", field:"judge"} ].map(function (a) {
							return [m("td",	m(a.label)), m("td",	m("input.number", {name: a.field}))]
						}),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "sremarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend.RING"),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "srd"+n}), m("span", " "), m("input.number", {name: "srd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend.CELLOPHANE"),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "scd"+n}), m("span", " "), m("input.number", {name: "scd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend.CIGAR_SET"),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "ssd"+n}), m("span", " "), m("input.number", {name: "ssd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend.PACKING_MARK"),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "spd"+n}), m("span", " "), m("input.number", {name: "spd"+n+"_nr"}) ])	)
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
		$.get('server/get_defects.php?type=stick ring', function(data) {
			for (var i=1; i<=3; i++)	$('#stickDefects [name=srd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=stick cel', function(data) {
			for (var i=1; i<=3; i++)	$('#stickDefects [name=scd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=stick set', function(data) {
			for (var i=1; i<=3; i++)	$('#stickDefects [name=ssd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=pack mark', function(data) {
			for (var i=1; i<=3; i++) $('#stickDefects [name=spd'+i+']').append(data);	
		});

		// get the current location 
		get_current("gwc_handmade.stickDefects");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.stickDefects") == null) {
			$("#stickDefects input").not("[type=button]").attr("disabled", "disabled");
			$("#stickDefects textarea").attr("disabled", "disabled");
			$("#stickDefects select").attr("disabled", "disabled");
		}
		
		// display the data
		show_data("stickDefects");

		// save data
		$("#stickDefects input:text").blur(function () {
			this.current = $.jStorage.get("handmade.current.stickDefects");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.stickDefects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})

		$("#stickDefects textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.stickDefects");	
			this.remarks = $("#stickDefects [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.stickDefects SET type=0, remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#stickDefects select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.stickDefects");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.stickDefects SET type=0, %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		});
		
		$("#stickDefects .new").click(function() {
			new_rec("gwc_handmade.stickDefects", "#stickDefects");
			show_data("stickDefects");
		})
	
		$('#stickDefects .next').click(function() {
			next_rec("gwc_handmade.stickDefects");
			show_data("stickDefects");
		});
	
		$('#stickDefects .prev').click(function() {
			prev_rec("gwc_handmade.stickDefects");
			show_data("stickDefects");
		});		

	},
	view: function () {
		return m("#stickDefects", [this.header, this.contents]);
	}
}

