
var specs_content = {
	contents: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("span.flex-col", [
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.PRODUCT"),
					m("table", {width: "100%"}, [
						[ {label:"label.NAME", field:"name"}, {label:"label.PRODNR", field:"nr"} ].map(function (a) {
							return m("tr", [
											m("td",	m(a.label)),
											m("td",	m("input[type=text]", {name: a.field}))
										])
						})
					])
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.ROLLING_PROCESS"),						
					m("table", {width: "100%"}, [
						m("tr", {align: "center"}, [
							m("td",	m("label.LENGTH")),
							m("td",	m("input[type=text].number", {name: "rol_l_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_l_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.CIRCUMFERENCE")),
							m("td",	m("input[type=text].number", {name: "rol_c_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_c_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.WEIGHT")),
							m("td",	m("input[type=text].number", {name: "rol_w_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_w_max"}))
						]),
						m("tr", {align: "center"}, [
							m("td",	m("label.PRESSUREDROP")),
							m("td",	m("input[type=text].number", {name: "rol_p_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "rol_p_max"}))
						]),
						[	
							{label:"label.SURFACE_OUT", field:"rol_surfout"},	
							{label:"label.TIGHTNESS_OUT", field:"rol_tightout"},	
							{label:"label.BLEND_ACC", field:"rol_blendacc"},	
							{label:"label.PD_ACC", field:"rol_pdacc"} 
						].map(function (a) {
							return m("tr",  {align: "center"}, [
											m("td",	m(a.label)),
											m("td",	{colspan: "3"}, m("input[type=text].number", {name: a.field}))
										])
						})
					])
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.WRAPPING_PROCESS"),
					m("div", {style: "height: 4em"})
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.MACHINE_CUTTING"),
					m("div", {style: "height: 4em"})
				]),
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.STORAGE_PROCESS"),
					m("div"),
					m("table", {width: "100%"}, [
						m("tr", {align: "center"}, [
							m("td",	m("label.MOISTURE")),
							m("td",	m("input[type=text].number", {name: "moist_s_min"})),
							m("td",	 m("hr")),
							m("td",	m("input[type=text].number", {name: "moist_s_max"}))
						])
					])
				])
			]),
			m("span.flex-col#data_header",
				m("fieldset.fieldset_header", {style: "width:95%"}, [
					m("legend.PRODUCT"),
					m("div", {style: "height:20em; overflow:auto"}, 
						m("table#products", {width: "100%"}, [
							m("thead.header", {valign: "top"}, [
								m("th", "ID"),
								m("th", m("label.PRODUCT")),
								m("th", m("label.SPECSNR"))
							]),
							m("tbody")					
						])
					),
					m("div", {style: "height:10em; overflow:auto"}, 
						m("table#history", {width: "100%"}, [
							m("thead.header", {valign: "top"}, [
								m("th", "ID"),
								m("th", m("label.START_DATE")),
								m("th", m("label.END_DATE"))
							]),
							m("tbody")					
						])
					)
				])
			)
		),
		m("div.buttonrow", [
			m("input[type=button].save", {tabindex:"-1"}),
			m("input[type=button].new", {tabindex:"-1"}),
			m("span", [
				m("input[type=checkbox].toggle"),
				m("input[type=button].delete", {tabindex:"-1", disabled:"disabled"})
			])
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
			
		// get the first spec
		get_current("gwc_handmade.specs");

		// no records found - disable all input fields
		if ($.jStorage.get("handmade.current.specs") == null) {
			$("#specs input").not("[type=button]").attr("disabled", "disabled");
			$("#specs textarea").attr("disabled", "disabled");
		}
		
		// display the data
		show_data("specs");
		
		// new spec
		$("#specs .new").click(function() {
			new_rec("gwc_handmade.specs", "#specs");
			show_specs();
		})		
		
		// save the data
		$("#specs .save").click(function() {
			var id = $.jStorage.get("handmade.current.specs");
			var name = $("#specs [name=name]").val();
			var nr = $("#specs [name=nr]").val();
			var rol_l_min = $("#specs [name=rol_l_min]").val();
			var rol_l_max = $("#specs [name=rol_l_max]").val();
			var rol_c_min = $("#specs [name=rol_c_min]").val();
			var rol_c_max = $("#specs [name=rol_c_max]").val();
			var rol_w_min = $("#specs [name=rol_w_min]").val();
			var rol_w_max = $("#specs [name=rol_w_max]").val();
			var rol_p_min = $("#specs [name=rol_p_min]").val();
			var rol_p_max = $("#specs [name=rol_p_max]").val();
			var moist_s_min = $("#specs [name=moist_s_min]").val();
			var moist_s_max = $("#specs [name=moist_s_max]").val();
			var rol_blendacc = $("#specs [name=rol_blendacc]").val();
			var rol_pdacc = $("#specs [name=rol_pdacc]").val();
			var rol_surfout = $("#specs [name=rol_surfout]").val();
			var rol_tightout = $("#specs [name=rol_tightout]").val();
		
			$.getJSON('server/get_record.php', { 
				query: 'SELECT * FROM gwc_handmade.specs WHERE id='+id
			}, function(data) {
				var pid = data.pid;
				if (data.pid != -1) {		// de specs zijn al eens opgeslagen
					$.getJSON('server/send_query.php', {
						query: sprintf("UPDATE gwc_handmade.specs SET end=NOW() WHERE id=%s",	id)		// terminate the end-date	
					}, function () {
						new_rec("gwc_handmade.specs", "#specs");
						id = $.jStorage.get("handmade.current.specs");
					});						
				} else {
					pid = data.id;
				}
				
				// opm: moet misschien vertraagd worden aangeroepen omdat id van new_rec nog niet binnen is.....
				var sql = sprintf("UPDATE gwc_handmade.specs SET pid='%s', name='%s', nr='%s', rol_l_min='%s', rol_l_max='%s', rol_c_min='%s', rol_c_max='%s', \
					rol_w_min='%s', rol_w_max='%s', moist_s_min='%s', moist_s_max='%s', rol_surfout='%s', rol_tightout='%s', rol_p_min='%s', rol_p_max='%s', rol_blendacc='%s', rol_pdacc='%s' \
					WHERE id=%s",	pid, name, nr, rol_l_min, rol_l_max, rol_c_min, rol_c_max, rol_w_min, rol_w_max, moist_s_min, moist_s_max, 
												rol_surfout, rol_tightout, rol_p_min, rol_p_max, rol_blendacc, rol_pdacc, id);
				$.getJSON('server/send_query.php', {	query: sql	});	
			});
			
			show_specs();
		})
		
		// select a product from the specifications list
		$('#specs #products tbody').on('click', 'td', function(e) {		
			$("#specs #products tbody tr").removeClass('row_selected');
			$(this).parent().addClass('row_selected');	// select the new row	
			
			// fill the spec history in the second list
			show_spec_history($(this).parent().find("td:first").text());
		});	
		
		// select a specification from the history
		$('#specs #history tbody').on('click', 'td', function(e) {		
			$("#specs #history tbody tr").removeClass('row_selected');
			$(this).parent().addClass('row_selected');	// select the new row	
			
			// display all the details of the selected specification
			show_spec_details($(this).parent().find("td:first").text());
		});	
		
		// enable/disable the delete button
		$('#specs .toggle').on('click', function(e) {		
			var state = $(this).prop('checked');
			if (state)
				$('#specs .delete').removeAttr('disabled');	
			else
				$('#specs .delete').attr('disabled', 'disabled');
		});	
		
		// delete a product (and its history)
		$('#specs .delete').on('click', function(e) {		
			var id = $("#specs #products .row_selected").parent().find("td:first").text();

			$.getJSON('server/get_record.php', {
				query: "SELECT pid FROM gwc_handmade.specs WHERE id="+id		
			}, function (data) {
				$.getJSON('server/send_query.php', {
					query: "DELETE FROM gwc_handmade.specs WHERE pid="+data.pid	
				}, function () {
					$('#specs .delete').attr('disabled', 'disabled');
					show_specs();
				});
			});	
		});	
		
	},
	view: function () {
		return m("#specs", {config: show_specs}, this.contents);
	}
}

