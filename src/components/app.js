class App {
    constructor(container) {
        this.container = container
        this.brandSeletor = new BrandSelector()
        this.brandSeletor.handleBrand = this.handleSelection.bind(this)
        this.formManager = new FormManager()
        this.displayManager = new DisplayManager()
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