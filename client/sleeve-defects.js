
var sleevedefects_content = {
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
		m("span.flex-row", {style: "width:100%"}, [	
			m("span.flex-col", {style: "width:33%"}, 
				m("fieldset.fieldset_header", [
					m("legend.SLEEVE_QUALITY"),
					m("table", {width: "100%"}, [
						[	{label:"label.JOBNR", field:"bjob1"}, {label:"label.DETERMINATION", field:"bdet1"} ].map(function (a) {
								return [m("tr", m("td",	m(a.label)), m("td",	m("input.number", {name: a.field})))]
						}),
						m('tr', m('td.REMARK', {colspan: "2"})),
						m('tr', m("td",	{colspan: "2"}, m("textarea", {style: "height:3em; width:100%; resize:none", name: "brem1"})) )
					]),
					m("hr"),
					m("fieldset.fieldset_header", [
						m("legend.DEFECTS"),
						m("table", {width: "100%"}, [1,2,3].map(function(n) {
							return m('tr', {style:"height:2em"}, m("td", [
									m("select", {name: "bsd"+n, style:"width:11em"}), 
									m("span", " "), 
									m("input.number", {name: "bsd"+n+"_nr"}) 
								]))
						}))
					]),
					m("hr"),
					m("fieldset.fieldset_header", [
						m("legend.PACKING_MARK"),
						m("table", {width: "100%"}, [1,2,3].map(function(n) {
							return m('tr', {style:"height:2em"}, m("td", [
								m("select", {name: "bpd_a"+n, style:"width:11em"}), 
								m("span", " "), 
								m("input.number", {name: "bpd_a"+n+"_nr"}) ]))
						}))
					]),
					m("div", {style: "height:1em"}, " ")
				])
			),	
			m("span.flex-col", {style: "width:33%"}, 
				m("fieldset.fieldset_header", [
					m("legend.BOX_QUALITY"),
					m("table", {width: "100%"}, [
						[	{label:"label.JOBNR", field:"bjob2"}, {label:"label.DETERMINATION", field:"bdet2"} ].map(function (a) {
								return [m("tr", m("td",	m(a.label)), m("td",	m("input.number", {name: a.field})))]
						}),
						m('tr', m('td.REMARK', {colspan: "2"})),
						m('tr', m("td",	{colspan: "2"}, m("textarea", {style: "height:3em; width:100%; resize:none", name: "brem2"})) )
					]),
					m("hr"),
					m("fieldset.fieldset_header", [
						m("legend.DEFECTS"),
						m("table", {width: "100%"}, [1,2,3].map(function(n) {
							return m('tr', {style:"height:2em"}, m("td", [
									m("select", {name: "bb"+n, style:"width:11em"}), 
									m("span", " "), 
									m("input.number", {name: "bb"+n+"_nr"}) 
								]))
						}))
					]),
					m("hr"),
					m("fieldset.fieldset_header", [
						m("legend.PACKING_MARK"),
						m("table", {width: "100%"}, [1,2,3].map(function(n) {
							return m('tr', {style:"height:2em"}, m("td", [
								m("select", {name: "bpd_b"+n, style:"width:11em"}), 
								m("span", " "), 
								m("input.number", {name: "bpd_b"+n+"_nr"}) ]))
						}))
					]),
					m("div", {style: "height:1em"}, " ")
				])
			),
			m("span.flex-col", {style: "width:33%"}, [
				m("fieldset.fieldset_header", [
					m("legend.HISTORY"),
					m("div", {style: "height:22em; overflow:auto"},
						m("table#lijst", {width: "99%"}, [
							m("thead.header", {style:"cursor:hand"}, [
								m("th", {style:"display:none"}, m("label", "ID")),
								["th.DATE","th.SAMPLING_FREQ","th.FINISHED.underline"].map(function (label, idx) {
									return m(label, {nr:idx});
								})
							]),
							m("tbody")		// the lines in the list
						])
					),
					m("div.buttonrow", [
						m("input[type=button].prevpage", {value: " <<< ", tabindex:"-1"}),
						m("input[type=button].nextpage", {value: " >>> ", tabindex:"-1"})
					])
				])
			])
		])
	],
	buttons: [
		m("div.buttonrow", [
			m("input[type=button].prev", {value: " <<< ", tabindex:"-1"}),
			m("input[type=button].next", {value: " >>> ", tabindex:"-1"}),
			m("input[type=button].new", {tabindex:"-1"}),
			m("input[type=button].finishedbutton", {tabindex:"-1"})
		])	
	],	
	controller: function (element, isInitialized) {		// only events and initialisation
		if (isInitialized) 
			return;

		$("#boxDefects [name=bpd_b3_nr]").addClass("last");		// set the last field
		
		// save data
		$("#boxDefects input:text").blur(function () {
			current = $.jStorage.get("handmade.current.boxDefects");	
			this.field = $(this).attr('name');
			this.value = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.boxDefects SET %s="%s" WHERE id=%s', this.field, this.value, current );
			$.getJSON('server/send_query.php', {query: sql}, function () {		// color the fields
				$.getJSON('server/calc_scores.php', {
					id: current, 
					table: "boxDefects"
				}, function (data) {			
					var sum = 0;
					var allowed = 7;		// maximum allowed faults
					var fields = ["sleeveAmount","boxAmount","packAmount_a","packAmount_b"];
					
					$("#boxDefects [name=score]").html(data.score);
					
					fields.map(function(label){
						db.boxDefects[label].field.map(function(field) {
							var el = $("#boxDefects [name="+field+"]");
							var val = el.val();
							sum += (val.trim()=="") ? 0 : parseInt(val);
						});
					});
					fields.map(function(label){
						db.boxDefects[label].field.map(function(field) {
							setColor("#boxDefects", field, Math.max(Math.min(allowed-sum+1, allowed+1), 0.1));
						});
					});
					show_statuslist("#boxDefects");
				});
			});	
		})

		$("#boxDefects textarea").blur(function () {
			this.current = $.jStorage.get("handmade.current.boxDefects");	
			this.field = $(this).attr('name');
			this.remarks = $(this).val();
			
			sql = sprintf('UPDATE gwc_handmade.boxDefects SET %s="%s" WHERE id=%s', this.field, this.remarks, this.current );
			$.getJSON('server/send_query.php', {	query: sql	});			
		})
		
		$("#boxDefects select").on("blur", function () {
			this.current = $.jStorage.get("handmade.current.boxDefects");
			this.field = $(this).attr('name');
			this.value = $(this).val();

			sql = sprintf('UPDATE gwc_handmade.boxDefects SET %s="%s" WHERE id=%s', this.field, this.value, this.current );	
			$.getJSON('server/send_query.php', {	query: sql	});	
		});
		
		$("#boxDefects .new").click(function() {
			new_rec("gwc_handmade.boxDefects", "#defects");
			show_statuslist("#boxDefects");
		})
	
		$('#boxDefects .next').click(function() {
			next_rec("gwc_handmade.boxDefects");
		});
	
		$('#boxDefects .prev').click(function() {
			prev_rec("gwc_handmade.boxDefects");
		});		

		$("#boxDefects .finishedbutton").click(function() {
			var color = ["red", "orange", "green"];
			var status = parseInt($(this).attr("status"));
			
			status = isNaN(status) ? 0 : status+1;
			if (status > 2)	status = 0;
			$(this).css({"color": color[status]});
			$(this).attr("status", status);
			
			sql = sprintf('UPDATE gwc_handmade.boxDefects SET status="%s" WHERE id=%s', status, $.jStorage.get("handmade.current.boxDefects") );	
			$.getJSON('server/send_query.php', {	query: sql	});	
			
			show_statuslist("#boxDefects");
		})

		// all status history events
		
		$('#boxDefects #lijst tbody').on('click', 'td', function(e) {		// open the selected row
			var id = parseInt($(this).parent().find("td:first").text());
			var table = $.jStorage.get("handmade_lasttab").split('_')[0];
			
			if (table=="defects") // defects are split into different tables
				table = Array("stickDefects", "packDefects", "boxDefects")[$.jStorage.get("handmade_defectstab")];

			$.jStorage.set("handmade.current."+table, id);
			show_data(table);		// update the data in the tab before it is selected
		});

		$("#boxDefects .prevpage").click(function () {
			var options = $.jStorage.get("handmade.statuslist");
			
			$.getJSON("server/list_status.php",	{
				lang: options.lang,
				page: options.page+1,
				sort: options.sort,
				length: options.length,
				direction: options.direction,
				tab: $.jStorage.get("handmade_lasttab"),
				defects: $.jStorage.get("handmade_defectstab")
			}, function(data) {
				if (data.crc != options.crc && data.count>0) {
					options.crc = data.crc;
					options.page++;
					$.jStorage.set("handmade.statuslist", options);
					$('#boxDefects #lijst tbody').empty();
					$.each(data.records, function (key, regel) {
						$('#boxDefects #lijst tbody').append(regel);
					});
				}
			})
		});
		
		$("#boxDefects .nextpage").click(function () {
			var options = $.jStorage.get("handmade.statuslist");
			
			$.getJSON("server/list_status.php",	{
				lang: options.lang,
				page: options.page<1 ? 0 : options.page-1,
				sort: options.sort,
				length: options.length,
				direction: options.direction,
				tab: $.jStorage.get("handmade_lasttab"),
				defects: $.jStorage.get("handmade_defectstab")
			}, function(data) {
				if (data.crc != options.crc && data.count>0) {
					options.crc = data.crc;
					options.page--;
					$.jStorage.set("handmade.statuslist", options);
					$('#boxDefects #lijst tbody').empty();
					$.each(data.records, function (key, regel) {
						$('#boxDefects #lijst tbody').append(regel);
					});
				}	
			})	
		});
		
		// sorteer een kolom
		$("#boxDefects").on('click', 'th', function () {
			var options = $.jStorage.get("handmade.statuslist");
			options.sort = $(this).attr("nr");
			options.direction = (options.direction == "ASC") ? "DESC" : "ASC";
			options.page = 0;
			options.crc = "";

			// update sort indicator....
			$(this).parent().find("th").each(function () {
				$(this).removeClass("underline");
				$(this).find('.arrow').remove();
				if ($(this).attr("nr")==options.sort) {
					$(this).addClass("underline");
					if (options.direction == "ASC") 
						$(this).append("<span class='arrow'> &#9650;</span>");
					else
						$(this).append("<span class='arrow'> &#9660;</span>");
				}
			})

			// get the data
			$.getJSON("server/list_status.php",	{
				lang: options.lang,
				page: options.page,
				sort: options.sort,
				length: options.length,
				direction: options.direction,
				tab: $.jStorage.get("handmade_lasttab"),
				defects: $.jStorage.get("handmade_defectstab")
			}, function(data) {
				$.jStorage.set("handmade.statuslist", options);
				$('#boxDefects #lijst tbody').empty();
				$.each(data.records, function (key, regel) {
					$('#boxDefects #lijst tbody').append(regel);
				})
			})	
		});	

	},
	view: function () {
		return m("#boxDefects", [this.header, this.contents, this.buttons]);
	}
}

