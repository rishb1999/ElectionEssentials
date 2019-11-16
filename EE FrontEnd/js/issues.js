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
        var str = window.sessionStorage.getItem("issues");
        
        var index = 0;
        var space = document.createElement("br");
        
        //Main Div
        var mainDiv = document.getElementById("mainDiv");
        
        //Card Row
        var cardRow = document.createElement("div");
        cardRow.classList.add("row");
        
        if (str.includes("criminal&justice"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }    
        if (str.includes("economy"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("education"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("energy&and&environment"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("gun&control"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("healthcare"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("immigration"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("infrastructure"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("military"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("taxes"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("technology"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        if (str.includes("trade"))
        {
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
            
            index++;
            if ((index % 3) == 0)
            {
                mainDiv.appendChild(cardRow);
                cardRow = document.createElement("div");
                cardRow.classList.add("row");
                space = document.createElement("br");
                mainDiv.appendChild(space);
            }
        }
        
        mainDiv.appendChild(cardRow);
        space = document.createElement("br");
        mainDiv.appendChild(space);
    }

});
            
function removeSessionData()
{
    sessionStorage.clear();
}