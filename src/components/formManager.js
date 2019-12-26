class FormManager {
    constructor() {
        this.bindingsAndEventListeners()
    }

    bindingsAndEventListeners() {
        this.shoesContainer = document.getElementById('shoes-container')
        this.shoeForm = document.getElementById('new-shoe-form')
        this.shoeForm.addEventListener('submit', this.createShoe.bind(this))
    }

    createShoe(e) {
        console.log(this)
        e.preventDefault()
        console.log("shoe is being created!")
    }

}