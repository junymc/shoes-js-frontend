class BrandsAdapter {
    constructor() {
        this.baseUrl =
        'http://localhost:3000/api/v1/brands'
    }


    getBrands() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}