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
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [brand, model, size, color, category] = inputs.map(input => input.value)
        console.log(brand, model, size, color, category)
    }

}