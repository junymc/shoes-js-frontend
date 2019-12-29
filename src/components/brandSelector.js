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
        e.preventDefault()
        // update this.selectedBrand
        if(e.target.tagName === 'IMG'){
            const id = parseInt(e.target.dataset.id)
            const selection = this.brands.find(brand => brand.id === id)
            //if the image was selected already and click it again, set it back to original and set it to null
            if(selection === this.selectedBrand){
                    e.target.style.border = ""
                    this.selectedBrand = null
            }else if(this.selectedBrand !== null){
                // find the img that is corrently selected
                const selectedImg = Array.from(this.allBrandsContainer.children).find(img => {
                    return img.dataset.id == this.selectedBrand.id
                })
                //the image that was selected previously back to original color, set the new image border to black
                selectedImg.style.border = ""
                e.target.style.border = "5px solid black"
                this.selectedBrand = selection
            }else{
                //if nothing was selected, set the border to black
                e.target.style.border = "5px solid black"
                this.selectedBrand = selection
            }
        
            this.handleBrand(this.selectedBrand)
        }
      
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