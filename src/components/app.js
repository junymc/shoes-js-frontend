class App {
    constructor(container) {
        this.container = container
        this.brandSeletor = new BrandSelector()
        this.formManager = new FormManager()
        this.displayManager = new DisplayManager()
    }
}