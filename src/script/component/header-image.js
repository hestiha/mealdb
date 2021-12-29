import headericon from "../../assets/images/food.jpg";

class HeaderImage extends HTMLElement() {
    connectedCallback(){
        this.title  = this.getAtrribute("title") || null;
        this.description = this.getAtrribute("description") || null;
        this.innerHTML = `
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${headericon}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${this.title}</h5>
                    <p>${this.description}</p>
                </div>
            </div>
        </div>
       `
    }
}

customElements.define("HeaderImage", HeaderImage);