class DisplayManager {
//  this => DisplayManager {shoes: Array(0), selectedBrand: Brand, shoesContainer: div#shoes-container, shoeForm: form#new-shoe-form}
    constructor() {
        this.shoes = []
        this.selectedBrand = null
        this.bindingsAndEventListeners()
    }

    async fetchAndRenderShoes() {
      
        try {
            console.log(this.selectedBrand)
            const brandId = this.selectedBrand.id
            this.shoes = await Shoe.retrieveByBrand(brandId)
            this.renderShoes()
        }catch(err) {
            alert(err)
        }
        
    }

    // async fetchAndRenderNewShoe() {

    //     try {
    //         console.log(this.selectedBrand)
    //         const brandId = this.selectedBrand.id
    //         this.shoe = await Shoe.retrieveNewShoe(params)
    //         this.shoes.push(this.shoe)
    //         this.renderShoes()
    //     }catch(err) {
    //         alert(err)
    //     }

    // }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        const brandName = document.createElement('h2')
        const t = document.createTextNode(`${this.selectedBrand.name}`)
        brandName.appendChild(t)
        console.log(this.shoes)
        shoesIndex.innerHTML = this.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    clearShoes(){
        this.shoes = []
        const shoesIndex = document.querySelector("#shoes-container")
        shoesIndex.innerHTML = ""
    }

    bindingsAndEventListeners() {
        // this.shoesContainer = document.getElementById('shoes-container')
        
        this.shoeForm = document.getElementById('new-shoe-form')
        this.shoeForm.addEventListener('submit', this.addShoe)


        // this.deleteBtns = document.querySelectorAll('.delete')
        // Array.from(this.deleteBtns).forEach(function(btn){
        //     btn.addEventListener('click', this.deleteShoe.bind(this))
        // })
        
    }

    toJSONString() {
        const shoeInfo = {};
        const elements = document.querySelectorAll("input, select");
        for(let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            const name = element.name;
            const value = element.value;

            if(name) {
                shoeInfo[name] = value;
            }
        }

        return JSON.stringify(shoeInfo);
    }


    addShoe(e) {
        e.preventDefault()
        const shoesIndex = document.querySelector("#shoes-container")
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
        shoesIndex.appendChild(ul)
       
        // Create a new Shoe() from the form info
        const shoeJson = toJSONString()
        const newShoe = new Shoe(shoeJson)

        ShoeAdapter.newShoe(newShoe)
        this.shoes.push(newShoe)
        this.renderShoes()
    }

    
}