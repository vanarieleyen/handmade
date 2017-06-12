
var history_content = {
	contents: [
		m("div", {style: "height:33em; overflow:auto"},
			m("table#lijst", {width: "99%"}, [
				m("thead.header", {style:"cursor:hand"}, [
					m("th", {style:"display:none"}, m("label", "ID")),
						["th.DATE.underline","th.PRODUCT","th.SAMPLINGPOINT","th.BATCH_SCORE","th.BATCH_QUALITY","th.INSPECTOR","th.FINISHED"].map(function (label, idx) {
							return m(label, {nr:idx});
						})					
					]),
					m("tbody")		// the lines in the list
				])
		),
		m("div.buttonrow", [
			m("input[type=button].prev", {value: " <<< ", tabindex:"-1"}),
			m("input[type=button].next", {value: " >>> ", tabindex:"-1"})
		])
	],
	controller: function (element, isInitialized) {		// only events and initialisation
		if (isInitialized) 
			return;

		$('#history #lijst tbody').on('click', 'td', function(e) {		// open the selected row
			var id = parseInt($(this).parent().find("td:first").text());
			var table = $.jStorage.get("handmade_lasttab").split('_')[0];
			
			if (table=="defects") // defects are split into different tables
				table = Array("stickDefects", "packDefects", "boxDefects")[$.jStorage.get("handmade_defectstab")];

			$.jStorage.set("handmade.current."+table, id);
			show_data(table);		// update the data in the tab before it is selected
			$('.PACKING50').click();
		});
		
		$("#history .prev").click(function () {
			var options = $.jStorage.get("handmade.historylist");
			
			$.getJSON("server/list_history.php",	{
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
					$.jStorage.set("handmade.historylist", options);
					$('#history #lijst tbody').empty();
					$.each(data.records, function (key, regel) {
						$('#history #lijst tbody').append(regel);
					});
				}
			})
		});
		
		$("#history .next").click(function () {
			var options = $.jStorage.get("handmade.historylist");
			
			$.getJSON("server/list_history.php",	{
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
					$.jStorage.set("handmade.historylist", options);
					$('#history #lijst tbody').empty();
					$.each(data.records, function (key, regel) {
						$('#history #lijst tbody').append(regel);
					});
				}	
			})	
		});
		
		// sorteer een kolom
		$("#history").on('click', 'th', function () {
			var options = $.jStorage.get("handmade.historylist");
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
			$.getJSON("server/list_history.php",	{
				lang: options.lang,
				page: options.page,
				sort: options.sort,
				length: options.length,
				direction: options.direction,
				tab: $.jStorage.get("handmade_lasttab"),
				defects: $.jStorage.get("handmade_defectstab")
			}, function(data) {
				$.jStorage.set("handmade.historylist", options);
				$('#history #lijst tbody').empty();
				$.each(data.records, function (key, regel) {
					$('#history #lijst tbody').append(regel);
				})
			})	
		});	

	},
	view: function () {
		return m("#history", this.contents);
	}
}