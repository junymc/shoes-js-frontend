class App {
    constructor(container) {
        this.container = container
        this.brandSelector = new BrandSelector()
        this.brandSelector.handleBrand = this.handleSelection.bind(this)
        this.displayManager = new DisplayManager()
        this.fetchAndLoadBrands()
    }

    async fetchAndLoadBrands() {
        
        // try {
            const brands = await Brand.retrieveAll()
            this.brandSelector.brands = brands
            this.displayManager.brands = brands
            this.brandSelector.render()
            this.displayManager.updateFormBrands()
        // }catch(err) {
        //     alert(err)
        // }
        
    }

    handleSelection(brand) {
        if(!brand){
            this.displayManager.clearShoes()
        }else {
            this.displayManager.selectedBrand = brand
            this.displayManager.fetchAndRenderShoes()
        }
    }

}