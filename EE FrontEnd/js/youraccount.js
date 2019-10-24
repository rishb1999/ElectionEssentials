function sendUserLoginDetails(){
    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var company_ = document.getElementById("company").value;
    var email_ = document.getElementById("email").value;
    var time_Zone = document.getElementById("userr_time_zone").value;
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;
    var confirm_Password = document.getElementById("confirmPassword").value;

    var URL = "something.com";

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

    $.post(URL, data)
        .fail(function() {
            alert("Please try again.");
        });
}