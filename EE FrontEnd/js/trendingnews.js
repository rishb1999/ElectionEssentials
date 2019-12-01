
function loadOptions(){

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/getPreferences/" + window.localStorage.id;
    
     try{
        fetch(baseURL+query, function(data){
             var select = document.getElementById("news-select");
             select.options.length = data.length;
             for(var i=0; i < data.length; i++){
                 var option = document.createElement("OPTION");
                 option.value = data[i];
                 option.label = data[i];
                 select.options[i] = option;
             }
         });
     } catch(e){
         console.log(e);
         alert("error getting pref");
    }
}

var options;

function displayOptions(options){
    var select = document.getElementById("news-select");
    var option = document.createElement("option");

    options.forEach(function(element){
        option = document.createElement("option");
        option.text = element;
        select.add(option);
    });
}

$(document).ready(function(){
    
    if (window.sessionStorage.getItem("id") == null)
    {
        options = ["Criminal Justice", "Economy", "Education", "Energy & Environment",
            "Gun Control", "Healthcare", "Immigration", "Infrastructure", "Military",
            "Taxes", "Technology", "Trade"];

        displayOptions(options);

        // option = document.createElement("option");
        // option.text = "Criminal Justice";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Economy";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Education";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Energy & Environment";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Gun Control";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Healthcare";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Immigration";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Infrastructure";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Military";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Taxes";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Technology";
        // select.add(option);
        //
        // option = document.createElement("option");
        // option.text = "Trade";
        // select.add(option);
    }
    else
    {

        var str = window.sessionStorage.getItem("issues");

        // var userPref = str.split(",");
    
        var select = document.getElementById("news-select");
        var option = document.createElement("option");

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

function sendNews()
{
    var issue = document.getElementById("news-select").value;
    console.log(issue);

    var url = 'https://newsapi.org/v2/top-headlines?' +
          'q=' + issue + '&'+
          'language=en&' +
          'apiKey=68e746d6fb344e0995830a55620da67f';
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJSON) {
            if(myJSON.status=="ok")
            {
                //var newsList = document.getElementById("list-div");
                var newsList = $("#list-div");
                
                //Clear Div
                //newsList.innerHTML = "";
                newsList.html("");      
                
                //News Artciles Title
                var titleList = document.createElement('ul');
                titleList.classList.add("list-group");
                var titleListElement = document.createElement("li");
                titleListElement.classList.add("list-group-item");
                var titleTextNode = document.createTextNode("News Articles");
                var bold = document.createElement("strong");
                //bold.style.textAlign = "center";
                bold.appendChild(titleTextNode);
                titleListElement.appendChild(bold);
                titleList.appendChild(titleListElement);
                
                titleList.style.textAlign = "center";
                titleList.style.fontSize = "30px";
                
                document.getElementById("list-div").appendChild(titleList);
                

                //Create List Element
                var list = document.createElement('ul');
                //Add list-group class to list element
                list.classList.add("list-group");
                
                var articles = myJSON.articles;
                for (var i = 0; i < articles.length; i++)
                {
                    //Create List Item Element
                    var listElement = document.createElement("li");
                    //Add list-group-item class to list item element
                    listElement.classList.add("list-group-item");
                    var a = document.createElement("a");
                    var titleNode = document.createTextNode(articles[i].title + "\n");         
                    a.appendChild(titleNode);
                    a.href=articles[i].url;
                    listElement.appendChild(a);                                        
                    
                    if(articles[i].author != null)
                    {
                        var authorNode = document.createTextNode(" | " + articles[i].author + "\n");
                        listElement.appendChild(authorNode);
                    }
                    if(articles[i].description!=null)
                    {
                        var descriptionNode = document.createTextNode(" | " + articles[i].description + "\n");
                        listElement.appendChild(descriptionNode);
                    }
                    //Add Article to List
                    list.appendChild(listElement);     
                }         
                
                //Add List to Div
                document.getElementById("list-div").appendChild(list);
                  
            }
            else 
            {
                console.log("FAILED");
            }
        });
}