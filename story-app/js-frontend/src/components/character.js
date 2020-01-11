class Character {
    
  constructor(characterJSON) {
    this.id = characterJSON.id
    this.gender = characterJSON.gender
    this.firstName = characterJSON.first_name
    this.lastName = characterJSON.last_name
    this.age = characterJSON.age
    this.image = characterJSON.image
    this.storyId = characterJSON.story_id
    }

}


