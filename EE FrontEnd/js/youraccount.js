
function sendUserLoginDetails(){
    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var company_ = document.getElementById("company").value;
    var email_ = document.getElementById("email").value;
    var time_Zone = document.getElementById("user_time_zone").value;
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;
    var confirm_Password = document.getElementById("confirmPassword").value;

    var baseURL = "http://localhost:8080";
    var query = "/users/";
    var URL = baseURL + query;

    var data = {
        firstName : first_Name,
        lastName : last_Name,
        company : company_,
        email : email_,
        timeZone : time_Zone,
        username : username_,
        password : password_,
        confirmPassword : confirm_Password
    };

    $.post(URL, data, function(data) {
        alert(data)
    }).fail(function(){
        alert("error");
    });
}

function verifyLoginSuccess(){
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;

    var baseURL = "http://localhost:8080";
    var query = "idk";
    var URL = baseURL + query;

    var data = {
        username : username_,
        password : password_
    }

    $.post(URL, data, function(data) {
        alert(data);
    }).fail(function(){
        alert("error");
    });
}