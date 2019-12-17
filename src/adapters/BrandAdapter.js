class BrandAdapter {


        get baseURL() {
            return  `http://localhost:3000/api/v1`
        }

        get brandsURL() {
            return `${this.baseURL}/brands`
        }

        brandURL(id) {
            return `${this.brandsURL}/${id}`
        }

        get hearder() {
            const stdHeader = {
                'Content-Type': 'appliaction/json',
                'Accept': 'application/json'
            }
            return stdHeader
        }

        async getBrands() {
            const res = await fetch(this.brandsURL)
            this.checkStatus(res)
            return await res.json()
        }

        async getBrand(id) {
            const res = await fetch(this.brandURL(id))
            this.checkStatus(res)
            return await res.json()
        }

        async newBrand(params) {
            const res = await fetch(this.brandsURL,{
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(params)
            })
            this.checkStatus(res)
            return await res.json({
                "name": brand.name.value
            })
        }

        checkStatus(res) {
            if(res.status > 299 || res.status < 200) {
                throw new Error(res.status)
            }
        }
    }