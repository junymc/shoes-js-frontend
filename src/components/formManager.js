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
        const brandOption = document.querySelector('#shoe-brand-name').value
        const [model, size, color] = inputs.map(input => input.value)
        const categoryOption = document.querySelector('#new-shoe-category').value
        
        // create elements
        const ul = document.createElement('ul')
        const shoeInfo1 = document.createElement('li')
        const shoeInfo2 = document.createElement('li')
        const shoeInfo3 = document.createElement('li')
        const deleteBtn = document.createElement('button')

        // add content
        deleteBtn.textContent = 'Delete'
        shoeInfo1.textContent = brandOption
        shoeInfo2.textContent = [model, size, color]
        shoeInfo3.textContent = categoryOption

        // append to document
        ul.appendChild(shoeInfo1)
        ul.appendChild(shoeInfo2)
        ul.appendChild(shoeInfo3)
        ul.appendChild(deleteBtn)
        this.shoesContainer.appendChild(ul)

       
    }

}