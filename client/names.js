
var names_content = {
	contents: [
		m("fieldset.fieldset_header", {style: "width:98%"}, [
			m("legend.INSPECTOR"),
			m("table", {width: "20%"}, [
				m("tr", 
					m("td",
						m("textarea[name=inspector]", {style: "resize:none; width:100%; height:20em"})
					)
				),
				m("tr", 
					m("td", {align: "center"},
						m("input[type=button].save", {tabindex:"-1"})
					)
				)
			])
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
		
		// save the data
		$("#names .save").click(function() {
			var value = $("#names [name=inspector]").val();
			var sql = sprintf('UPDATE gwc_handmade.names SET inspector="%s" WHERE id=1', value );
			$.getJSON('server/send_query.php', {query: sql});	
		});
		
	},
	view: function () {
		return m("#names", {config: show_names()}, this.contents);
	}
}