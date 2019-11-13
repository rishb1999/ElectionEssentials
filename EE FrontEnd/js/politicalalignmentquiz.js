let response;

function sendUserIssues() {
    var issues = "";

    var criminal_justice = document.getElementById("criminal_justice").value;
    if (criminal_justice === "Yes"){
        issues.concat("criminal_justice,");
    }
    var economy = document.getElementById("economy").value;
    if (economy === "Yes"){
        issues.concat("economy,");
    }
    var education = document.getElementById("education").value;
    if (education === "Yes"){
        issues.concat("education,");
    }
    var energy_and_environment = document.getElementById("energy_and_environment").value;
    if (energy_and_environment === "Yes"){
        issues.concat("energy_and_environment,");
    }
    var gun_control = document.getElementById("gun_control").value;
    if (gun_control === "Yes"){
        issues.concat("gun_control,");
    }
    var healthcare = document.getElementById("healthcare").value;
    if (healthcare === "Yes"){
        issues.concat("healthcare,");
    }
    var immigration = document.getElementById("immigration").value;
    if (immigration === "Yes"){
        issues.concat("immigration,");
    }
    var military = document.getElementById("military").value;
    if (military === "Yes"){
        issues.concat("military,");
    }
    var taxes = document.getElementById("taxes").value;
    if (taxes === "Yes"){
        issues.concat("taxes,");
    }
    var technology = document.getElementById("technology").value;
    if (technology === "Yes"){
        issues.concat("technology,");
    }
    var trade = document.getElementById("trade").value;
    if (trade === "Yes"){
        issues.concat("trade,");
    }

    issues = issues.substring(0,issues.length - 1);


    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com/users/setPreferences/";


    if(issues === ""){
        alert("Please choose at least one issue");
    }
    else{
        $.get(baseURL + issues, function(data){
            alert(data);
        });
    }

}