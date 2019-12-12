class Brand {

    static addBrandLogo() {
        const brandLogo = document.querySelector('.brand-logo')
        const img = document.createElement('IMG')
        img.setAttribute('src', brand.image)
        brandLogo.appendChild(img)
    } 

    static async retrieveAll() {
        try {
            const brandObjs = await BrandAdapter.instance.getBrands()
            return brandObjs.map(obj => new this(obj))
        }catch(err){
            alert(`The request failed with ${err}`)
            return null
        }

    }

    constructor(name, image) {
        this.name = name
        this.image = image
    }



}