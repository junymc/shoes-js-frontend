class Shoe {
    constructor(params) {
        this.id = params.id
        this.model = params.model
        this.size = params.size
        this.color = params.color
        this.type = params.type
    }

    get shoesHtml() {
        return `<p> "${this.shoe.name}" </p>`
    }
}