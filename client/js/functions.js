/*
functies om de labels te setten
functies om de inputvelden van data uit de database te voorzien
*/

$.ajaxSetup({ scriptCharset: "utf-8" , contentType: "Content-Type: text/html; charset=utf-8"});
$.ajaxSetup({async:false});

// stel de text en hint van een label in
// een: de class van het element op de pagina
// twee/drie: index of extra toevoeging aan label
// drie: de index van de labels-array waar de text en hint staat opgeslagen
function show(een, twee, drie) {
	if (arguments.length == 2) { 
		var lbl = een;
		var i = twee;
		var add = '';
	} else {
		var lbl = een;
		var add = twee;
		var i = drie;
	}
	var hint = ($.jStorage.get("lang") == 0) ? 1 : 0;
	var text = ($.jStorage.get("lang") == 0) ? 0 : 1;
	var txt = LABELS[i][text] + add;
	$(lbl).html(txt);	// text
	$(lbl).attr('title', LABELS[i][hint]);	// hint
	
}

// set button text + hint
function setButton(lbl, idx) {
	var hint = ($.jStorage.get("lang") == 0) ? 1 : 0;
	var text = ($.jStorage.get("lang") == 0) ? 0 : 1;
	var txt = LABELS[idx][text];
	
	$(lbl).val("  "+txt+"  ");	// text
	$(lbl).attr('title', LABELS[idx][hint]);	// hint	
}

// vul alle labels met text en hints
function fill_labels() {
	show('.HISTORY', 1);
	show('.CHARTS', 2);
	show('.BUNCHES', 3);
	show('.QDPT', 174);
	show('.SWWV', 175);
	show('.MIDS', 176);
	show('.ACM', 177);
	show('.REX', 178);
	show('.TPRSE', 179);
	show('.FL', 180);
	show('.FLYBT2000', 181);
	show('.PASSIM', 182);
	show('.GDX', 183);
	show('.MACHINE_NR', 4);
	show('.DATE', 5);
	show('.TIME', 34);
	show('.DESCRIPTION', 7);
	show('.REMARK', 8);
	show('.WEIGHT_DL', 9);
	show('.LENGTH_DL', 10);
	show('.DIAMETER', 11);
	show('.WEIGHT_L', '(10)', 12);
	show('.WEIGHT_R', '(10)', 13);
	show('.LENGTH_L', 14);
	show('.LENGTH_R', 15);
	show('.PD_L', 16);
	show('.PD_R', 17);
	show('.SUMMARY', 160);
	show('.W_L', 12);
	show('.W_R', 13);
	show('.AVG_L', 18);
	show('.AVG_R', 19);
	show('.SPECS', 20);
	show('.MIN', 21);
	show('.NORM', 22);
	show('.MAX', 23);
	show('.S35', 24);
	show('.S20', 25);
	show('.L20', 26);
	show('.L35', 27);
	show('.WEIGHT_LR', 28);
	show('.LENGTH_LR', 29);
	show('.PD_LR', 30);
	show('.MACHINE', 31);
	show('.PRODUCTS', 6);
	show('.START_DATE', 35);
	show('.END_DATE', 36);
	show('.SETTINGS', 38);
	show('.CP', 39);
	show('.CPK', 40);
	show('.PACKING50', 41);
	show('.PACKING240', 109);
	show('.WEIGHT10', '(10)', 42);
	show('.WEIGHT', 42);
	show('.AVG', 43);
	show('.MOIST', 44);
	show('.PD1', 45);
	show('.PD2', 46);
	show('.FALSE_AIR', 47);
	show('.FALSE_AIR2', '(%)', 47);
	show('.240CHECK', 83);
	show('.10CHECK', 82);
	show('.CHECKED_AMOUNT', 84);
	show('.DEFECTS_A', 85);
	show('.DEFECTS_B', 86);
	show('.AMOUNT', 94);
	show('.TOT_ERR_A', '(%)', 87);
	show('.TOT_ERR_B', '(%)', 88);
	show('.DEFECTS', 95);
	show('.TOTDEFECTS', '(%)', 96);
	show('.TOT_ERR_AB', '(%)', 97);
	show('.VIS_A', 91);
	show('.VIS_B', 92);
	show('.VIS_AB', 98);
	show('.VIS_PACK', 93);
	show('.NOTICE', 99);
	show('.NAME', 6);
	show('.SPECBUNCH', 100);
	show('.SPECPACK', 101);
	show('.SPECSNR', 393);
	show('.LENGTH', 102);
	show('.HEAD_DIAM', 103);
	show('.HEAD_LENGTH', 104);
	show('.MOIST_CUT', 105);
	show('.MOIST_PACK', 106);
	show('.PD_CUT', 107);
	show('.PD_PACK', 108);
	show('.WEIGHT_LR10', '(10)', 28);
	show('.TYPE', 33);
	show('.PRODUCT', 32);
	show('.TIJD', 34);
	show('.RANGE', 37);
	show('.PRODNR', 344);
	show('.YOURNAME', 110);
	show('.REASON', 111);
	show('.SHIFT', 164);
	show('.DAYSHIFT', 165);
	show('.NIGHTSHIFT', 166);
	show('.OPERATOR', 171);
	show('.OLDVAL', 114);
	show('.NEWVAL', 115);
	show('.NAAM', 117);
	show('.FIELD', 116);	
	show('.DATE', 5);
	show('.REASON', 111);
	show('.DELETE', 172);
	show('.NEW', 112);
	
	setButton(".calibrate", 148);
	setButton(".calc", 145);
	setButton(".reset", 140);
	setButton(".search", 488);
	setButton(".new", 112);
	setButton(".close", 113);
	setButton(".cancel", 414);
	setButton(".print", 159);
	setButton(".delete", 172);
	setButton(".start", 438); 
	setButton(".save", 491);
	setButton(".import", 493);
	setButton(".export", 494);
	setButton(".select", 650);
	setButton(".exportsum", 160);
	setButton(".undo", 495);
	setButton("#checkbutton", 535);
	setButton("#finishedbutton", 598);
	setButton(".edit", 593);

	show('.IMPORT', 493);
	show('.OLDVAL', 114);
	show('.NEWVAL', 115);
	show('.FIELD', 116);
	show('.NAAM', 117);
	show('.ACTIVITY', 123);
	show('.MEASUREMENTS', 125);
	show('.PROD_STAGE', 126);
	show('.ADVICE', 127);
	
	show('._A3', 50);
	show('._A5', 52);
	show('._A6', 53);
	show('._A8', 55);
	show('._A10', 57);
	show('._B1', 61);
	show('._B4', 64);
	show('._B9', 69);
	show('._B10', 70);
	show('._B11', 71);
	show('._B13', 73);
	show('._B15', 75);
	show('._B17', 77);
	
	show('.FP', 141);
	show('.FD', 142);
	show('.PD', 146);
	show('.CALCPD', 143);
	show('.CALC', 145);
	show('.SHAPE', 147);
	show('.HEAD', 149);
	show('.TIP', 150);
	show('.FIXED', 151);
	show('.MODELS', 152);
	show('.HD_L', 184);
	show('.HD_R', 185);
	
	show('.TREND', 154);
	show('.SPREAD', 155);
	show('.VARIATION', 156);
	show('.QUALITY', 157);
	show('.AVERAGE', 158);
	show('.FILLER', ':&nbsp;', 173);
	show('.STEMS', ' &lt;', 162);
	show('.SPECFILLER', 161);
	show('.PS1', ' 12.7-25.4mm', 163);
	show('.PS2', ' 6.35-12.7mm', 163);
	show('.PS3', ' 3.18-6.35mm', 163);
	show('.PS4', ' &lt; 3.18mm', 163);
	show('.FPOWER', ' &ge;', 141);
	
	show('._MIDS1', 209);
	show('._MIDS2', 206);
	show('._MIDS3', 210);
	show('._MIDS4', 201);
	show('._MIDS5', 211);
	show('._MIDS6', 212);
	show('._MIDS7', 202);
	show('._MIDS8', 213);
	show('._MIDS9', 214);
	show('._MIDS10', 215);
	show('._MIDS11', 222);
	show('._MIDS12', 216);
	show('._MIDS13', 217);
	show('._MIDS14', 218);
	show('._MIDS15', 204);
	show('._MIDS16', 205);
	show('._MIDS17', 207);
	show('._MIDS18', 219);
	
	show('._ADV1', 223);
	show('._ADV2', 224);
	show('._ADV3', 225);
	show('._ADV4', 226);
	show('._ADV5', 227);
	show('._ADV6', 228);
	show('._ADV7', 229);
	show('._ADV8', 230);
	show('._ADV9', 231);
	show('._ADV10', 232);
	show('._ADV11', 233);
	show('._ADV12', 234);
	show('._ADV13', 235);
	show('._ADV14', 236);
	show('._ADV15', 237);
	show('._ADV16', 238);
	show('._ADV17', 239);
	show('._ADV18', 240);
	show('.LEFTRIGHT', 263);
	show('.PD_HEAD', 264);
	show('.PD_TIP', 265);
	show('.NEWS', 266);
	show('.TITLE', 267);
	show('.TOTALLENGTH', 268);
	show('.EFFICIENCY', 269);
	show('.UNITS', 270);
	show('.PIECES', 271);
	show('.KILOGRAM', 272);
	show('.TOTALPROD', 273);
	show('.WASTEPROD', 274);
	show('.FILLER_IN', 306);
	show('.FILLER_LEFT', 307);
	show('.FILLER_WASTE', 308);
	show('.BINDER_IN', 309);
	show('.BINDER_LEFT', 310);
	show('.CHOICE', 403);
	
	show('.VISDEFECTS_A', ' (240)', 91);
	show('.VISDEFECTS_B', ' (240)', 92);
	show('.VISBOXDEFECTS_A', ' (50)', 260);
	show('.VISBOXDEFECTS_B', ' (50)', 261);
	show('.TRACKING', 286);
	show('.NEWROUTE', 287);
	show('.BROWSEROUTE', 288);
	show('.LABEL', 289);
	show('.LABELDATE', 300);
	show('.PRINTLABEL', 301);
	show('.WRAPPER', 302);
	show('.PART', 303);
	show('.PACKING', 304);
	show('.FLAVOR', 305);
	show('.MOIST_MIDS', 311);
	show('.INNER', 315);
	show('.OUTER', 316);
	show('.STAGE', 317);
	show('.CP_CPK', 318);
	show('.PERFORMANCE', 319);
	show('.COMPMACH', 320);
	show('.AB_DEFECTS', 322);
	show('.ABPACK_DEFECTS', 323);
	show('.PRESSUREDROP', 312);
	show('.DISTRIBUTION', 314);
	show('.MOISTURE', 170);
	show('.PD_DISTRIBUTION', 324);
	show('.PD_AVERAGE', 325);
	show('.PD_CP_CPK', 326);
	show('.SPEC_SUMMARY', 327);
	show('.MACH_PERFORMANCE', 328);
	show('.BOBINSIDE', 329);
	show('.PRODUCED', 332);
	show('.MEASUREMENTS', 125);
	show('.RUNNING', 331);
	show('.NOT_MEASURED', 333);
	show('.NOT_TRACKED', 334);
	show('.MEASURE_MSG', 335);	
	show('.MATRIX', 336);
	show('.TRACKED_MACHINES', 337);	
	show('.ALL_MACHINES', 338);
	show('.SHOW', 339);
	show('.PERFOP', 340);
	show('.ACCURACY', 341);
	show('.ENTERPASS', 413);
	show('.EXPIREDPASS', 411);
	show('.ENTERNAME', 412);
	show('.OK', 343);
	show('.EXAM', 436);
	show('.SCORE', 437);
	show('.VRAAG', 441);
	
	$('.RELIABILITY').html('<span class="reliability"></span>');
	$('.RELIABILITY').prepend(LABELS[153][ $.jStorage.get("lang") ]);
 
	if (typeof print_access !== "undefined") 
		if (print_access == '1')	$('.print').css('visibility', 'visible');

	show('.TOBACCO', 442);
	show('.ORIGIN', 444);
	show('.T_NAME', 446);
	show('.T_VARIETY', 449);
	show('.T_TYPE', 443);
	show('.T_GRADE', 447);
	show('.T_YEAR', 445);
	show('.T_STATUS', 448);
	show('.T_APPEARANCE', 450);
	show('.T_CONTENT', 455);
	show('.T_CONDITION', 451);
	show('.T_LENGTH', 453);
	show('.T_SUGAR', 456);
	show('.T_ALKALI', 459);
	show('.T_COLOR', 452);
	show('.T_WIDTH', 454);
	show('.T_RSUGAR', 457);
	show('.T_POT', 460);
	show('.T_NITRO', 458);
	show('.T_CHL', 461);
	show('.T_SENSORY', 474);
	show('.T_AROMA', 462);
	show('.T_SMOKE', 469);
	show('.T_SMOKING', 475);
	show('.A_TYPE', 463);
	show('.A_QUALITY', 464);
	show('.A_QUANTITY', 465);
	show('.A_INT', 466);
	show('.A_BSA', 467);
	show('.A_BST', 468);
	show('.SC_DENS', 470);
	show('.SC_STR', 471);
	show('.SC_ELE', 472);
	show('.SC_COMP', 473);
	show('.SE_DENS', 476);
	show('.SE_DRY', 477);
	show('.SE_CL', 478);
	show('.SE_MI', 479);
	show('.SE_TI', 480);
	show('.SE_NI', 481);
	show('.SE_SWEETNESS', 487);
	show('.COMBUSTION', 482);
	show('.ASH', 483);
	show('.T_REMARK', 484);
	show('.T_AMOUNT', 485);
	show('.T_PRICE', 486);
	show('.SEARCH', 488);
	show('.LATEST', 489);
	show('.CREATOR', 490);
	show('.COPY_MSG', 492);
	
	show('.SUPPLY_NAME', 498);
	show('.SUPPLY_NR', 499);
	show('.SUPPLIER_NAME', 500);
	show('.COPY_MSG', 492);
	
	show('.PHYSDATA',  509);
	show('.APPEARANCE',  510);
	show('.PENALTY',  511);
	show('.STICKMACHINE',  512);
	show('.PACKMACHINE',  513);
	show('.BATCHNR',  514);
	show('.CIRCUMFERENCE',  515);
	show('.VENTILATION',  516);
	show('.DEVIATION',  517);
	show('.VARIANCE',  518);
	show('.OUTSPEC',  519);
	show('.HARDNESS',  520);
	show('.STICKAPPEARANCE', 521);
	show('.DEFECT_TYPE', 522);
	show('.QUANTITY', 523);
	show('.DEFECTS_TOTAL', 524);
	show('.DEFECTS_A', 525);
	show('.DEFECTS_B', 526);
	show('.DEFECTS_C', 527);
	show('.PACKAPPEARANCE', 528);
	show('.SLEEVEAPPEARANCE', 529);
	show('.CARTONAPPEARANCE', 530);
	show('.STATION', 531);
	show('.CHECKED', 535);
	show('.PRODUCTIONSTATUS', 542);
	show('.DISCREPANCY', 543);
	show('.WEIGHT30L', 544);
	show('.WEIGHT30R', 545);
	show('.INSPECTOR', 546);
	show('.OPERATORSTICK', 547);
	show('.OPERATORPACK', 548);
	
	show('.PEN_WEIGHTDEV', 549);	// penalty weight deviation
	show('.PEN_WEIGHTSTD', 550);	// penalty weight vs standard
	show('.PEN_WEIGHTOUT', 551);	// penalty weight out of specs
	show('.PEN_CIRCDEV', 552);		// penalty circumference deviation
	show('.PEN_CIRCSTD', 553);		// penalty circumference vs standard
	show('.PEN_CIRCOUT', 554);		// penalty circumference out of specs
	show('.PEN_LENDEV', 555);		// penalty length deviation
	show('.PEN_LENSTD', 556);		// penalty length vs standard
	show('.PEN_LENOUT', 557);		// penalty length out of specs
	show('.PEN_WEIGHTLR', 558);	// penalty weight l/r difference
	
	show('.STICK_A_PASSED', 559);	// stick a defects passed
	show('.STICK_A_PEN', 560);		// penalty stick a
	show('.STICK_B_PASSED', 561);	// stick b defects passed
	show('.STICK_B_PEN', 562);		// penalty stick b
	show('.STICK_C_PASSED', 563);	// stick c defects passed
	show('.STICK_C_PEN', 564);		// penalty stick c
	show('.PACK_A_PASSED', 565);	// pack a defects passed
	show('.PACK_A_PEN', 566);		// penalty pack a
	show('.PACK_B_PASSED', 567);	// pack b defects passed
	show('.PACK_B_PEN', 568);		// penalty pack b
	show('.PACK_C_PASSED', 569);	// pack c defects passed
	show('.PACK_C_PEN', 570);		// penalty pack c
	show('.SLEEVE_A_PASSED', 571);	// sleeve a defects passed
	show('.SLEEVE_A_PEN', 572);		// penalty sleeve a
	show('.SLEEVE_B_PASSED', 573);	// sleeve b defects passed
	show('.SLEEVE_B_PEN', 574);		// penalty sleeve b
	show('.SLEEVE_C_PASSED', 575);	// sleeve c defects passed
	show('.SLEEVE_C_PEN', 576);		// penalty sleeve c
	show('.CARTON_A_PASSED', 577);	// carton a defects passed
	show('.CARTON_A_PEN', 578);		// penalty carton a
	show('.CARTON_B_PASSED', 579);	// carton b defects passed
	show('.CARTON_B_PEN', 580);		// penalty carton b
	show('.CARTON_C_PASSED', 581);	// carton c defects passed
	show('.CARTON_C_PEN', 582);		// penalty carton c
	show('.SYNT_SCORE', 583);			// synthesis score
	
	show('.MAXIMUM', 584);
	show('.MINIMUM', 585);
	show('.SAMPLES', 586);
	show('.SUM', 587);
	show('.PROPORTION', 588);	
	show('.EVALUATE', 589);
	show('.DIFINOUT', 590);
	show('.STICKS', 594);
	show('.PACKS', 595);
	show('.SLEEVES', 596);
	show('.CARTONS', 597);
	show('.FINISHED', 598);
	show('.REPORT', 599);
	show('.PRINT', 159);
	show('.TITLE', 600);
	show('.MOIST', 601);
	show('.DUST', 602);
	show('.LOSS', 603);
	show('.FWEIGHT', 604);
	show('.PSCORE', 605);
	show('.PREMARK', 606);
	show('.IRESULT', 607);
	show('.DISPOSAL', 608);
	show('.HANDLINGNR', 609);
	show('.REGAIN_1', 610);
	show('.REGAIN_2', 611);
	show('.INPUTMOIST', 612);
	show('.OUTPUTMOIST', 613);
	show('.OUTPUTTEMP', 614);
	show('.MOISTSTAT', 615);
	show('.CHARGE_ACCUR', 616);
	show('.STORAGE', 617);
	show('.STORAGETIME', 618);
	show('.MATERIAL', 619);
	show('.MOIST_HEAT', 620);
	show('.AIR_DRYING', 621);
	show('.FLAVORING', 622);
	show('.FLAVORING_ACCURACY', 623);
	show('.BLEND_CUT', 624);
	show('.BLEND_ACCUR', 625);
	show('.BLEND_EXP', 626);
	show('.BLEND_RECYCLED', 627);
	show('.BLEND_RECYCLED_OK', 628);
	show('.BLEND_RECYCLED_NR', 629);
	show('.BLEND_STORAGE', 630);
	show('.MOIST_CONTENT', 631);
	show('.MAT_INPUT', 632);
	show('.ADDITIONAL_INSPECTIONS', 633);
	show('.LONG_STEMS', 634);
	show('.SHORT_STEMS', 635);
	show('.FILLING_POWER', 636);
	show('.CUT_STRIPS', 637);
	show('.CUT_WIDTH', 638);
	show('.MATREQUIREMENTS', 639);
	show('.MOISTOK', 640);
	show('.BATCHNOTMIXED', 641);
	show('.CUTREQUIREMENTS', 642);
	show('.EXPREQUIREMENTS', 643);
	show('.QUALITYSCORE', 644);
	show('.RAWMATOK', 645);
	show('.NORMALPRODUCTION', 646);
	show('.TRIALPRODUCTION', 647);
	show('.MINSPECS', 648);
	show('.MAXSPECS', 649);
	show('.EXPORT', 494);
	
	show('.SAMPLINGPOINT', 651);
	show('.HANDMADE_DATE', 652);
	show('.HANDMADE_CIRCUMFERENCE', 653);
	show('.ROLLING_PROCESS', 654);
	show('.HANDMADE_PD', 655);
	show('.SURFACE_OUT', 656);
	show('.TIGHTNESS_OUT', 657);
	show('.BLEND_ACC', 658);
	show('.PD_ACC', 659);
	show('.BATCH_SCORE', 660);
	show('.BATCH_QUALITY', 661);
	show('.WRAPPING_PROCESS', 662);
	show('.CIGAR_APPEARANCE', 663);
	show('.WRAPPING_FINISH', 664);
	show('.WRAPPER_INTEGRITY', 665);
	show('.WRAPPER_COLOR', 666);
	show('.HEADEND', 667);
	show('.WRAPPED_OK', 668);
	show('.INCISSION', 669);
	show('.HEAD_EMPTY', 670);
	show('.TIGHTNESS', 671);
	show('.VEIN_LINES', 672);
	show('.CREASE', 673);
	show('.SPOTS', 674);
	show('.BLOTS', 675);
	show('.SEAMS', 676);
	show('.HOLES', 677);
	show('.CRACKS', 678);
	show('.SPLICES', 679);
	show('.MACHINE_CUTTING', 680);
	show('.STORAGE_PROCESS', 681);
	show('.IN_CHARGE', 682);
	show('.BATCH_QUALITY_OK', 683);
	show('.PROCESSING_DATE', 684);
	show('.MOISTURE_LIMITS', 685);
	show('.LOWER_LIMIT', 686);
	show('.UPPER_LIMIT', 687);
	show('.APPEARANCE_QUALITY', 688);
	show('.MILDEW_WORMS', 689);
	show('.DOPANT', 690);
	
	show('.JOBNR', 691);
	show('.STICK_PACK_QUALITY', 692);
	show('.RING', 693);
	show('.DEFECT_TYPE', 694);
	show('.DEFECT_NR', 695);
	show('.CELLOPHANE', 696);
	show('.CIGAR_SET', 697);
	show('.DEFECT_CODE', 698);
	show('.SAMPLING_FREQ', 699);
	show('.PACKING_MARK', 700);
	show('.DETERMINATION', 701);
	show('.PACK_QUALITY', 702);
	show('.SLEEVE_QUALITY', 703);
	show('.BOX_QUALITY', 704);
	show('.STICK_PACKING_SCORE', 705);
	show('.PACKING_SCORE', 706);
	show('.SLEEVEBOX_SCORE', 707);
	show('.SLEEVEBOX', 708);
	
	show('.L_OUTLOW', 709);
	show('.L_OUTHIGH', 710);
	show('.L_INSPEC', 711);
	show('.C_OUTLOW', 712);
	show('.C_OUTHIGH', 713);
	show('.C_INSPEC', 714);
	show('.W_OUTLOW', 715);
	show('.W_OUTHIGH', 716);
	show('.W_INSPEC', 717);
	show('.P_OUTLOW', 718);
	show('.P_OUTHIGH', 719);
	show('.P_INSPEC', 720);
	show('.M_OUTLOW', 721);
	show('.M_OUTHIGH', 722);
	show('.M_INSPEC', 723);
	show('.M_2INSPEC', 724);
}

// beperk alle inputs van het soort 'number' op getallen 
$(document).on("keyup", "input.number", function() {
	var element = $(this);
	var val = element.val(); 

	if (isNaN(val)) {
		val = val.replace(/[^0-9\.?]/g,'');
		if (val.split('.').length>2) val=val.replace(/\.+$/,"");
	} else {
		if (parseFloat(val) > 999) {	// set maximum size to 999
			alert(val+' '+LABELS[407][ $.jStorage.get("lang") ]+"!");	
			val = val.slice(0, -1);
		}	
	}
	$(this).val(val); 
});

// sets the current record pointer
function get_current (table) {
	var name = table.split('.')[1];
	
	if ($.jStorage.get("handmade.current."+name) == null) {	// for first-time start-ups 
		$.getJSON('server/get_record.php', { 
			query: 'SELECT max(id) AS id FROM '+table
		}, function(data) {
			$.jStorage.set("handmade.current."+name, data.id);	// NULL when none found
		});
	} else {
		$.getJSON('server/get_record.php', { 
			query: 'SELECT id FROM '+table+' WHERE id='+$.jStorage.get("handmade.current."+table)
		},	function(data) {
			if (data.id == null) {
				$.getJSON('server/get_record.php', { 
					query: 'SELECT max(id) AS id FROM '+table
				}, function(data) {
					$.jStorage.set("handmade.current."+name, data.id);	// NULL when none found
				});
			} else {
				$.jStorage.set("handmade.current."+name, data.id);
			}
		});
	}
}

// go to the next record
function next_rec(table) {
	var name = table.split('.')[1];
	
	this.current = $.jStorage.get("handmade.current."+name);
	$.getJSON('server/get_record.php', { 
		query: 'SELECT * FROM '+table+' WHERE id = ' + this.current + ' LIMIT 1'
	}, function(data) {
		if (data.rowcount != 0) {
			$.getJSON('server/get_record.php', { 
				query: 'SELECT * FROM '+table+' WHERE id > "' + data.id + '" ORDER BY id ASC LIMIT 1'
			}, function(data) {
				if (data.rowcount != 0) {	// als er nog records worden gevonden...
					$.jStorage.set("handmade.current."+name, data.id);
				}	
			});
		} else {
			$.getJSON('server/get_record.php', { 
				query: 'SELECT max(id) AS id FROM '+table
			},	function(data) {
				$.jStorage.set("handmade.current."+name, data.id);	// NULL when none found
			});
		}		
	});
}	

// go to the previous record
function prev_rec(table) {
	var name = table.split('.')[1];
	
	this.current = $.jStorage.get("handmade.current."+name);
	$.getJSON('server/get_record.php', { 
		query: 'SELECT * FROM '+table+' WHERE id = ' + this.current + ' LIMIT 1'
	}, function(data) {
		if (data.rowcount != 0) {
			$.getJSON('server/get_record.php', { 
				query: 'SELECT * FROM '+table+' WHERE id < "' + data.id + '" ORDER BY id DESC LIMIT 1'
			}, function(data) {
				if (data.rowcount != 0) {	// als er nog records worden gevonden...
					$.jStorage.set("handmade.current."+name, data.id);
				}	
			});		
		} else {
			$.getJSON('server/get_record.php', { 
				query: 'SELECT min(id) AS id FROM '+table
			},	function(data) {
				$.jStorage.set("handmade.current."+name, data.id);	// NULL when none found
			});
		}		
	});
}

// make a new record
function new_rec(table, element) {
	var name = table.split('.')[1];
	
	$.getJSON('server/new.php', {	
			table: table
	}, function(data) {
		if (data.id != null) {
			$.jStorage.set("handmade.current."+name, data.id);
			$(element+" input").not("[type=button]").removeAttr("disabled");
			$(element+" textarea").removeAttr("disabled");
			$(element+" select").removeAttr("disabled");
		}
	});
}

// shows the data from a table
function show_data(table) {
	var id = $.jStorage.get("handmade.current."+table);
	var sql = sprintf('SELECT * FROM gwc_handmade.%s WHERE id=%s', table, id);

	if (id != null)	{
		$.getJSON('server/get_record.php', { 
			query: sql
		}, function(data) {
			switch (table) {
				case "rolling":
					$("#rolling [name=date]").val(data.date);
					$("#rolling [name=product]").val(data.product);
					$("#rolling [name=name]").val(data.name);
					$("#rolling [name=inspector]").val(data.inspector);
					$("#rolling [name=remarks]").val(data.remarks);
					$("#rolling [name=score]").html(data.score);
					$("#rolling [name=quality]").html(data.quality);
					for (var i=1; i<=10; i++) {
						$("#rolling [name=l"+i+"]").val(data["l"+i]);
						$("#rolling [name=d"+i+"]").val(data["d"+i]);
						$("#rolling [name=w"+i+"]").val(data["w"+i]);
						$("#rolling [name=p"+i+"]").val(data["p"+i]);
					}
					$("#rolling [name=surfout]").val(data.surfout);
					$("#rolling [name=tightout]").val(data.tightout);
					$("#rolling [name=blendacc]").val(data.blendacc);
					$("#rolling [name=pdacc]").val(data.pdacc);
					break;
				case "wrapping":
					$("#wrapping [name=date]").val(data.date);
					$("#wrapping [name=product]").val(data.product);
					$("#wrapping [name=name]").val(data.name);
					$("#wrapping [name=inspector]").val(data.inspector);
					$("#wrapping [name=remarks]").val(data.remarks);
					$("#wrapping [name=score]").html(data.score);
					$("#wrapping [name=quality]").html(data.quality);
					
					$("#wrapping [name=incision]").val(data.incision);
					$("#wrapping [name=seam]").val(data.seam);
					$("#wrapping [name=empty]").val(data.empty);
					$("#wrapping [name=hole]").val(data.hole);
					$("#wrapping [name=tightness]").val(data.tightness);
					$("#wrapping [name=veins]").val(data.veins);
					$("#wrapping [name=crack]").val(data.crack);
					$("#wrapping [name=splice]").val(data.splice);
					$("#wrapping [name=color]").val(data.color);
					$("#wrapping [name=headend]").val(data.headend);
					$("#wrapping [name=wrapok]").val(data.wrapok);
					$("#wrapping [name=crease]").val(data.crease);
					$("#wrapping [name=spot]").val(data.spot);
					$("#wrapping [name=blot]").val(data.blot);
					break;
				case "cutting":
					$("#cutting [name=date]").val(data.date);
					$("#cutting [name=product]").val(data.product);
					$("#cutting [name=name]").val(data.name);
					$("#cutting [name=inspector]").val(data.inspector);
					$("#cutting [name=remarks]").val(data.remarks);
					$("#cutting [name=score]").html(data.score);
					$("#cutting [name=quality]").html(data.quality);

					$("#cutting [name=incision]").val(data.incision);
					$("#cutting [name=seam]").val(data.seam);
					$("#cutting [name=empty]").val(data.empty);
					$("#cutting [name=crack]").val(data.crack);
					$("#cutting [name=headend]").val(data.headend);
					$("#cutting [name=crease]").val(data.crease);
					$("#cutting [name=spot]").val(data.spot);
					$("#cutting [name=blot]").val(data.blot);
					break;
				case "storage":
					$("#storage [name=date]").val(data.date);
					$("#storage [name=product]").val(data.product);
					$("#storage [name=incharge]").val(data.incharge);
					$("#storage [name=inspector]").val(data.inspector);
					$("#storage [name=remarks]").val(data.remarks);
					$("#storage [name=score]").html(data.score);
					$("#storage [name=batchok]").html(data.batchok);
					for (var i=1; i<=8; i++) {
						$("#storage [name=m"+i+"]").val(data["m"+i]);
					}
					$("#storage [name=start]").val(data.start);
					$("#storage [name=end]").val(data.end);
					$("#storage [name=moistmin]").val(data.moistmin);
					$("#storage [name=moistmax]").val(data.moistmax);
					$("#storage [name=deworm]").val(data.deworm);
					$("#storage [name=headend]").val(data.headend);
					$("#storage [name=empty]").val(data.empty);
					$("#storage [name=seam]").val(data.seam);
					$("#storage [name=hole]").val(data.hole);
					$("#storage [name=dopant]").val(data.dopant);
					$("#storage [name=break]").val(data.break);
					break;
				case "defects":
					$("#defects [name=date]").val(data.date);
					$("#defects [name=product]").val(data.product);
					$("#defects [name=sample]").val(data.sample);
					$("#defects [name=inspector]").val(data.inspector);
					$("#defects [name=remarks]").val(data.remarks);
					$("#defects [name=sscore]").html(data.sscore);
					$("#defects [name=pscore]").html(data.pscore);
					$("#defects [name=bscore]").html(data.bscore);
					for (var i=1; i<=3; i++) {
						$("#defects [name=srd"+i+"]").val(data["srd"+i]);
						$("#defects [name=srd"+i+"_nr]").val(data["srd"+i+"_nr"]);
						$("#defects [name=scd"+i+"]").val(data["scd"+i]);
						$("#defects [name=scd"+i+"_nr]").val(data["scd"+i+"_nr"]);
						$("#defects [name=ssd"+i+"]").val(data["ssd"+i]);
						$("#defects [name=ssd"+i+"_nr]").val(data["ssd"+i+"_nr"]);
						$("#defects [name=spd"+i+"]").val(data["spd"+i]);
						$("#defects [name=spd"+i+"_nr]").val(data["spd"+i+"_nr"]);
						$("#defects [name=ppd"+i+"]").val(data["ppd"+i]);
						$("#defects [name=ppd"+i+"_nr]").val(data["ppd"+i+"_nr"]);
						$("#defects [name=pm"+i+"]").val(data["pm"+i]);
						$("#defects [name=pm"+i+"_nr]").val(data["pm"+i+"_nr"]);
						$("#defects [name=bsd"+i+"]").val(data["bsd"+i]);
						$("#defects [name=bsd"+i+"_nr]").val(data["bsd"+i+"_nr"]);
						$("#defects [name=bb"+i+"]").val(data["bb"+i]);
						$("#defects [name=bb"+i+"_nr]").val(data["bb"+i+"_nr"]);
						$("#defects [name=bm"+i+"]").val(data["bm"+i]);
						$("#defects [name=bm"+i+"_nr]").val(data["bm"+i+"_nr"]);
					}
					$("#defects [name=sjob]").val(data.sjob);
					$("#defects [name=sjudge]").val(data.sjudge);
					$("#defects [name=sremarks]").val(data.sremarks);
					$("#defects [name=pjob]").val(data.pjob);
					$("#defects [name=pjudge]").val(data.pjudge);
					$("#defects [name=premarks]").val(data.premarks);
					$("#defects [name=bjob]").val(data.bjob);
					$("#defects [name=bjudge]").val(data.bjudge);
					$("#defects [name=bremarks]").val(data.bremarks);
					break;
				case "formulas":
					$("#formulas [name=l_outlow]").val(data.l_outlow);
					$("#formulas [name=l_outhigh]").val(data.l_outhigh);
					$("#formulas [name=l_inspec]").val(data.l_inspec);
					$("#formulas [name=c_outlow]").val(data.c_outlow);
					$("#formulas [name=c_outhigh]").val(data.c_outhigh);
					$("#formulas [name=c_inspec]").val(data.c_inspec);
					$("#formulas [name=w_outlow]").val(data.w_outlow);
					$("#formulas [name=w_outhigh]").val(data.w_outhigh);
					$("#formulas [name=w_inspec]").val(data.w_inspec);
					$("#formulas [name=p_outlow]").val(data.p_outlow);
					$("#formulas [name=p_outhigh]").val(data.p_outhigh);
					$("#formulas [name=p_inspec]").val(data.p_inspec);
					$("#formulas [name=m_outlow]").val(data.m_outlow);
					$("#formulas [name=m_outhigh]").val(data.m_outhigh);
					$("#formulas [name=m_inspec]").val(data.m_inspec);
					$("#formulas [name=m_2inspec]").val(data.m_2inspec);
					$("#formulas [name=r_batch_score]").val(data.r_batch_score);
					$("#formulas [name=r_batch_quality]").val(data.r_batch_quality);
					$("#formulas [name=w_batch_score]").val(data.w_batch_score);
					$("#formulas [name=w_batch_quality]").val(data.w_batch_quality);
					$("#formulas [name=c_batch_score]").val(data.c_batch_score);
					$("#formulas [name=c_batch_quality]").val(data.c_batch_quality);
					$("#formulas [name=s_batch_score]").val(data.s_batch_score);
					$("#formulas [name=s_batch_quality]").val(data.s_batch_quality);
					break;
			}		
		});
	}
}
		
function show_history() {
	var source = sprintf("server/list_history.php?lang=%s&tab=%s", $.jStorage.get("lang"), $.jStorage.get("handmade_lasttab"));
	
	$("#history #lijst thead").empty();
	$("#history #lijst thead").append('<th style="display:none">ID</th>');
	$("#history #lijst thead").append('<th><label class="DATE"></label></th>'); 
	$("#history #lijst thead").append('<th><label class="PRODUCT"></label></th>');

	switch ($.jStorage.get("handmade_lasttab")) {
		case "rolling_sub_tab":
		case "wrapping_sub_tab":
		case "cutting_sub_tab":
			$("#history #lijst thead").append('<th><label class="SAMPLINGPOINT"></label></th>');
			$("#history #lijst thead").append('<th><label class="BATCH_SCORE"></label></th>');
			$("#history #lijst thead").append('<th><label class="BATCH_QUALITY"></label></th>');
			$("#history #lijst thead").append('<th><label class="INSPECTOR"></label></th>');
			break;
		case "storage_sub_tab":
			$("#history #lijst thead").append('<th><label class="IN_CHARGE"></label></th>');
			$("#history #lijst thead").append('<th><label class="BATCH_SCORE"></label></th>');
			$("#history #lijst thead").append('<th><label class="BATCH_QUALITY_OK"></label></th>');
			$("#history #lijst thead").append('<th><label class="INSPECTOR"></label></th>');
			break;
		case "defects_sub_tab":
			$("#history #lijst thead").append('<th><label class="SAMPLING_FREQ"></label></th>');
			$("#history #lijst thead").append('<th><label class="STICK_PACKING_SCORE"></label></th>');
			$("#history #lijst thead").append('<th><label class="PACKING_SCORE"></label></th>');
			$("#history #lijst thead").append('<th><label class="SLEEVEBOX_SCORE"></label></th>');
			$("#history #lijst thead").append('<th><label class="INSPECTOR"></label></th>');
			break;
	}

	fill_labels();
	
	$.getJSON(source,	function(data) {
		$('#history #lijst tbody').empty();
		$.each(data.records, function (key, regel) {
			$('#history #lijst tbody').append(regel);
		});		
	})		
}

// fill the specs list
function show_specs() {
	var element = $('#specs #products tbody');
	
	$.getJSON("server/list_specs.php",	function(data) {
		element.empty();
		$.each(data.records, function (key, regel) {
			element.append(regel);
		});		
	})	

	$("#specs #products tr:eq(0)").addClass('row_selected');	// select the first row
	
	// fill the spec history in the second list
	show_spec_history(element.find("td:first center").html());
}

// fill the spec-history list
function show_spec_history(id) {
	var element = $('#specs #history tbody');
	
	$.getJSON("server/list_spec_history.php", {
		id: id
	}, function(data) {
		element.empty();
		$.each(data.records, function (key, regel) {
			element.append(regel);
		});		
	})
	
	$("#specs #history tr:eq(0)").addClass('row_selected');	// select the first row		
	
	show_spec_details(id);
}

// display all the details of the selected specification
function show_spec_details(id) {
	var sql = sprintf('SELECT * FROM gwc_handmade.specs WHERE id=%s', id);

	if (id != null)	{
		$.getJSON('server/get_record.php', { 
			query: sql
		}, function(data) {
			$("#specs [name=name]").val(data.name);
			$("#specs [name=nr]").val(data.nr);
			$("#specs [name=rol_l_min]").val(data.rol_l_min);
			$("#specs [name=rol_l_max]").val(data.rol_l_max);
			$("#specs [name=rol_c_min]").val(data.rol_c_min);
			$("#specs [name=rol_c_max]").val(data.rol_c_max);
			$("#specs [name=rol_w_min]").val(data.rol_w_min);
			$("#specs [name=rol_w_max]").val(data.rol_w_max);
			$("#specs [name=rol_p_min]").val(data.rol_p_min);
			$("#specs [name=rol_p_max]").val(data.rol_p_max);
			$("#specs [name=rol_surfout]").val(data.rol_surfout);
			$("#specs [name=rol_tightout]").val(data.rol_tightout);
			$("#specs [name=rol_blendacc]").val(data.rol_blendacc);
			$("#specs [name=rol_pdacc]").val(data.rol_pdacc);
			$("#specs [name=moist_s_min]").val(data.moist_s_min);
			$("#specs [name=moist_s_max]").val(data.moist_s_max);
		});	
	}
}



