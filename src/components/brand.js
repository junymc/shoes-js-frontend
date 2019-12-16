class Brand {


    static async retrieveAll() {
        try {
            const brandObjs = await new BrandAdapter().getBrands()
            return brandObjs.map(obj => new this(obj))
        }catch(err){
            throw {error: err}
        }

    }

    constructor(params) {
        this.id = params.id
        this.name = params.name
        this.image = params.image
    }

    get html() {
        return `<img src="${this.image}" data-id="${this.id}" width="120" height="150">`
    }



}