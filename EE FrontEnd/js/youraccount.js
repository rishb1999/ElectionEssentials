let response;
function sendUserLoginDetails(){
    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var email_ = document.getElementById("email").value;
    var time_Zone = document.getElementById("user_time_zone").value;
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;
    var confirm_Password = document.getElementById("confirmPassword").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    //var baseURL = "http://localhost:8080"
    var query = "/users/create/";

    while(time_Zone.includes(" ")) 
    {
  	    time_Zone = time_Zone.replace(" ", "%20");
    }

    var dataa= first_Name+ "," +last_Name+ "," + email_+ "," + time_Zone +"," + username_+ "," + password_ + "," + confirm_Password;
    query = query+dataa;
   
   /* $.ajax({
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
            //console.log(data);
            alert("Error Creating Account");
            alert(data);
        }
    });*/
    console.log(baseURL + query);
    try{
        $.get(baseURL + query, function(data) {
             response = data;
             if(data == "SUCCESS") {
                 window.location.href = "politicalalignmentquiz.html";
             }
        });
    }catch(e) {
        console.log(e);
        console.log("YOURE AN IDIOT");
    }
    console.log(response);
}

function verifyLoginSuccess(){
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    //var baseURL = "http://localhost:8080"
    var query = "/users/";
    var found = false;
    //var URL = baseURL + query;

    $.get(baseURL + query, function(data) {
        for(var x = 0; x < data.length; x++) {
            if(data[x]["userName"] == username_) {
                if(data[x]["password"] == password_) {
                    window.location.href = "politicalalignmentquiz.html";
                } else {
                    alert("INVALID LOGIN (WRONG PASSWORD)");
                }
                found = true;
            }
        }
        if(found == false) {
            alert("INVALID LOGIN (WRONG USERNAME)");
        }
   });

}