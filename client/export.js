
var export_content = {
	contents: [
		m("span.flex-row", {style: "width:100%"}, [
			m("span.flex-col", {style: "width:15%"}, [
				m("div", {style: "height:1em"}),
				m("input[type=button].rolling", {tabindex:"-1"}),	m("div", {style: "height:1em"}),
				m("input[type=button].wrapping", {tabindex:"-1"}),m("div", {style: "height:1em"}),
				m("input[type=button].cutting", {tabindex:"-1"}), m("div", {style: "height:1em"}),
				m("input[type=button].storage", {tabindex:"-1"}), m("div", {style: "height:1em"}),
				m("input[type=button].packing", {tabindex:"-1"}), m("div", {style: "height:1em"})
			])
		])
	],
	controller: function (element, isInitialized) {
		if (isInitialized)
			return;

		$("#export .packing").addClass("last");		// set the last field
		
		var lang = ($.jStorage.get("lang") == null) ? 0 : $.jStorage.get("lang");

		$('#export .rolling').click(function() {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var src = 'server/export_rolling.php?lang='+$.jStorage.get("lang")+'&start='+start+'&end='+end;	
			var xhr = new XMLHttpRequest();
			
			spin();
			xhr.open('GET', src, true);
			xhr.responseType = 'blob';

			xhr.onload = function(e) {
			  if (this.status == 200) {
			    var blob = this.response;			// get binary data
			    saveAs(blob, "export_rolling.xlsx");		// save locally
  				$( "#spinner" ).remove();
			  }
			};
			xhr.send();
		});
		
		$('#export .wrapping').click(function() {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var src = 'server/export_wrapping.php?lang='+$.jStorage.get("lang")+'&start='+start+'&end='+end;	
			var xhr = new XMLHttpRequest();
			
			spin();
			xhr.open('GET', src, true);
			xhr.responseType = 'blob';

			xhr.onload = function(e) {
			  if (this.status == 200) {
			    var blob = this.response;			// get binary data
			    saveAs(blob, "export_wrapping.xlsx");		// save locally
  				$( "#spinner" ).remove();
			  }
			};
			xhr.send();
		});
		
		$('#export .cutting').click(function() {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var src = 'server/export_cutting.php?lang='+$.jStorage.get("lang")+'&start='+start+'&end='+end;	
			var xhr = new XMLHttpRequest();
			
			spin();
			xhr.open('GET', src, true);
			xhr.responseType = 'blob';

			xhr.onload = function(e) {
			  if (this.status == 200) {
			    var blob = this.response;			// get binary data
			    saveAs(blob, "export_cutting.xlsx");		// save locally
  				$( "#spinner" ).remove();
			  }
			};
			xhr.send();
		});
		
		$('#export .storage').click(function() {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var src = 'server/export_storage.php?lang='+$.jStorage.get("lang")+'&start='+start+'&end='+end;	
			var xhr = new XMLHttpRequest();
			
			spin();
			xhr.open('GET', src, true);
			xhr.responseType = 'blob';

			xhr.onload = function(e) {
			  if (this.status == 200) {
			    var blob = this.response;			// get binary data
			    saveAs(blob, "export_storage.xlsx");		// save locally
  				$( "#spinner" ).remove();
			  }
			};
			xhr.send();
		});
		
		$('#export .packing').click(function() {
			var start = $("#evaluate [name=start]").val();
			var end = $("#evaluate [name=end]").val();
			var src = 'server/export_packing.php?lang='+$.jStorage.get("lang")+'&start='+start+'&end='+end;	
			var xhr = new XMLHttpRequest();
			
			spin();
			xhr.open('GET', src, true);
			xhr.responseType = 'blob';

			xhr.onload = function(e) {
			  if (this.status == 200) {
			    var blob = this.response;			// get binary data
			    saveAs(blob, "export_packing.xlsx");		// save locally
  				$( "#spinner" ).remove();
			  }
			};
			xhr.send();
		});
		
	},
	view: function () {
		return m("#export", this.contents);
	}
}
