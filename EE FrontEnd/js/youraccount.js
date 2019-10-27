
function sendUserLoginDetails(){
    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var email_ = document.getElementById("email").value;
    var time_Zone = document.getElementById("user_time_zone").value;
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;
    var confirm_Password = document.getElementById("confirmPassword").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/create";
    var URL = baseURL + query;

    var dataa= {
        "firstName" : first_Name,
        "lastName" : last_Name,
        "email" : email_,
        "timeZone" : time_Zone,
        "userName" : username_,
        "password" : password_,
        "confirmPassword" : confirm_Password
    }
    console.log(dataa);

    $.ajax({
        url: URL,
        type: 'GET',
        data: JSON.stringify(dataa),
        crossDomain: true,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log("Success "+data);
            alert("Successfully Created Account");
            alert(data);
        },
        error: function(data){
            console.log("Error in verify login success");
            console.log(data);
            alert("Error Creating Account");
            alert(data);
        }
    });
}

function verifyLoginSuccess(){
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/verify";
    var URL = baseURL + query;

    $.ajax({
        url: URL,
        type: 'GET',
        data: {
            "firstName" : null,
            "lastName" : null,
            "email" : null,
            "timeZone" : null,
            "userName" : username_,
            "password" : password_,
            "confirmPassword" : null
        },
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        dataType: 'json',
        success: function (data) {
            console.log("Success: "+ data);
            alert("Successfully Logged In");
            alert("Success"+data);
        },
        error: function(data){
            console.log("Error in verify login success");
            alert("Incorrect Login Information");
            alert("Failure"+data);
        }
    });
}