import UI from "./UI";

export default class Api {

    newsName: string;
    country: string;
    category: string;
    key: string = "3da242890aa64f5daf47b22ee8707c3d";
    url: string = "http://newsapi.org/v2/";

    constructor(newsName, country, category) {
        this.newsName = newsName;
        this.country = country;
        this.category = category;
    }

    createURL(): void {
        if(this.category !== "" || this.country !== "") {
            this.url += "top-headlines?";
        }else {
            this.url += "everything?";
        }
        if(this.newsName) {
            this.url += `q=${this.newsName}&`;
        }
        if(this.category) {
            this.url += `category=${this.category}&`;
        }
        if(this.country) {
            this.url += `country=${this.country}&`
        }
        this.url += `apiKey=${this.key}`
        this.fetchNews();
    }

    async fetchNews(): void{
        UI.spinner();
        let news = await fetch(this.url)
        news = await news.json();
        
        if(news.status == "error") {
            UI.spinner();
            UI.showMsgError("not result", "There is no news with your filtering");
        }else {
            UI.showNews(news.articles);
        }
        
    }
}