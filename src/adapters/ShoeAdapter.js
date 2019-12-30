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

    shoesURL(brand_id) {
        return `${this.brandURL(brand_id)}/shoes`
    }

    get hearder() {
        const stdHeader = {
            'Content-Type': 'appliaction/json',
            'Accept': 'application/json'
        }
        return stdHeader
    }

    async getShoes(brand_id) {
        console.log(this.shoesURL(brand_id))
        const res = await fetch(this.shoesURL(brand_id))
        this.checkStatus(res)
        return await res.json()
    }

    // async getshoe(id) {
    //     const res = await fetch(this.shoeURL(id))
    //     this.checkStatus(res)
    //     return await res.json()
    // }

    async newShoe(params) {

        try {
            const res = await fetch(this.shoesURL,{
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(params)
            })
            this.checkStatus(res)
            return await res.json()
        }catch(err) {
           alert(err)
        }
        
    }

    checkStatus(res) {
        if(res.status > 299 || res.status < 200) {
            throw new Error(res.status)
        }
    }
}