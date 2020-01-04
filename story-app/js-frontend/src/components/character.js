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

// //   // I think it goes here actually and 
// //   // is generated in characters for the array
// //     constructor() {
// //         this.gender = this.gender()
// //         if (this.gender === "Male") {
// //           this.firstName = this.firstNameMale()
// //           this.lastName = this.lastName()
// //         }
// //         else {
// //           this.firstName = this.firstNameFemale()
// //           this.lastName = this.lastName()
// //         }
// //     }

// //     gender() {
// //         const genders = ['Male', 'Female']
// //         let randoNum = Math.floor(Math.random()*genders.length);
// //         return genders[randoNum]
// //     }

// //     firstNameMale() {
// //         const firstNames = ['Gary','Frank','Marcus','Luke','Malcolm','Tank','Kirk','Spike','Farnsworth','Gerard','Ward','Allistair','Ellis','Salinger','Vlad','Omar','Julio','Brick','Tut','Winger','Gunner','Hunter','Blanco','Joey','Kip','Jamal','Tito','Kipling','Chum','Pierce','Mario','Vincenzo','Hawk','Bull','Bear'];
// //         let randoNumFirst = Math.floor(Math.random()*firstNames.length);
// //         return firstNames[randoNumFirst]
// //     }

// //     firstNameFemale() {
// //         const firstNames = ['Shalimar','Alice','Sally','Chica','Simone','Betty','Sangeline','Kiki','Deede','Mirabel','Rosie','Lottie','Riley','Savannah','Georgia','Harper','Simone','Natalie','Foxy'];
// //         let randoNumFirst = Math.floor(Math.random()*firstNames.length);
// //         return firstNames[randoNumFirst]
// //     }


// //     lastName() {
// //       const lastNames = ['Kupchak','Wolski','Jackson', 'Muldoon', 'Vargas', 'Martinez-Gates', 'Collinsworth','Ellington','Blaisdell','Gannon','Sanchez','Lee','Chin','McManus','Frontiero','McMahon','Hogan','Rickers','Van Fleet','Pinto','Samsonov','Sullivan','Vendici','Pantone-Smith','Sharpe']
// //       var randoNumLast = Math.floor(Math.random()*lastNames.length);
// //       return lastNames[randoNumLast]
// //       }  

// // }

