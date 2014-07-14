$.ajax({
    url: "Data/data.js",
    type: "GET",
    contentType: "application/json",
    success: success,
    error: error
});

function success(data) {
    var data = JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
        $("#tableStudents tbody").append("<tr><td>" +
            data[i].firstName + "</td><td>" +
            data[i].lastName + "</td><td>" +
            data[i].grade + "</td></tr>");
    }
}

function error(err) {
    document.body.innerHTML = err.responseText;
}