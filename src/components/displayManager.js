class DisplayManager {

    constructor() {
        this.selectedBrand = null

    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        const brandName = document.createElement('h2')
        const t = document.createTextNode(`${this.selectedBrand.name}`)
        brandName.appendChild(t)
        shoesIndex.innerHTML = this.selectedBrand.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    
}