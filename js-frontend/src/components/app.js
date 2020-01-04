class App {
    constructor() {
        this.characters = new Characters()
        this.stories = new Stories(this.characters.characters)
    }
}

