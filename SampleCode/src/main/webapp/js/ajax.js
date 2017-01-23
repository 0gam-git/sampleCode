function callServer() {

	$.ajax({
		url : "/sample/call",
		processData : false,
		type : 'POST',
		contentType : "text/html; charset=utf-8",
		beforeSend : function() {
			$("#spinner").show();
		},
		success : function(response) {
			$("#spinner").fadeOut('slow')

			$("#msg").append(response + "\n");
			$("#msg").show();
		},

		error : function(request, status, error) {
			$("#spinner").fadeOut('slow')
		},
		complete : callServer

	});
}

function sendMessage(message) {

	$.ajax({
		url : "/sample/push/" + message,
		processData : false,
		type : 'POST',

		success : function(response) {

		},

		error : function(request, status, error) {

		},

	});
}