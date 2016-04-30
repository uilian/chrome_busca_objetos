var defaultId;

$(document).ready( function() {
	defaultId= "";
	window.addEventListener("load", loadOptions);
	//$("#saveOpts").addEventListener("click",saveOptions);
	$('#saveOpts').on('click', saveOptions);
	//$("#eraseOpts").addEventListener("click",eraseOptions);
	$('#eraseOpts').on('click', eraseOptions);
});



function loadOptions() {
	var idList = localStorage["objIdentifiers"];
	if (idList == undefined) {
		idList = defaultId;
	}
	$("#identifiers").val(idList);
}

function saveOptions() {
	var idList = $("#identifiers").val();
	localStorage["objIdentifiers"] = idList;	
   $("#message").fadeIn(800).delay(3000).fadeOut(800);
}

function eraseOptions() {
	bootbox.confirm(
		"Todos os itens ser&atilde;o removidos, deseja continuar?", 
		function(result) {
			if (result){
				localStorage.removeItem("objIdentifiers");				
				$("#identifiers").val("");
				$("#message").fadeIn(800).delay(3000).fadeOut(800);
			}
		}
	);
}