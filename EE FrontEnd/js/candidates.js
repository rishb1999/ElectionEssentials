$(document).ready(function(){
    $("#go").click(function () {
        var candidateName = document.getElementById("tmAbout-search").value;
        var nameSplit = candidateName.split(" ");
        console.log(nameSplit[0] + " " + nameSplit[1]);
        var key = "GzUkiqBYceNq107cHYQE8qabiHNXG1VUCtOTJWTP";
        var url = "https://api.open.fec.gov/v1/candidates/?sort=name&per_page=20&sort_null_only=false&api_key=" + key + 
        "&page=1&sort_nulls_last=false&sort_hide_null=false&name=" + nameSplit[0] + "%20" + nameSplit[1];
        console.log(url);

        try {
            $.getJSON(url, function (data) {//gets JSON from the API server
                if(data["results"].length !=0) {
                    document.getElementById("politicalparty").innerHTML = "Political Party: " + data["results"]["0"]["party"];
                    var currentElection = "";
                    var found = false;
                    var years = "";
                    var office = "";
                    var popa = "";
                    var pastElections = "";
                    var count = 0;
                    var poParty = "";
                    for(var prop in data["results"]) {
                        //console.log(data["results"][prop]["election_years"]);
                        office += data["results"][prop]["office_full"];
                        popa += data["results"][prop]["party_full"];
                        for(var i in data["results"][prop]["election_years"]) {
                            if(data["results"][prop]["election_years"][i] == "2019" || data["results"][prop]["election_years"][i] == "2020") {
                                //console.log("FOUND IT");
                                found = true;
                                currentElection = currentElection + "Year: 2020" + "<br>";
                                currentElection = currentElection + "Office: " + data["results"][prop]["office_full"] + "<br>";
                                currentElection = currentElection + "Candidate ID: " + data["results"][prop]["candidate_id"]+ "<br>";
                                currentElection = currentElection + "Currently Inactive: " + data["results"][prop]["candidate_inactive"]+ "<br>";
                                document.getElementById("politicalparty").innerHTML = "Current Political Party: " + data["results"][prop]["party"];
                                document.getElementById("curElection").innerHTML = currentElection;


                            } 
                            years += data["results"][prop]["election_years"][i] +  ",";
                        }
                        if(count < 3) {
                            pastElections += "Years: " + years + "<br>";
                            pastElections += "Office: " + office + "<br>";
                            count++;
                        }
                        poParty += "Years: " + years + "<br>";
                        poParty += "Party: " + popa + "<br>";
                        years = "";
                        office = "";
                        popa = "";

                    }
                    if(found == false) {
                        document.getElementById("curElection").innerHTML = "This candidate is not currently standing for election";
                    }
                    document.getElementById("pElec").innerHTML = pastElections;
                    document.getElementById("popo").innerHTML = poParty;

                    document.getElementById("name_result").innerHTML = candidateName;
                    document.getElementById("currentInfo").innerHTML = "Current Information:";
                    document.getElementById("pastInfo").innerHTML = "Past Information:"

                } else {
                    alert("Please enter a valid Candidate Name");
                }

            });
        }
        catch (e) {
            alert("Please enter a valid Candidate Name");
        }

    });
});

// function removeSessionData()
// {
//     sessionStorage.clear();
// }