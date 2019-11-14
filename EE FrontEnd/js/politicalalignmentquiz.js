
function sendUserIssues() {
    let response;
    var issues = "";

    var criminal_justice = document.getElementById("criminal_justice").value;
    if (criminal_justice === "Yes"){
        issues += "criminal_justice,";
    }
    var economy = document.getElementById("economy").value;
    if (economy === "Yes"){
        issues+="economy,";
    }
    var education = document.getElementById("education").value;
    if (education === "Yes"){
        issues+="education,";
    }
    var energy_and_environment = document.getElementById("energy_and_environment").value;
    if (energy_and_environment === "Yes"){
        issues+="energy_and_environment,";
    }
    var gun_control = document.getElementById("gun_control").value;
    if (gun_control === "Yes"){
        issues+="gun_control,";
    }
    var healthcare = document.getElementById("healthcare").value;
    if (healthcare === "Yes"){
        issues+="healthcare,";
    }
    var immigration = document.getElementById("immigration").value;
    if (immigration === "Yes"){
        issues+="immigration,";
    }
    var military = document.getElementById("military").value;
    if (military === "Yes"){
        issues+="military,";
    }
    var taxes = document.getElementById("taxes").value;
    if (taxes === "Yes"){
        issues+="taxes,";
    }
    var technology = document.getElementById("technology").value;
    if (technology === "Yes"){
        issues+="technology,";
    }
    var trade = document.getElementById("trade").value;
    if (trade === "Yes"){
        issues+="trade,";
    }

    issues = issues.substring(0,issues.length - 1);


    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com/users/setPreferences/";


    if(issues === ""){
        alert("Please choose at least one issue");
    }
    else{
        try{
            $.get(baseURL + issues, function(data){
                alert(data);
            });
        } catch (e){
            console.log(e);
        }
    }

}