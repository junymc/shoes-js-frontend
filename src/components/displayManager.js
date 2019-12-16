class DisplayManager {

    constructor() {
        

    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        shoesIndex.innerHTML = this.brand.shoes.map(shoe => shoe.shoesHtml).join('')

    }
    
}