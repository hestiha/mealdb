import "./food-item.js";

class FoodList extends HTMLElement {
    constructor(){
        super()
        this.shadowRoot = this.attachShadow({mode: "open"});
    }

    set foods(foods){
        this._foods = foods;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML="";
        this._foods.forEach(food => {
            const FoodItemElement = document.createElement("FoodItem");
            FoodItemElement.food = food;
            this.shadowDOM.appenChild(FoodItemElement);
        })
    }
}

customElements.define("FoodList", FoodList);