class FormManager {
    constructor() {
        this.bindingsAndEventListeners()
    }

    bindingsAndEventListeners() {
        this.shoesContainer = document.getElementById('shoes-container')
        this.shoeForm = document.getElementById('new-shoe-form')
        this.shoeForm.addEventListener('submit', this.addShoe.bind(this))

        this.deleteBtns = document.querySelectorAll('.delete')
        Array.from(this.deleteBtns).forEach(function(btn){
            btn.addEventListener('click', this.deleteShoe.bind(this))
        })
        
    }

    addShoe(e) {
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const brandOption = document.querySelector('#shoe-brand-name').value
        const [model, size, color] = inputs.map(input => input.value)
        const categoryOption = document.querySelector('#new-shoe-category').value
        const shoeImage = document.querySelector('#new-shoe-image').value
        
        // create elements
        const ul = document.createElement('ul')
        const imgTag = document.createElement('img')
        const brandLi = document.createElement('li')
        const modelLi = document.createElement('li')
        const sizeLi = document.createElement('li')
        const colorLi = document.createElement('li')
        const categoryLi = document.createElement('li')
        const deleteBtn = document.createElement('button')

        // add content
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'delete'
        imgTag.src = shoeImage
        brandLi.textContent = brandOption
        modelLi.textContent = model
        sizeLi.textContent = size
        colorLi.textContent = color
        categoryLi.textContent = categoryOption

        // append to document
        ul.appendChild(imgTag)
        ul.appendChild(brandLi)
        ul.appendChild(modelLi)
        ul.appendChild(sizeLi)
        ul.appendChild(colorLi)
        ul.appendChild(categoryLi)
        ul.appendChild(deleteBtn)
        this.shoesContainer.appendChild(ul)
       
    }

    deleteShoe(e) {
        e.preventDefault()
        console.log('deleted!')
    }

}