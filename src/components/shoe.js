class Shoe {
    constructor(params) {
        this.shoes = []
        this.id = params.id
        this.model = params.model
        this.size = params.size
        this.color = params.color
        this.category = params.category
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
        return `<p> "${this.shoe.name}" </p>`
    }
}