class Brand {

    static addBrandLogo {
        const brandLogo = document.querySelector('.brand-logo')
        const img = document.createElement('IMG')
        img.setAttribute('src', toy.image)
        brandLogo.appendChild(img)
    } 

    static async retrueveAll() {
        try {
            const brandObjs = await BrandAdapter.instance.getBrands()
            return brandObjs.map(obj => new this(obj))
        }catch(err){
            alert(`The request failed with ${err}`)
            return null
        }

    }

    constructor(name) {
        this.name = name
        this.image = image
    }



}