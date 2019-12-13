class Brand {


    static async retrieveAll() {
        try {
            const brandObjs = await BrandAdapter.instance.getBrands()
            return brandObjs.map(obj => new this(obj))
        }catch(err){
            alert(`The request failed with ${err}`)
            return null
        }

    }

    constructor(params) {
        this.name = params.name
        this.image = params.image
        this.id = params.id
    }

    get html() {
        return `<img src="${this.image}>`
    }



}