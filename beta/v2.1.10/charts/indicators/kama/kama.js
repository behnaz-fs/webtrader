define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,e){require(["css!charts/indicators/kama/kama.css"]),require(["text!charts/indicators/kama/kama.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g.kama;f.attr("title",i.long_display_name),f.find(".kama-description").html(i.description),f.find("input[type='button']").button(),f.find("#kama_stroke").colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#kama_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#kama_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var j="Solid";a("#kama_dashStyle").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#kama_dashStyle .dd-selected-image").css("max-width","115px"),j=b.selectedData.value}}),a("#kama_dashStyle .dd-option-image").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"kama-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".kama_input_width_for_period").each(function(){var b=a(this);return _.isInteger(_.toNumber(b.val()))&&_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),b.val(b.prop("defaultValue")),void(c=!1))}),c){var e={period:parseInt(f.find("#kama_period").val()),fastPeriod:parseInt(f.find("#kama_fast_period").val()),slowPeriod:parseInt(f.find("#kama_slow_period").val()),stroke:h,strokeWidth:parseInt(f.find("#kama_strokeWidth").val()),dashStyle:j,appliedTo:parseInt(f.find("#kama_appliedTo").val())};d&&d(),a(a(".kama").data("refererChartID")).highcharts().series[0].addIndicator("kama",e),b.call(f)}}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(e)&&e(c)})}var d=null;return{open:function(b,e){var f=function(){d=e,a(".kama").data("refererChartID",b).dialog("open")};0==a(".kama").length?c(b,this.open):f()}}});