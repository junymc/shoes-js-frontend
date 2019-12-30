class Shoe {
    constructor(params) {
        this.id = params.id
        this.model = params.model
        this.size = params.size
        this.color = params.color
        this.category = params.category
        this.image = params.image
        this.brand_id = params.brand_id
        
        this.bindingsAndEventListeners()
    }

    static async retrieveByBrand(brandId) {
        try {
            const shoeObjs = await new ShoeAdapter().getShoes(brandId)
            return shoeObjs.map(obj => new this(obj))
        }catch(err){
            throw {error: err}
        }

    }

    static async retrieveNewShoe(params) {
        try {
            const shoeObj = await new ShoeAdapter().newShoe(params)
            return shoeObj
        }catch(err){
            throw {error: err}
        }
    }

    bindingsAndEventListeners() {
        this.container = document.querySelector("#shoes-container")
    }

    get shoesHtml() {
        return `<ul>
                   <img src="${this.image}" width="250" height="300">
                   <li> Model: ${this.model} </li>
                   <li> Size: ${this.size} </li>
                   <li> Color: ${this.color} </li>
                   <li> Category: ${this.category} </li>
                   <button type="submit" class="delete">Delete</button>
                </ul>`
    }
}