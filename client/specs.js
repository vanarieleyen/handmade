console.log("specs.js processed");

// the specs page

var specs_content = {
	header: [
		m("span.flex-row#data_header", {style: "background-color:rgba(0,255,255,0.05)"}, 
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Details"),
				m("table", {width: "100%"}, [
					m("tr", [
						m("td",	"Name"),
						m("td",	m("input[type=text]", {name: "name"}))
					]),
					m("tr", [
						m("td",	"Password"),
						m("td",	m("input[type=password]", {name: "login"}))
					]),
					m("tr", [
						m("td",	"Specifications"),
						m("td",	m("input[type=checkbox]", {name: "specs"}))
					]),
					m("tr", [
						m("td",	"Formulas"),
						m("td",	m("input[type=checkbox]", {name: "formulas"}))
					]),
					m("tr", [
						m("td",	"Admistrator"),
						m("td",	m("input[type=checkbox]", {name: "admin"}))
					]),
					m("tr", [
						m("td",	"Readonly"),
						m("td",	m("input[type=checkbox]", {name: "readonly"}))
					]),
					m("tr", [
						m("td",	"Names"),
						m("td",	m("input[type=checkbox]", {name: "names"}))
					]),
					m("tr", [
						m("td",	"Last Login"),
						m("td",	m("span", {id: "date"}, "--"))
					]),
					m("tr", [
						m("td",	"Login IP"),
						m("td",	m("span", {id: "identity"}, "--"))
					]),
					m("tr", [
						m("td",	"Logins"),
						m("td",	m("span", {id: "gebruik"}, "--"))
					])
				])
			]),
			m("fieldset.fieldset_header", {style: "width:98%"}, [
				m("legend", "Users"),
				m("div", {style: "height:20em; overflow:auto"}, 
					m("table#userlist", {width: "100%", border: "1"}, [
						m("thead", {valign: "top"}, [
							m("th", {"data-dynatable-column":"id"}),
							m("th", {"data-dynatable-column":"date"}),
							m("th", {"data-dynatable-column":"name"}),
							m("th", {"data-dynatable-column":"gebruik"})
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
			
		$('[name=login').hover(function() {	// verberg of toon een login on hover
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
		return m("div", [this.header, this.contents]);
	}
}

