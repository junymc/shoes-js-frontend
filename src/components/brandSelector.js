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
        this.image = document.getElementsByTagName('img')

        this.allBrandsContainer.addEventListener('click', this.selectBrandLogo.bind(this))
    }

    selectBrandLogo(e) {
        // update this.selectedBrand
        
        const id = parseInt(e.target.dataset.id)
        const selection = this.brands.find(brand => brand.id === id)
        if(selection === this.selectedBrand){
            e.target.imageInvertBack()
            this.selectedMass = null
        }else if(this.selectedBrand !== null){
            // const brandContainer = Array.from(this.allBrandsContainer.children).find(con => {
                return e.target.dataset.id == this.selectedBrand.id
        
                
            e.target.imageInvertBack()
            this.selectedBrand.imageInvert()
            this.selectedBrand = selection
        }else{
            this.selectedBrand.imageInvert()
            this.selectedBrand = selection
        }
    
        console.log(e.target)
        // this.handleBrand(selection)
    }

    imageInvert() {
        this.image.click( () => {
            $('#image').css({
            'filter': 'invert(20%);'
            });
        });
    }

    imageInvertBack() {
        this.image.click( () => {
            $('#image').css({
            'filter': 'invert(0%);'
            });
        });
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