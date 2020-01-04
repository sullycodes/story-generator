class Story {
    constructor(storyJSON, characterArray) {
        this.id = storyJSON.id
        this.title = storyJSON.title
        this.plot = storyJSON.plot
        this.characters = characterArray
    }

    renderLi() {
        return `<li>${this.title}, id: ${this.id}</li>`
    }

    renderId()  {
        return `${this.id}`
    }

    renderCard() {
        return `
            <div class="storyCard">
                <h4>Title: ${this.title}</h4>
                <p>Plot: ${this.plot}</p>
            </div>`
    }

}