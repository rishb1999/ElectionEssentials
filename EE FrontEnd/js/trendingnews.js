

function sendNews(){
    var issue = document.getElementById("news-select").value;
    console.log(issue);

    var url = 'https://newsapi.org/v2/top-headlines?' +
          'q=' + issue + '&'+
          'apiKey=68e746d6fb344e0995830a55620da67f';
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJSON) {
            if(myJSON.status=="ok"){
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
                    document.getElementById("news-list").appendChild(listElement);     
                }
                  
            }else {
                console.log("FAILED");
            }
        });
}

function getNews(){

    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('68e746d6fb344e0995830a55620da67f');
    var result;

    var baseURL = "http://database-env.tpry6djxqe.us-east-2.elasticbeanstalk.com";
    var preferences = "/users/preferences"

    $.get(baseURL + issues, function(data){
        alert(data);
    });

    var topHeadlineCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    var keyWords;

    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response);
        if(respone.status=='ok'){

        }else{
            alert("Search Error");
        }
    });

    newsapi.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2017-12-01',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    });

    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            sources: [...]
          }
        */
    });

}