class Brand {
    constructor() {
        this.brands = []
        this.bindingsAndEventListeners()

    }


    bindingsAndEventListeners() {
        this.container = document.querySelector('#new-shoe-container')
        this.shoesContent = document.querySelector('#shoes-content')
        this.form = document.querySelector('new-shoe-form')

    }

}