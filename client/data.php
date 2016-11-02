<?php 
require_once(realpath($_SERVER['DOCUMENT_ROOT']).'/include.php');
?>

<style>
/* custom style for the tabs included in the parent tab */
#datatabs1 {
	background: none;
}
.mytabs1.table {
	border-collapse: collapse;	
}
.subtabs1 { 
    background: transparent; 
    border: none; 
} 
.subtabs1 .ui-widget-header { 
    background: transparent; 
    border: none; 
    border-bottom: 1px solid #c0c0c0; 
    -moz-border-radius: 0px; 
    -webkit-border-radius: 0px; 
    border-radius: 0px; 
} 
.subtabs1 .ui-tabs-nav .ui-state-default { 
    background: transparent; 
	 margin-top: -6px;
} 
.subtabs1 .ui-tabs-nav .ui-state-active a { 
    text-decoration: underline;
}
</style>



<script type="text/javascript" >

var current;

$(document).ready(function() {
	var lang = $.jStorage.get("lang");
	var d_options = {
		show_week_number: WEEK,
		days: DAYS,
		months: MONTHS,
		offset: [10, 220],
		lang_clear_date: ""
	};	
	$('#data_header #date').Zebra_DatePicker(d_options);

	$('#datatabs1').tabs();
	
	$('#header').css('background-color', 'rgba(255,255,255,0.1)');
	
	$.get('ajax/get_inspector.php', function(data) {
		$('#data_header [name=inspector]').append(data);	
		$('#data_header [name=inspectorDis]').append(data);
	});
	$.get('ajax/get_productionstatus.php?lang='+lang, function(data) {$('#data_header [name=prodStat]').append(data);	});
	$.get('ajax/get_inspectionresult.php?lang='+lang, function(data) {$('#data_header [name=result]').append(data);	});
	$.get('ajax/get_disposal.php?lang='+lang, function(data) {$('#data_header [name=disposal]').append(data);	});
	$.get('ajax/get_specs.php?lang='+lang, function(data) {$('#data_header [name=number]').append(data);	});
	$.get('ajax/get_products.php?lang='+lang, function(data) {$('#data_header [name=product]').append(data);	});
	
	if ($.jStorage.get("from") != 'history') {
		$.getJSON('ajax/get_record.php', { 	// get the last record
			query: 'SELECT id FROM gwc_pline.inspection ORDER BY id DESC LIMIT 1'
		},	function(data) {
			current = data.id;
			$.jStorage.set("#pline.current", current);
		});
	}
	
	// update database after input is changed 
	$("#data_header input").not(':input[type=button]').on("blur", function () {
		var field = $(this).attr('name');
		var id = $.jStorage.get("#pline.current");
		var value = $(this).val();
		sql = sprintf('UPDATE gwc_pline.inspection SET %s="%s" WHERE id=%s', field, value, id );
		$.getJSON('ajax/send_query.php', {query: sql});
	});
	
	$("#data_header [name=pendingReason]").on("blur", function () {
		var field = $(this).attr('name');
		var id = $.jStorage.get("#pline.current");
		var value = $(this).val();
		sql = sprintf('UPDATE gwc_pline.inspection SET %s="%s" WHERE id=%s', field, value, id );
		$.getJSON('ajax/send_query.php', {query: sql});
	});
	
	$("#data_header select").on("blur", function () {
		var field = $(this).attr('name');
		var id = $.jStorage.get("#pline.current");
		var value = $(this).val();
		sql = sprintf('UPDATE gwc_pline.inspection SET %s="%s" WHERE id=%s', field, value, id );	
		$.getJSON('ajax/send_query.php', {query: sql});
	});
	
});

</script>
</head>

<body>

<span class="flex-row" id="data_header" style="background-color:rgba(0,255,255,0.05)">
<fieldset class="fieldset_header" style="width:70%">
	<legend><label class="MEASUREMENTS"></label></legend>
	<table width='100%'>
	<tr>
	<td>
		<table width='100%'>
		<tr><td><label class='DATE'></label></td><td><input type="text" id="date" name="date" class="zebra"></td></tr>
		<tr><td><label class='BATCHNR'></label></td><td><input name="batchNr" style="width:10em"></td></tr>
		<tr><td><label class='PRODUCT'></label></td><td><select name="product"></select></td></tr>
		<tr><td><label class='SPECSNR'></label></td><td><select name="number"></select></td></tr>
		<tr><td><label class='PRODUCTIONSTATUS'></label></td><td><select name="prodStat"></select></td></tr>
		<tr><td><label class='INSPECTOR'></label></td><td><select name="inspector"></select></td></tr>
		</table>		
	</td>
	<td>
		<table width='100%'>
		<tr><td><label class='PSCORE'></label></td><td><label class='score'>...</label></td></tr>
		<tr><td><label class='IRESULT'></</td><td><select name="result"></select></td></tr>
		<tr><td colspan="2"><label class='PREMARK'></label></td></tr>
		<tr><td colspan="2"><textarea name="pendingReason" style="display:table-cell; width:99%; height:3.5em; outline:none; resize:none;">
									</textarea></td></tr>		
		</table>
	</td>
	</tr>
	</table>
</fieldset>
<fieldset class="fieldset_header" style="width:30%">
	<legend><label class="DISPOSAL"></label></legend>
	<table width='100%'>
	<tr><td><label class='DISPOSAL'></</td><td><select name="disposal"></select></td></tr>
	<tr><td><label class='HANDLINGNR'></label></td><td><input name="matNotNR"></td></tr>
	<tr><td><span class='INSPECTOR'></span></td><td><select name="inspectorDis"></select></td></tr>
	</table>
</fieldset>
</span>

<div id="tabs1" class="mytabs1 container1">
	<div id="datatabs1" class="subtabs1">
		<ul>
			<li id="f1"><a href="measure.php"><label class="PHYSDATA"></label></a></li>	
			<li id="f2"><a href="penalties.php"><label class="PENALTY"></label></a></li>
		</ul>	
	</div>
</div>

