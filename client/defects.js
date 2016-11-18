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
									m("td",	m("input.datum", {type: "text", name: "date"}))
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
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "srd"+n}), m("span", " "), m("input.number", {name: "srd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.CELLOPHANE")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "scd"+n}), m("span", " "), m("input.number", {name: "scd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.CIGAR_SET")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "ssd"+n}), m("span", " "), m("input.number", {name: "ssd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "spd"+n}), m("span", " "), m("input.number", {name: "spd"+n+"_nr"}) ])	)
								}))
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
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "ppd"+n}), m("span", " "), m("input.number", {name: "ppd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "pm"+n}), m("span", " "), m("input.number", {name: "pm"+n+"_nr"}) ])	)
								}))
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
						m("td",	m("input.number", {name: "bjob"})),
						m("td", m("label.DETERMINATION")),
						m("td",	m("input.number", {name: "bjudge"})),
						m("td",	m("label.REMARK")),
						m("td",	m("textarea", {style: "height:1.5em; width:20em; resize:none", name: "bremarks"})),
						m("td", {colspan: "2"})
					])
				]),
				m("table", {width: "100%"}, [
					m('tr', [
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.SLEEVE_QUALITY")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "bsd"+n}), m("span", " "), m("input.number", {name: "bsd"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.BOX_QUALITY")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "bb"+n}), m("span", " "), m("input.number", {name: "b"+n+"_nr"}) ])	)
								}))
							])
						),
						m("td",	m("fieldset.fieldset_header", [
								m("legend", 
									m("label.PACKING_MARK")
								),
								m("table", {width: "100%"}, [1,2,3].map(function(n) {
									return m('tr', m("td", [m("select", {name: "bm"+n}), m("span", " "), m("input.number", {name: "bm"+n+"_nr"}) ])	)
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
			for (var i=1; i<=3; i++)	$('#defects [name=srd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=stick cel', function(data) {
			for (var i=1; i<=3; i++)	$('#defects [name=scd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=stick set', function(data) {
			for (var i=1; i<=3; i++)	$('#defects [name=ssd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=pack pack', function(data) {
			for (var i=1; i<=3; i++)	$('#defects [name=ppd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=sleeve', function(data) {
			for (var i=1; i<=3; i++)	$('#defects [name=bsd'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=box box', function(data) {
			for (var i=1; i<=3; i++)	$('#defects [name=bb'+i+']').append(data);	
		});
		$.get('server/get_defects.php?type=pack mark', function(data) {
			for (var i=1; i<=3; i++) {
				$('#defects [name=spd'+i+']').append(data);	
				$('#defects [name=pm'+i+']').append(data);
				$('#defects [name=bm'+i+']').append(data);
			}
		});

		// get the current location 
		get_current("gwc_handmade.defects");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.defects") == null) {
			$("#defects input").not("[type=button]").attr("disabled", "disabled");
			$("#defects textarea").attr("disabled", "disabled");
			$("#defects select").attr("disabled", "disabled");
		}
		
		// display the data
		show_data("defects");

		// save data
		$("#defects input:text").blur(function () {
			this.current = $.jStorage.get("handmade.current.defects");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.defects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})

		$("#defects textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.defects");	
			this.remarks = $("#defects [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.defects SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#defects select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.defects");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.defects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		});
		
		$("#defects .new").click(function() {
			new_rec("gwc_handmade.defects", "#defects");
			show_data("defects");
		})
	
		$('#defects .next').click(function() {
			next_rec("gwc_handmade.defects");
			show_data("defects");
		});
	
		$('#defects .prev').click(function() {
			prev_rec("gwc_handmade.defects");
			show_data("defects");
		});		

	},
	view: function () {
		return m("#defects", [this.header, this.contents]);
	}
}

