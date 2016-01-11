define(["indicator_base","highstock"],function(a){var b={},c={};return{init:function(){!function(a,d,e){function f(a,d){var f=this,g=f.chart;for(var h in c)if(c[h]&&c[h].options&&c[h].options.data&&c[h].options.data.length>0&&b[h].parentSeriesID==f.options.id&&c[h].chart===g){var i=f.options.data,j=b[h].period,k=e.findIndexInDataForTime(i,a);if(k>=1){var l=e.extractPrice(i,k)/e.extractPrice(i,k-j);l=e.toFixed(l,5),d?c[h].data[k].update({y:l}):c[h].addPoint([i[k].x||i[k][0],l],!0,!0,!1)}}}a&&!a.Series.prototype.addROCR&&(a.Series.prototype.addROCR=function(a){var f=this.options.id;a=d.extend({period:14,stroke:"red",strokeWidth:2,dashStyle:"line",levels:[],parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(h&&h.length>0){for(var i=[],j=0;j<h.length;j++)if(j>=a.period){var k=e.extractPrice(h,j)/e.extractPrice(h,j-a.period);isFinite(k)&&!isNaN(k)&&i.push([h[j].x||h[j][0],e.toFixed(k,5)])}else i.push([h[j].x||h[j][0],0]);var l=this.chart;b[g]=a,l.addAxis({id:"rocr"+g,title:{text:"ROCR ("+a.period+")",align:"high",offset:0,rotation:0,y:10,x:55},lineWidth:2,plotLines:a.levels},!1,!1,!1),e.recalculate(l);var m=this;c[g]=l.addSeries({id:g,name:"ROCR ("+a.period+")",data:i,type:"line",dataGrouping:m.options.dataGrouping,yAxis:"rocr"+g,opposite:m.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle},!1,!1),d(c[g]).data({isIndicator:!0,indicatorID:"rocr",parentSeriesID:a.parentSeriesID,period:a.period}),l.redraw()}return g},a.Series.prototype.removeROCR=function(a){var d=this.chart;b[a]=null,d.get(a).remove(!1),d.get("rocr"+a).remove(!1),c[a]=null,e.recalculate(d),d.redraw()},a.Series.prototype.preRemovalCheckROCR=function(a){return{isMainIndicator:!0,period:b[a]?b[a].period:void 0,isValidUniqueID:null!=b[a]}},a.wrap(a.Series.prototype,"addPoint",function(a,c,d,g,h){a.call(this,c,d,g,h),e.checkCurrentSeriesHasIndicator(b,this.options.id)&&f.call(this,c[0])}),a.wrap(a.Point.prototype,"update",function(a,c,d,g){a.call(this,c,d,g),e.checkCurrentSeriesHasIndicator(b,this.series.options.id)&&f.call(this.series,this.x,!0)}))}(Highcharts,jQuery,a)}}});