class Shoe {
    
    constructor(params) {
        this.id = params.id
        this.model = params.model
        this.size = params.size
        this.color = params.color
        this.category = params.category
        this.image = params.image
        this.rating = params.rating
        this.brand_id = params.brand_id
    }

    static async retrieveByBrand(brandId) {
        try {
            const shoeObjs = await new ShoeAdapter().getShoes(brandId)
            return shoeObjs.map(obj => new this(obj))
        }catch(err){
            throw {error: err}
        }
    }

    static async createNewShoe(params) {
        const shoeObj = await new ShoeAdapter().newShoe(params)
        return shoeObj
    }

    static async deleteShoe(params) {
        const shoe = await new ShoeAdapter().deleteShoe(params)
        return shoe
    }

    get shoesHtml() {
        return `<ul data-id=${this.id}>
                   <img src="${this.image}" width="250" height="300">
                   <p> Model: ${this.model} </p>
                   <p> Size: ${this.size} </p>
                   <p> Color: ${this.color} </p>
                   <p> Category: ${this.category} </p>
                   <p> Rating: ${this.rating} </p>
                   <button type="submit" class="delete">Delete</button>
                </ul>`
    }
}