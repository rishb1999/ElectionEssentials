$(document).ready(function(){

    if (window.sessionStorage.getItem("id") == null)
    {
        //Main Div
        var mainDiv = document.getElementById("mainDiv");

            //Card Row 1
            var cardRow = document.createElement("div");
            cardRow.classList.add("row");

                //Card Col 1.1
                var cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    var cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "CriminalJustice");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        var inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "CriminalJustice.html";
                        inside.innerHTML = "CriminalJustice<img src=\"img/CriminalJustice.svg\" class=\"image\">";

                        var cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Criminal Justice</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        
                //Card Col 1.2
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Economy");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Economy.html";
                        inside.innerHTML = "Economy<img src=\"img/Economy.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Economy</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
                //Card Col 1.3
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Education");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Education.html";
                        inside.innerHTML = "Education<img src=\"img/Education.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Education</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        mainDiv.appendChild(cardRow);



            //Card Row 2
            cardRow = document.createElement("div");
            cardRow.classList.add("row");

                //Card Col 2.1
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "EnergyEnvironment");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "EnergyEnvironment.html";
                        inside.innerHTML = "EnergyEnvironment<img src=\"img/EnergyEnvironment.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Energy &amp Environment</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        
                //Card Col 2.2
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "GunControl");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "GunControl.html";
                        inside.innerHTML = "GunControl<img src=\"img/GunControl.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Gun Control</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
                //Card Col 2.3
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "HealthCare");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "HealthCare.html";
                        inside.innerHTML = "HealthCare<img src=\"img/HealthCare.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Health Care</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        var space = document.createElement("br");
        mainDiv.appendChild(space);
        mainDiv.appendChild(cardRow);

            //Card Row 3
            cardRow = document.createElement("div");
            cardRow.classList.add("row");

                //Card Col 3.1
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Immigration");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Immigration.html";
                        inside.innerHTML = "Immigration<img src=\"img/Immigration.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Immigration</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        
                //Card Col 3.2
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Infrastructure");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Infrastructure.html";
                        inside.innerHTML = "Infrastructure<img src=\"img/Infrastructure.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Infrastructure</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
                //Card Col 3.3
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Military");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Military.html";
                        inside.innerHTML = "Military<img src=\"img/Military.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Military</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        space = document.createElement("br");
        mainDiv.appendChild(space);
        mainDiv.appendChild(cardRow);

            //Card Row 4
            cardRow = document.createElement("div");
            cardRow.classList.add("row");

                //Card Col 4.1
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Taxes");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "taxes.html";
                        inside.innerHTML = "Taxes<img src=\"img/Taxes.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Taxes</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        
                //Card Col 4.2
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Technology");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "technology.html";
                        inside.innerHTML = "Technology<img src=\"img/Technology.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Technology</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
                //Card Col 4.3
                cardCol = document.createElement("div");
                cardCol.classList.add("col-md-4");

                    cardElement = document.createElement("div");
                    cardElement.setAttribute("id", "Trade");
                    cardElement.classList.add("card");
                    cardElement.style.width = "22rem";

                        inside = document.createElement("a");
                        inside.style.color = "#ffffff";
                        inside.href = "Trade.html";
                        inside.innerHTML = "Trade<img src=\"img/Trade.svg\" class=\"image\">";

                        cardElementBody = document.createElement("div");
                        cardElementBody.classList.add("card-body");
                        cardElementBody.innerHTML = "<h3 class=\"card-title\">Trade</h3>";
        
                    cardElement.appendChild(inside);
                    cardElement.appendChild(cardElementBody);
                cardCol.appendChild(cardElement);
            cardRow.appendChild(cardCol);
        
        space = document.createElement("br");
        mainDiv.appendChild(space);
        mainDiv.appendChild(cardRow);
        space = document.createElement("br");
        mainDiv.appendChild(space);
        
    }
    else
    {
        //Main Div
        var mainDiv = document.getElementById("mainDiv");
        
        if (str.includes("criminal&justice"))
        {
            option = document.createElement("option");
            option.text = "Criminal Justice";
            select.add(option);
        }    
        if (str.includes("economy"))
        {
            option = document.createElement("option");
            option.text = "Economy";
            select.add(option);
        }
        if (str.includes("education"))
        {
            option = document.createElement("option");
            option.text = "Education";
            select.add(option);
        }
        if (str.includes("energy&and&environment"))
        {
            option = document.createElement("option");
            option.text = "Energy & Environment";
            select.add(option);
        }
        if (str.includes("gun&control"))
        {
            option = document.createElement("option");
            option.text = "Gun Control";
            select.add(option);
        }
        if (str.includes("healthcare"))
        {
            option = document.createElement("option");
            option.text = "Healthcare";
            select.add(option);
        }
        if (str.includes("immigration"))
        {
            option = document.createElement("option");
            option.text = "Immigration";
            select.add(option);
        }
        if (str.includes("infrastructure"))
        {
            option = document.createElement("option");
            option.text = "Infrastructure";
            select.add(option);
        }
        if (str.includes("military"))
        {
            option = document.createElement("option");
            option.text = "Military";
            select.add(option);
        }
        if (str.includes("taxes"))
        {
            option = document.createElement("option");
            option.text = "Taxes";
            select.add(option);
        }
        if (str.includes("technology"))
        {
            option = document.createElement("option");
            option.text = "Technology";
            select.add(option);
        }
        if (str.includes("trade"))
        {
            option = document.createElement("option");
            option.text = "Trade";
            select.add(option);
        }
    }

});
            
function removeSessionData()
{
    sessionStorage.clear();
}