class BrandSelector {
    constructor() {
        this.brands = []
        this.bindingsAndEventListeners()
        this.fetchAndLoadBrands()
    }


    bindingsAndEventListeners() {
        this.container = document.querySelector('#brand-container')
        this.allBrandsContainer = document.querySelector("#all-brands")
    }

    async fetchAndLoadBrands() {
        this.brands = await Brand.retrieveAll()
        this.render()
    }

    render() {
        this.allBrandsContainer.innerHTML = this.brands.map(brand => brand.html).join('')
    }

}