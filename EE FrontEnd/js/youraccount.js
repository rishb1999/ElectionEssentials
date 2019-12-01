
function sendUserLoginDetails(){
    let response;

    var first_Name = document.getElementById("firstName").value;
    var last_Name = document.getElementById("lastName").value;
    var email_ = document.getElementById("email").value;
    var time_Zone = document.getElementById("user_time_zone").value;
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;
    var confirm_Password = document.getElementById("confirmPassword").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/create/";

    while(time_Zone.includes(" ")) 
    {
  	    time_Zone = time_Zone.replace(" ", "%20");
    }
    var dataa= first_Name+ "," +last_Name+ "," + email_+ "," + time_Zone +"," + username_+ "," + password_ + "," + confirm_Password;
    query = query+dataa;

    console.log(baseURL + query);
    try{
        $.get(baseURL + query, function(data) {
            data = data.toLowerCase();
            console.log(data);
             response = data;
             if(data == "success") {
                 window.location.href = "politicalalignmentquiz.html";
             } else{
                 alert(response + " is incorrect");
             }
        });
    }catch(e) {
        console.log(e);
    }
}

function verifyLoginSuccess(){
    var username_ = document.getElementById("username").value;
    var password_ = document.getElementById("password").value;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/login/";
    var dataa = username_+","+password_;
    query = query+dataa;

    console.log(baseURL + query);
    try{
        $.get(baseURL + query, function(data) {
            console.log(data);
            if(data === "INVALID USERNAME" || data === "INVALID PASSWORD"){
                alert(data);
            }
            else{
                //set window local storage to user id
                //alert("success");
                window.sessionStorage.setItem("id", data);
                
                
                window.sessionStorage.setItem("username", username_);
                window.sessionStorage.setItem("password", password_);
                alert("Login Successful");
                window.location.href = "politicalalignmentquiz.html";
            }
            
        });
    } catch(e){
        console.log(e);
        alert(e);
    }


        // for(var x = 0; x < data.length; x++) {
        //     if(data[x]["userName"] == username_) {
        //         if(data[x]["password"] == password_) {
        //             window.location.href = "politicalalignmentquiz.html";
        //         } else {
        //             alert("INVALID LOGIN (WRONG PASSWORD)");
        //         }
        //         foundUsername = true;
        //     }
        // }
        // if(foundUsername == false) {
        //     alert("INVALID LOGIN (WRONG USERNAME)");
        // }

}

function removeSessionData() {
    alert("Logout Successful");
    sessionStorage.clear();
    window.location.href = "homepage.html";
}