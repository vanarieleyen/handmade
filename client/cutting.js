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
									m("td",	m("input.datum", {type: "text", name: "date"}))
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
						m("td",	m("input.number", {name: "crack"}))
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
		
		// get the current location 
		get_current("gwc_handmade.cutting");
		
		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.gwc_handmade.cutting") == null) {
			$("#cutting input").not("[type=button]").attr("disabled", "disabled");
			$("#cutting textarea").attr("disabled", "disabled");
		}	
		
		// display the data
		show_data("cutting");
		
		// save data
		$("#cutting input:text").blur(function () {
			this.current = $.jStorage.get("handmade.current.cutting");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.cutting SET %s="%s" WHERE id=%s', this.field, this.value, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})

		$("#cutting textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.cutting");	
			this.remarks = $("#cutting [name=remarks]").val();
			
			sql = sprintf('UPDATE gwc_handmade.cutting SET remarks="%s" WHERE id=%s', this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#cutting .new").click(function() {
			new_rec("gwc_handmade.cutting", "#cutting");
			show_data("cutting");
		})
		
		$('#cutting .next').click(function() {
			next_rec("gwc_handmade.cutting");
			show_data("cutting");
		});
	
		$('#cutting .prev').click(function() {
			prev_rec("gwc_handmade.cutting");
			show_data("cutting");
		});

	},
	view: function () {
		return m("#cutting", [this.header, this.contents]);
	}
}

