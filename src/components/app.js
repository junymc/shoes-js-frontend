class App {
    
    constructor(container) {
        this.container = container
        this.brandSelector = new BrandSelector()
        this.brandSelector.handleBrand = this.handleSelection.bind(this)
        this.displayManager = new DisplayManager()
        this.fetchAndLoadBrands()
    }

    async fetchAndLoadBrands() {
        // get all the brands and set that for brandSelector and displayManager
        // so that way both of files can access to the brands
        try {
            const brands = await Brand.retrieveAll()
            this.brandSelector.brands = brands
            this.displayManager.brands = brands
            this.brandSelector.render()
            this.displayManager.updateFormBrands()
        }catch(err) {
            alert(err)
        }
        
    }

    handleSelection(brand) {
        // if the brand is not selected, empty the container
        //  once brand is selected, fetch all the shoes of that brand and display
        if(!brand){
            this.displayManager.clearShoes()
        }else {
            this.displayManager.selectedBrand = brand
            this.displayManager.fetchAndRenderShoes()
        }
    }

}