class Shoe {
    constructor(params) {
        this.shoes = []
        this.id = params.id
        this.model = params.model
        this.size = params.size
        this.color = params.color
        this.category = params.category
        
        this.bindingsAndEventListeners()
    }

    static async retrieveAll() {
        try {
            const shoeObjs = await new ShoeAdapter().getShoes()
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