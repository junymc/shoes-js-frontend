class ShoeAdapter {


    get baseURL() {
        return  `http://localhost:3000/api/v1`
    }

    get brandsURL() {
        return `${this.baseURL}/brands`
    }

    brandURL(id) {
        return `${this.brandsURL}/${id}`
    }

    get shoesURL() {
        return `${this.brandURL}/shoes`
    }

    get hearder() {
        const stdHeader = {
            'Content-Type': 'appliaction/json',
            'Accept': 'application/json'
        }
        return stdHeader
    }

    async getShoes() {
        const res = await fetch(this.shoesURL)
        this.checkStatus(res)
        return await res.json()
    }

    // async getshoe(id) {
    //     const res = await fetch(this.shoeURL(id))
    //     this.checkStatus(res)
    //     return await res.json()
    // }

    async newShoe(params) {
        const res = await fetch(this.shoesURL,{
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        this.checkStatus(res)
        return await res.json({
            "name": brand.shoe.name.value
        })
    }

    checkStatus(res) {
        if(res.status > 299 || res.status < 200) {
            throw new Error(res.status)
        }
    }
}