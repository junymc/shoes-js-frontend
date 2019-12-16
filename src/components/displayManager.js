class DisplayManager {

    constructor() {
        this.selectedBrand = null

    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        shoesIndex.innerHTML = this.selectedBrand.shoes.map(shoe => shoe.shoesHtml).join('')

    }
    
}