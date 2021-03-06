import "../component/food-list.js";
import "../component/app-bar.js";

import DataSource from "../data/data-source.js";

const main = () =>{
    const searchElement = document.querySelector("search-bar");
    const FoodListElement = document.querySelector("food-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchFood(searchElement.value);
            renderResult(result);
        } catch(message){
            fallbackResult(message)
        }
    };

    const renderResult= results => {
        FoodListElement.foods = results;
    };

    const fallbackResult= message => {
        FoodListElement.renderError(message);
    };

    searchElement.clientEvent = onButtonSearchClicked;
};

export default main;