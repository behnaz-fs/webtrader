define(["jquery","windows/windows","websockets/binary_websockets","jquery-ui","datatables","jquery-growl"],function(a,b,c){"use strict";function d(a){a.click(function(){i?i.moveToTop():g()})}function e(b){{var c=b.proposal_open_contract,d=c.contract_id,e=c.ask_price;c.bid_price}if(d&&j){var f=j.api().row("#"+d),g=f.data();if(!g)return;var h=g[3];g[3]=e,f.data(g);var i=a("#"+d).find("td:nth-child(4)").find("span");i.removeClass("red green").addClass(1*e>=1*h?"green":"red")}}function f(){c.send({balance:1}).then(function(a){var b=a.balance.currency,c=a.balance.balance;l.html("Account balance: <strong>"+b+" "+formatPrice(c)+"</strong>")})["catch"](function(b){a.growl.error({message:b.message})})}function g(){require(["css!portfolio/portfolio.css"]),c.send({balance:1}).then(function(d){var e=null,f=function(){"minimized"===i.dialogExtend("state")&&i.dialogExtend("restore"),e&&clearInterval(e),e=setInterval(h,6e4),h()};require(["trade/tradeConf"],function(a){a.events.on("open",f),a.events.on("close",f)}),i=b.createBlankWindow(a("<div/>"),{title:"Portfolio",width:700,minHeight:60,"data-authorized":"true",close:function(){require(["trade/tradeConf"],function(a){a.events.off("open",f),a.events.off("close",f)}),e&&clearInterval(e),e=null,c.send({forget_all:"proposal_open_contract"}).then(function(){k={}})["catch"](function(a){})},open:function(){h(),e=setInterval(h,6e4)},destroy:function(){j&&j.DataTable().destroy(!0),i=null,e&&clearInterval(e),e=null},refresh:f});var g=i.parent().find(".ui-dialog-title").addClass("with-content");l=a('<span class="span-in-dialog-header" />').insertAfter(g);var m=d.balance.currency;j=a("<table width='100%' class='portfolio-dialog display compact'/>"),j.appendTo(i),j=j.dataTable({data:[],columns:[{title:"Ref."},{title:"Contract Details"},{title:"Purchase",render:function(a){return m+' <span class="bold">'+a+"</span>"}},{title:"Indicative",render:function(a){return m+' <span class="bold">'+a+"</span>"}}],rowId:"4",paging:!1,ordering:!1,processing:!0}),j.parent().addClass("hide-search-input"),i.dialog("open")})["catch"](function(a){}),c.events.on("proposal_open_contract",e)}function h(){f();var b=a("#"+j.attr("id")+"_processing").show();c.send({portfolio:1}).then(function(d){var e=d.portfolio&&d.portfolio.contracts,f=e.map(function(a){return[a.transaction_id,a.longcode,formatPrice(a.buy_price),"0.00",a.contract_id]});j.api().rows().remove(),j.api().rows.add(f),j.api().draw(),b.hide();var g=function(b){var d=b.contract_id;k[d]!==!0&&(k[d]=!0,c.send({proposal_open_contract:1,contract_id:d})["catch"](function(b){td=a("#"+d).find("td:nth-child(4)"),td.attr("title","").tooltip({content:b.message}),k[d]=!1}))};e.forEach(g)})["catch"](function(c){j.api().rows().remove(),j.api().draw(),b.hide(),a.growl.error({message:c.message})})}var i=null,j=null,k={},l=null;return{init:d}});