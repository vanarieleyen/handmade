console.log("users.js processed");

// the users page

var users_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Details"),
				m("table", {width: "100%"}, [
					[
						{label:"Name", field:"name", type:"text"}, 
						{label:"Password", field:"login", type:"password"},
						{label:"Specifications", field:"specs", type:"checkbox"},
						{label:"Formulas", field:"formulas", type:"checkbox"},
						{label:"Administrator", field:"admin", type:"checkbox"},
						{label:"Readonly", field:"readonly", type:"checkbox"},
						{label:"Names", field:"names", type:"checkbox"}
					].map(function (a) {
						return m("tr", [
										m("td",	a.label),	
										m("td",	m("input[type="+a.type+"]", {name: a.field}))	
									])
					}),
					[
						{label:"Last Login", field:"date"},
						{label:"Login IP", field:"identity"}, 
						{label:"Logins", field:"gebruik"} 
					].map(function (a) {
						return m("tr", [
										m("td",	a.label),
										m("td",	m("span", {id: a.field}, "--"))
									])
					})
				])
			]),
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Users"),
				m("div", {style: "height:20em; overflow:auto"}, 
					m("table#userlist", {width: "100%"}, [
						m("thead.header", {valign: "top"}, [
							["ID", "DATE", "NAME", "USAGE"].map(function (a) {
								return m("th", a)
							})
						]),
						m("tbody", {style:"height:20em; overflow:auto"})					
					])
				)
			])
		),
		m("div.buttonrow", [
			m("input[type=button].save", {tabindex:"-1"}),
			m("input[type=button].new", {tabindex:"-1"}),
			m("span", [
				m("input[type=checkbox].toggle"),
				m("input[type=button].delete", {tabindex:"-1"})
			])
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized) 
			return;
			
		// display the data
		$.jStorage.set("handmade.current.users", 1);		// only one fixed record with id=1
		show_data("formulas");
		
		// show login on hover
		$('[name=login').hover(function() {
			var lbl = '[name='+ this.name + ']';
			$(lbl).attr('type', '');
			$(lbl).css('width', '148');
		}, function(){
			var lbl = '[name='+ this.name + ']';
			$(lbl).attr('type', 'password');
			$(lbl).css('width', '150');
		});
	},
	view: function () {
		return m("#users", [this.header, this.contents]);
	}
}

