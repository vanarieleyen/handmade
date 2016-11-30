
// show 'not available' (for charts that are not available)
function none(chart) {
	var msg = LABELS[321][$.jStorage.get("lang")];
	var height = $(chart).css("height");
	var width = $(chart).css("width");
	var t = $.plot($(chart), [], {grid: {borderWidth: {top: 0, right: 0, bottom: 0, left: 0}}});
	var ctx = t.getCanvas().getContext("2d");	
	ctx.font = 'italic 40px Calibri';
	ctx.fillStyle = "#FF0000";
	var w = ctx.measureText(msg).width;
	ctx.fillText(msg, ($(chart).width()-w)/2, ($(chart).height())/2);
	$(chart).html('<img src=\"'+t.getCanvas().toDataURL('image/png')+'\"/>');
	return true;
}

// basic call to draw a chart
function plotChart(options) {
	$.ajax({
   	type: "POST",
   	async: false,
    	url: "ajax/get_series.php",
	  	contentType: "application/x-www-form-urlencoded",
   	data: options,
		success: function(data) {
			if (data != "") {
				eval(data);								// plot the chart
			} else {
				notAvailable(options.element, 0);	// show not available
			}
   	}
	});		
}

// return the raw data
function getData(data, limit, soort) {
	var line = Array();
	for (var i=0; i<limit; i++) {
		tmp = data[soort+(i+1)];
		val = (tmp=="") ? NaN : parseFloat(tmp);
		line.push( Array(i, val) );
	}
	return line;
}

function plotMiniChart(element, line, specs) {
	$.plot( $(element), 
		[{ 
			data: line, 
			yaxis: 1, 
			color: "#3333FF", 
			lines: {show:true}
		}], 
		{  
			grid: { 
				markings: [		// background color according to specs
					{ 
						yaxis: { from:-100000, to: specs.min35 }, 
						color: '#FFAD99' 
					},{ 
						yaxis: { from: specs.min35, to: specs.min20 }, 
						color: '#FFD2AA' 
					},{ 
						yaxis: { from: specs.min20, to: specs.max20 }, 
						color: '#AAFFAA' 
					},{ 
						yaxis: { from: specs.max20, to: specs.max35 }, 
						color: '#FFD2AA' 
					},{ 
						yaxis: { from: specs.max35, to:100000 }, 
						color: '#FFAD99' 
					}
				] 
			},
			xaxes: [{ 
				position: "bottom",  
				axisLabelUseCanvas: true, 
				axisLabelFontSizePixels: 12, 
				axisLabelFontFamily: "Verdana, Arial", 
				axisLabelColour: "rgb(56, 56, 56)", 
				axisLabelPadding: 25, 
				ticks:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 
				font: { size: 10, weight: "light", family: "sans-serif", color: "rgb(56, 56, 56)" } 
			}] 
		}
	)
}

function mini_chart(element, soort, id) {		// mini timechart
	switch (soort) {
		case "d":	specmin = "rol_c_min";	specmax = "rol_c_max"; break;
		default:	specmin = "rol_"+soort+"_min";	specmax = "rol_"+soort+"_max";
	}
	var sql = "SELECT * FROM gwc_handmade.rolling t1 \
							JOIN gwc_handmade.specs t2 ON t1.product=t2.name AND t1.date BETWEEN t2.start AND t2.end \
						WHERE t1.id="+id;
	$.getJSON('server/get_record.php', { 
		query: sql
	}, function(data) {
		var line = Array();
		var specs = specLimits(data[specmin], data[specmax]);
				
		if (data.rowcount == '0') {		// specs not found
			sql = "SELECT * FROM gwc_handmade.rolling WHERE id="+id;
			$.getJSON('server/get_record.php', { 
					query: sql
			}, function(data) {
				line = getData(data, 10, soort);
				plotMiniChart(element, line, specs);
			});
		} else {
			line = getData(data, 10, soort);
			plotMiniChart(element, line, specs);
		}
	});
}

function mini_moistchart(element, id) {		// mini timechart
	var	specmin = "moist_s_min";	
	var specmax = "moist_s_max";
	var sql = "SELECT * FROM gwc_handmade.storage t1 \
							JOIN gwc_handmade.specs t2 ON t1.product=t2.name AND t1.date BETWEEN t2.start AND t2.end \
						WHERE t1.id="+id;
	$.getJSON('server/get_record.php', { 
		query: sql
	}, function(data) {
		var line = Array();
		var specs = specLimits(data[specmin], data[specmax]);
		
		if (data.rowcount == '0') {		// specs not found
			sql = "SELECT * FROM gwc_handmade.storage WHERE id="+id;
			$.getJSON('server/get_record.php', { 
					query: sql
			}, function(data) {
				line = getData(data, 8, "m");
			});
		} else {
			line = getData(data, 8, "m");
		}
				
		plotMiniChart(element, line, specs);
	});
}

