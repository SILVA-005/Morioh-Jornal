class hamburguer {
    constructor(lanche, barra, barralinks) {
        this.lanche = document.querySelector(lanche);
        this.barra = document.querySelector(barra);
        this.barralinks = document.querySelectorAll(barralinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this);
        this.barra.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.lanche.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.lanche) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new hamburguer(
    ".lanche",
    ".barra",
    ".barra li"
);
mobileNavbar.init();