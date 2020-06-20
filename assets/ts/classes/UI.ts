import * as $ from "jquery";
import "jquery.growl";

export default class UI {

    public static spinner() {
        $("#spinner").toggleClass("d-none");
        $("#spinner").toggleClass("d-flex");
    }

    public static showMsgError(title, msg) {
        $.growl.error({title: title, message: msg});
    }
    
    public static showNews(news) {
        this.spinner();
        let html = "";
        news.forEach(element => {
            console.log(element);
            console.log($("#result"));
            html += `
                <div class="col-sm-4 mt-2">
                    <div class="card">
                        <img src="${element.urlToImage}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${element.title.split("-", 1)}</h5>
                            <p class="card-text">${element.description ? element.description.substring(0, 150): ""}</p>
                            <p> 
                                <span class="badge badge-secondary">${element.source.name}</span>
                                <span class="badge badge-warning">${element.publishedAt}</span>
                            </p>
                            <a href="${element.url}" class="btn btn-primary">read more</a>
                        </div>
                    </div>
                </div>
            `
        });
        $("#result").html(html);

    }
}