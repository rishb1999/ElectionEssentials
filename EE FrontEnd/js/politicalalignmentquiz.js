let response;

function sendUserIssues() {
    var criminal_justice = document.getElementById("criminal_justice").value;
    var economy = document.getElementById("economy").value;
    var education = document.getElementById("education").value;
    var energy_and_environment = document.getElementById("energy_and_environment").value;
    var gun_control = document.getElementById("gun_control").value;
    var healthcare = document.getElementById("healthcare").value;
    var immigration = document.getElementById("immigration").value;
    var military = document.getElementById("military").value;
    var taxes = document.getElementById("taxes").value;
    var technology = document.getElementById("technology").value;
    var trade = document.getElementById("trade").value;

    var currentLocation = window.location.href;


    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "blah";


    $.get(baseURL + query, function(data){

    });
}