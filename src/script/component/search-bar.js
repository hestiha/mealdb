class SearchBar extends HTMLElement(){
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "oppen"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" id="searchButtonElement">Search</button>
                </form>
            </div>
        </nav>
        `;
        
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("SearchBar", SearchBar);