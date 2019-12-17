class BrandSelector {
    constructor() {
        this.brands = []
        this.bindingsAndEventListeners()
        this.fetchAndLoadBrands()
        this.selectedBrand = null
    }


    bindingsAndEventListeners() {
        this.container = document.querySelector('#brand-container')
        this.allBrandsContainer = document.getElementById("all-brands")

        this.allBrandsContainer.addEventListener('click', this.selectBrandLogo.bind(this))
    }

    selectBrandLogo(e) {
        const id = parseInt(e.target.dataset.id)
        const selection = this.brands.find(brand => brand.id === id)

        console.log(selection)
        this.handleBrand(selection)
    }

    async fetchAndLoadBrands() {
        
        try {
            this.brands = await Brand.retrieveAll()
            this.render()
        }catch(err) {
            alert(err)
        }
        
    }

    render() {
        this.allBrandsContainer.innerHTML = this.brands.map(brand => brand.html).join('')
    }


}