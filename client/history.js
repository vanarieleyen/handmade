
var flags = [
	//m("img", {src: require("/assets/CN.jpg")}),
	//m("img", {src: require("../assets/GB.jpg")}),
	m("#Tiny")
]

var history_content = {
	controller: function () {
		
	},
	view: function () {
		return m("div", flags);
	}
}