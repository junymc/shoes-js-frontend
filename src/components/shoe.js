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

    bindingsAndEventListeners() {
        this.container = document.querySelector("#shoes-container")
    }

    get shoesHtml() {
        return `<ul>
                   <img src="${this.image}" width="130" height="150">
                   <li> ${this.model} </li>
                   <li> ${this.size} </li>
                   <li> ${this.color} </li>
                   <li> ${this.category} </li>
                   <button type="submit" class="delete">Delete</button>
                </ul>`
    }
}