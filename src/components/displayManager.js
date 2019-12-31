class DisplayManager {
//  this => DisplayManager {shoes: Array(0), selectedBrand: Brand, shoesContainer: div#shoes-container, shoeForm: form#new-shoe-form}
    constructor() {
        this.shoes = []
        this.selectedBrand = null
        this.bindingsAndEventListeners()
    }

    async fetchAndRenderShoes() {
      
        try {
            console.log(this.selectedBrand)
            const brandId = this.selectedBrand.id
            this.shoes = await Shoe.retrieveByBrand(brandId)
            this.renderShoes()
        }catch(err) {
            alert(err)
        }
        
    }

    updateFormBrands() {
        const brandSelector = document.querySelector("#shoe-brand-name")
        brandSelector.innerHTML = this.brands.map(brand => brand.optionHTML).join('')
    }

    renderShoes() {
        const shoesIndex = document.querySelector("#shoes-container")
        const brandName = document.createElement('h2')
        if(this.selectedBrand){
           const t = document.createTextNode(this.selectedBrand.name)
           brandName.appendChild(t)
        }
        console.log(this.shoes)
        shoesIndex.innerHTML = this.shoes.map(shoe => shoe.shoesHtml).join('')

    }

    clearShoes(){
        this.shoes = []
        const shoesIndex = document.querySelector("#shoes-container")
        shoesIndex.innerHTML = ""
    }

    bindingsAndEventListeners() {
        
        this.shoeForm = document.getElementById('new-shoe-form')
        this.shoeForm.addEventListener('submit', this.addShoe.bind(this))


        // this.deleteBtns = document.querySelectorAll('.delete')
        // Array.from(this.deleteBtns).forEach(function(btn){
        //     btn.addEventListener('click', this.deleteShoe.bind(this))
        // })
        
    }
    // get the info from form and convert it to object format
    toJSONString() {
        const shoeInfo = {};
        const elements = document.querySelectorAll("input, select");
        for(let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            const name = element.name;
            const value = element.value;

            if(name) {
                shoeInfo[name] = value;
            }
        }

        return shoeInfo;
    }

    async addShoe(e) {
        e.preventDefault()
       
        // Create a new Shoe() from the form info
        const shoeJson = this.toJSONString()
        const newShoe = new Shoe(shoeJson)
      console.log(newShoe)
        // add the shoe in the shoes array
         this.shoes.push(newShoe)
        // render shoes to display
        this.renderShoes()
        // POST request to API
        try {
            const shoe = await Shoe.createNewShoe(shoeJson)
            newShoe.id = shoe.id
            newShoe.brand_id = shoe.brand_id
        }catch(err) {
            this.shoes = this.shoes.filter(shoe => shoe.id)
            alert(err)
            this.renderShoes()
        }
        
    }
    
}