var path = require("path");

module.exports = {
  entry: [
  	//'webpack-dev-server/client?http://' + require("ip").address() + ':8080/',
  	"./client/index.js"
  ],
  output: {
		path: './build',				// output directory 
		filename: "app.js"
  },
  devServer: {		// proxy calls to server folder to backend server (lighttpd port 80)
    proxy: [
        {
            path: '/server/*',
            target: "http://localhost:80/handmade/"
        }
    ]
	},
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|gif|png)$/i, loader: "base64-image-loader" }
    ]
  },
  resolve: { 
		alias: { 
			"Mithril": path.join(__dirname, "node_modules/mithril/mithril.min.js"),
			"jquery-ui": path.join(__dirname, "node_modules/jquery-ui-bundle/jquery-ui.js"),
			"ui-css": path.join(__dirname, "styles/ui.css"),		
			"functions": path.join(__dirname, "client/js/functions.js"),
			"master-css": path.join(__dirname, "styles/master.css"),	
			"zebra-css": path.join(__dirname, "styles/zebra/default.css"),	
			"language": path.join(__dirname, "client/js/language.js"),
			"jstorage": path.join(__dirname, "client/js/jstorage.js"),
			"zebra-js": path.join(__dirname, "client/js/zebra_datepicker.js"),
			"sprintf-js": path.join(__dirname, "client/js/sprintf.js")	
		} 
	}
}