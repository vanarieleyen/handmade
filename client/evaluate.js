
var evaluate_content = {
	contents: [
		m("div#evaluate", [
			m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, [
				m("fieldset.fieldset_header", {style: "width:40%"}, [
					m("legend.SELECT"),
					m("table", {width: "100%"}, [
						[	{label:"label.START_DATE", name:"start"},	{label:"label.END_DATE", name:"end"} ].map(function (a) {							
							return m("tr", [
											m("td",	m(a.label)),
											m("td",	m("input.datum[type:text]", {name: a.name}))
										])
						}),
						[
							{label:"label.STAGE", name:"stage"},
							{label:"label.PRODUCT", name:"product"},
							{label:"label.SAMPLINGPOINT", name:"sampling"}
						].map(function (a) {							
							return m("tr", [
											m("td",	m(a.label)),
											m("td",	m("select", {name: a.name}))
										])
						})
					])
				]),
				m("fieldset.summaries", {style: "width:60%"}, [
					m("legend.SUMMARY"), [
						m("table#rolling", {width: "100%", border: "0", style: "display:none"},
							m("tr", {style: "background-color: rgba(0,0,0,0.1)"}, 
								["", "AMOUNT", "CPK", "AVG", "DEVIATION", "VARIANCE", "OUTSPEC"].map(function(label) {
									return m("th."+label)
								})
							),
							[	{label:".LENGTH", field:"lengte"}, {label:".HANDMADE_CIRCUMFERENCE", field:"omtrek"}, 
								{label:".WEIGHT", field:"gewicht"}, {label:".PRESSUREDROP", field:"pd"}
							].map(function(a) {
								return m("tr", {name: a.field}, [
									m("td"+a.label),
									["amount", "cpk", "avg", "dev", "var", "out"].map(function(label) {
										return m("th", {name: label})
									})
								])
							})				
						),
						m("table#wrapping", {width: "100%", border: "0", style: "display:none"},
							m("tr", {style: "background-color: rgba(0,0,0,0.1)"}, 
								["", "AMOUNT", "CPK", "AVG", "DEVIATION", "VARIANCE", "OUTSPEC"].map(function(label) {
									return m("th."+label)
								})
							),
							[ {label:".MOISTURE", field:"moisture"}, {label:".WEIGHT", field:"weight"}
							].map(function(a) {
								return m("tr", {name: a.field}, [
									m("td"+a.label),
									["amount", "cpk", "avg", "dev", "var", "out"].map(function(label) {
										return m("th", {name: label})
									})
								])
							})				
						),
						m("table#storage", {width: "100%", border: "0", style: "display:none"},
							m("tr", {style: "background-color: rgba(0,0,0,0.1)"}, 
								["", "AMOUNT", "CPK", "AVG", "DEVIATION", "VARIANCE", "OUTSPEC"].map(function(label) {
									return m("th."+label)
								})
							),
							[ {label:".MOISTURE", field:"moisture"} 
							].map(function(a) {
								return m("tr", {name: a.field}, [
									m("td"+a.label),
									["amount", "cpk", "avg", "dev", "var", "out"].map(function(label) {
										return m("th", {name: label})
									})
								])
							})				
						)
					]
				])				
			]),
		]),
		m("#evaltabs.subtabs1", [
			m("ul", [
				[
					{label:"label.CHARTS", href:"#charts_tab"},
					{label:"label.CONTROLCHARTS", href:"#control_tab"}
				].map(function (a) {
					return m("li", 
									m("a", {href: a.href, tabindex:"-1", class: "last" }, [
										m(a.label)
									])
								)
				})
			]),
			[			// the tabs used by ui-tabs
				m("#charts_tab", m.component(charts_content)),
				m("#control_tab", m.component(control_content))
			]
		])
	],
	controller: function (element, isInitialized) {		// only events and initialisation
		if (isInitialized) 
			return;
			
		// todo: set the last field
		$("#evaluate [name=empty]").addClass("last");		// set the last field

		// default tab when page is first loaded
		var initialtab = $.jStorage.get("handmade_evaluationtab");

		$( "#evaltabs" ).tabs({
			active: initialtab,
			activate: function( event, ui ) {
				keus = ui.newPanel[0].id;
				switch (keus) {
					case "charts_tab":			
						$.jStorage.set("handmade_evaluationtab", 0);
						break;
					case "control_tab": 	
						$.jStorage.set("handmade_evaluationtab", 1);
						break;
				}
			},
			create: function( event, ui ) {
				show_evaluation();
			}
		});

		var nu = new Date();
		$('#evaluate [name=start]').val(nu.format("yyyy-MM-dd") );
		$('#evaluate [name=end]').val(nu.format("yyyy-MM-dd") );

		$("#evaluate select").change(function () {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var product = $("#evaluate [name=product]").val();
			var sampling = $("#evaluate [name=sampling]").val();
			var stage = $("#evaluate [name=stage]").val();
			
			//console.log('eval select change');
			$("#evaluate .summaries th[name]").each(function () {
				$(this).text("");		// clear all summaries
			});
			
			// fill the selectbox options
			$.getJSON('server/get_evalselect.php', {
				start: start,
				end: end,
				prod: product,
				samp: sampling,
				step: stage,
				lang: $.jStorage.get("lang")
			},function(data) {	
				$('#evaluate [name=sampling]').empty().append(data.sampling);	
				$('#evaluate [name=product]').empty().append(data.product);
				
				$.get('server/get_choice.php?lang='+$.jStorage.get("lang")+"&stage="+stage, function(data) {$('#charts #choice1').empty().append(data);	});
				$.get('server/get_choice.php?lang='+$.jStorage.get("lang")+"&stage="+stage, function(data) {$('#charts #choice2').empty().append(data);	});	

				$("#evaluate .summaries table").css("display","none");		// hide all summaries
				switch (stage) {
					case 'rolling': $("#evaluate #rolling").show();
						break;
					case 'wrapping': $("#evaluate #wrapping").show();
						break;
					case 'storage': $("#evaluate #storage").show();
						break;
				}
				showSummary();
				
				if (stage != '0') {
					var pSelect = (product != '0') ? " AND product='"+product+"'" : "";
					var sSelect = (sampling != '0') ? " AND name='"+sampling+"'" : "";
					var sql = sprintf("SELECT * FROM gwc_handmade.%s WHERE (DATE(date) BETWEEN '%s' AND '%s') %s %s ORDER BY date",
											stage, start, end, pSelect, sSelect);
					$.ajax({
				   	type: "GET",
				    url: "server/get_range.php",
					  contentType: "application/x-www-form-urlencoded",
					  async: true,
				   	data: {query: sql},
				   	dataType: 'json',
				   	beforeSend: spin,	// start the spinner
						success: function(data) {
							$.jStorage.set("handmade_rawdata", data);
							draw_controlchart();
							draw_chart("1");
							draw_chart("2");									
						}
					});
				}
			});


		})
		
	},
	view: function () {
		return m("div", this.contents);
	}
}