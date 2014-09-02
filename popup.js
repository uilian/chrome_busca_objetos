$(document).ready( function(){
	window.addEventListener("load", initialize);
});

function initialize(){
	var idList = localStorage["objIdentifiers"];
	var url = "http://websro.correios.com.br/sro_bin/txect01$.Inexistente?P_LINGUA=001&P_TIPO=002&P_COD_LIS=";
	url = url + idList;
	console.log(url);
	$("#iContent").attr('src', url);			
}
