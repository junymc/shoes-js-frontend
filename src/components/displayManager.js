class DisplayManager {

    constructor() {
        this.shoes = []
        this.selectedBrand = null

    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        const brandName = document.createElement('h2')
        const t = document.createTextNode(`${this.selectedBrand.name}`)
        brandName.appendChild(t)
        console.log(this.selectedBrand)
        shoesIndex.innerHTML = this.selectedBrand.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    
}