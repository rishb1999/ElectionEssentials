
function getNews(){

    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('68e746d6fb344e0995830a55620da67f');
    var result;

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