class DisplayManager {

    constructor() {
        this.shoes = []
        this.selectedBrand = null
        this.fetchAndLoadShoes()

    }

    async fetchAndLoadShoes() {
        
        try {
            this.shoes = await Shoe.retrieveAll()
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
        shoesIndex.innerHTML = this.selectedBrand.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    
}