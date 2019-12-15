// class ShoeAdapter {


//     get baseURL() {
//         return  `http://localhost:3000`
//     }

//     get shoesURL(brands, id) {
//         return `${this.baseURL}/${brands}/${id}/shoes`
//     }

//     shoeURL(id) {
//         return `${this.shoesURL}/${id}`
//     }

//     get hearder() {
//         const stdHeader = {
//             'Content-Type': 'appliaction/json',
//             'Accept': 'application/json'
//         }
//         return stdHeader
//     }

//     async getShoes() {
//         const res = await fetch(this.shoesURL)
//         this.checkStatus(res)
//         return await res.json()
//     }

//     async getshoe(id) {
//         const res = await fetch(this.shoeURL(id))
//         this.checkStatus(res)
//         return await res.json()
//     }

//     async newShoe(params) {
//         const res = await fetch(this.shoesURL,{
//             method: 'POST',
//             headers: this.headers,
//             body: JSON.stringify(params)
//         })
//         this.checkStatus(res)
//         return await res.json({
//             "name": brand.shoe.name.value
//         })
//     }
// }