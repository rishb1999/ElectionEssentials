
function loadOptions(){

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var query = "/users/getPreferences";
    
    // try{
    //     $.get(baseURL+query, function(data){
    //         var select = document.getElementById("news-select");
    //         select.options.length = data.length;
    //         for(var i=0; i < data.length; i++){
    //             var option = document.createElement("OPTION");
    //             option.value = data[i];
    //             option.label = data[i];
    //             select.options[i] = option;
    //         }
    //     });
    // } catch(e){
    //     console.log(e);
    //     alert("error getting pref");
    // }
}


function sendNews(){
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
            if(myJSON.status=="ok"){
                document.getElementById("list-div").innerHTML="";
                var list = document.createElement('ul');
                var articles = myJSON.articles;
                for (var i = 0; i < articles.length; i++){
                    var listElement = document.createElement("LI");                           
                    var a = document.createElement('a');
                    var titleNode = document.createTextNode(articles[i].title+'\n');         
                    a.appendChild(titleNode);
                    a.href=articles[i].url;
                    listElement.appendChild(a);                                        
                    
                    if(articles[i].author!=null){
                        var authorNode = document.createTextNode(articles[i].author+'\n');
                        listElement.appendChild(authorNode);
                    }
                    if(articles[i].description!=null){
                        var descriptionNode = document.createTextNode(articles[i].description+'\n');
                        listElement.appendChild(descriptionNode);
                    }
                    list.appendChild(listElement);     
                }
                document.getElementById("list-div").appendChild(list);
                  
            }else {
                console.log("FAILED");
            }
        });
}