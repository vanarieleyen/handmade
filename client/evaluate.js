
var evaluate_content = {
	contents: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:40%"}, [
				m("table", {width: "100%", border: "0"}, 
					m("tr", [
						m("td",
							m("table", {width: "100%"}, [
								[
									{label:"label.START_DATE", name:"start"},
									{label:"label.END_DATE", name:"end"}
								].map(function (a) {							
									return m("tr", [
													m("td",	m(a.label)),
													m("td",	m("input.datum[type:text]", {name: a.name}))
												])
								}),
								[
									{label:"label.PRODUCT", name:"product"},
									{label:"label.SAMPLINGPOINT", name:"sampling"}
								].map(function (a) {							
									return m("tr", [
													m("td",	m(a.label)),
													m("td",	m("select", {name: a.name}))
												])
								})
							])
						)				
					])
				)
			])			
		)
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
			
		var nu = new Date();
		$('#evaluate [name=start]').val(nu.format("yyyy-MM-dd") );
		$('#evaluate [name=end]').val(nu.format("yyyy-MM-dd") );

		// fill the selectbox options
		$.getJSON('server/get_names.php', function(data) {
			$('#evaluate [name=sampling]').append(data.sampling);	
		});
		$.get('server/get_products.php', function(data) {
			$('#evaluate [name=product]').append(data);	
		});
	},
	view: function () {
		return m("#evaluate", this.contents);
	}
}