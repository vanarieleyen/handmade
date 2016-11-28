
var evaluate_content = {
	contents: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:40%"}, [
				m("table", {width: "100%", border: "0"}, 
					m("tr", [
						m("td",
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
						)				
					])
				)
			])			
		)
	],
	controller: function (element, isInitialized) {		// only events and initialisation
		if (isInitialized) 
			return;
			
		var nu = new Date();
		$('#evaluate [name=start]').val(nu.format("yyyy-MM-dd") );
		$('#evaluate [name=end]').val(nu.format("yyyy-MM-dd") );

	},
	view: function () {
		return m("#evaluate", this.contents);
	}
}