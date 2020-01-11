class Story {
    constructor(storyJSON, characterArray) {
        this.id = storyJSON.id
        this.title = storyJSON.title
        this.plot = storyJSON.plot
        this.characters = characterArray
    }

    renderLi() {

        // return `<li>${this.title}, characters: ${this.characters.forEach(
        //     ch => ch.firstName
        // )}</li>`
    }


}