class DisplayManager {

    constructor() {
        this.shoes = []
        this.selectedBrand = null

    }

    async fetchAndRenderShoes() {
        
        try {
            console.log(this.selectedBrand)
            const brandId = this.selectedBrand.id
            this.shoes = await Shoe.retrieveByBrand(brandId)
            this.renderShoes()
        }catch(err) {
            alert(err)
        }
        
    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        const brandName = document.createElement('h2')
        const t = document.createTextNode(`${this.selectedBrand.name}`)
        brandName.appendChild(t)
        console.log(this.shoes)
        shoesIndex.innerHTML = this.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    clearShoes(){
        this.shoes = []
        const shoesIndex = document.querySelector("#shoes-container")
        shoesIndex.innerHTML = ""
    }

    
}