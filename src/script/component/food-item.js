class FoodItem extends HTMLElement(){
    set food(food) {
        this._food = food;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${this._food.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h2>${this._food.strMeal}</h2>
                <h4>${this._food.strArea}</h4>
                <p class="${this._food.strInstructions}</p>
            </div>
        </div>
        `
    }
}

customElements.define("food-item", FoodItem);