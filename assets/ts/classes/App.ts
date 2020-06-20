import * as $ from "jquery";
import Api from "./Api";
import UI from "./UI";

export default class App {

    event() {
        $("#submitBtn").click(this.btnClick);
    }

    btnClick() {
        const newsName = $("#news-name").val();
        const country = $("#country").val();
        const category = $("#category").val();

        if(newsName == "" && country == "" && category == "") {
            UI.showMsgError("empty", "At least one of the fields must be filled");
            
        }else {
            const api = new Api(newsName, country, category);
            api.createURL();
            
        }
    }
}