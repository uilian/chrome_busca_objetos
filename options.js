var defaultId= "";

function loadOptions() {
	var idList = localStorage["objIdentifiers"];

	if (idList == undefined) {
		idList = defaultId;
	}

	var textarea = document.getElementById("identifiers");
	textarea.value = idList;
}

function saveOptions() {
	var textarea = document.getElementById("identifiers");
	var idList = textarea.value;
	localStorage["objIdentifiers"] = idList;
	document.getElementById("message").innerHTML = "Salvo com sucesso!";
}

function eraseOptions() {
	localStorage.removeItem("objIdentifiers");
	location.reload();
}