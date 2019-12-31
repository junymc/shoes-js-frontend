class Brand {

    constructor(params) {
        this.id = params.id
        this.name = params.name
        this.image = params.image
    }

    static async retrieveAll() {
        try {
            const brandObjs = await new BrandAdapter().getBrands()
            return brandObjs.map(obj => new this(obj))
        }catch(err){
            throw {error: err}
        }
    }

    get imageHTML() {
        return `<img src="${this.image}" data-id="${this.id}" width="120" height="150">`
    }

    get optionHTML() {
        return `<option value="${this.id}">${this.name}</option>`
    }

}