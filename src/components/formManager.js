class FormManager {
    constructor() {
        this.bindingsAndEventListeners()
    }

    bindingsAndEventListeners() {
        this.shoesContainer = document.getElementById('shoes-container')
        this.shoeForm = document.getElementById('new-shoe-form')
        this.shoeForm.addEventListener('submit', this.addShoe.bind(this))
    }

    addShoe(e) {
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [brand, model, size, color, category] = inputs.map(input => input.value)
        
        // create elements
        const ul = document.createElement('ul')
        const shoeInfo = document.createElement('li')
        const deleteBtn = document.createElement('button')

        // add content
        deleteBtn.textContent = 'Delete'
        shoeInfo.textContent = [brand, model, size, color, category]

        // append to document
        ul.appendChild(shoeInfo)
        ul.appendChild(deleteBtn)
        this.shoesContainer.appendChild(ul)
    }

}