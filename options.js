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
	$("#message").innerHTML = "Salvo com sucesso!";
}

function eraseOptions() {
	localStorage.removeItem("objIdentifiers");
	location.reload();
}