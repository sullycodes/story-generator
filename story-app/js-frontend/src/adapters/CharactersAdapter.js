class CharactersAdapter {
    constructor() {
        this.baseUrl =
        "http://localhost:3000/api/v1/characters"
    }

    getCharacters() {
        return fetch(this.baseUrl)
        .then( response => response.json() )
    }

    saveCharacterToRailsAPI(character) { 

        return fetch("http://localhost:3000/api/v1/characters", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
            body: JSON.stringify({ character }),  
        }).then(res => res.json())
    }



    

}
