class BrandSelector {
    constructor() {
        this.brands = []
        this.bindingsAndEventListeners()
        this.fetchAndLoadBrands()
        this.shoeDisplayEventListener()
    }


    bindingsAndEventListeners() {
        this.container = document.querySelector('#brand-container')
        this.allBrandsContainer = document.querySelector("#all-brands")
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

    shoeDisplayEventListener() {
        for(var i = 0; i < this.allBrandsContainer.length; i += 1){
            this.allBrandsContainer[i].addEventListener('click', function () {
                
            });
            }
    }

}