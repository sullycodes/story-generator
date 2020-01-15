class Characters {

    constructor() {
        this.characters = []
        this.adapter = new CharactersAdapter()
        this.initiBindingsAndEventListeners()
        // this.fetchAndLoadCharacters()
    }

    initiBindingsAndEventListeners() {
        this.charactersContainer = document.getElementById('character-container')
        this.characterForm = document.getElementById('character-form')
        this.charGenBtn = document.getElementById('charGenBtn')
        this.charGenBtn.addEventListener('click', this.randoCharacterGen.bind(this)) 
        this.selectCharBtn = document.getElementById('selectCharBtn')
        this.selectCharBtn.addEventListener('click', this.selectCharacter.bind(this)) 
    }

    gender() {
        const genders = ['Male', 'Female']
        let randoNum = Math.floor(Math.random()*genders.length);
        return genders[randoNum]
    }

    firstNameMale() {
        const firstNames = ['Satch','Jalencourt','Cap','Pico','Frank','Gary','Frank','Marcus','Luke','Malcolm','Tank','Kirk','Spike','Farnsworth','Gerard','Ward','Allistair','Ellis','Salinger','Vlad','Omar','Julio','Brick','Tut','Winger','Gunner','Hunter','Blanco','Joey','Kip','Jamal','Tito','Kipling','Chum','Pierce','Mario','Vincenzo','Hawk','Bull','Bear','Jigsaw','Skip','Doobie','Bones','Tanner','Amir','Git','Coder','Spike','Creep','Milo', 'Wyatt','Wade','Wes','Cap','Boris','Fork','Fargen','Goose','Daniel','Tapper','Keys','BenJarvus','Dizzy','Whiskers','Galenthorpe','Shorty','Gordie','Colt','Maximo','Stanley','Bud','Jazz','Nico','Oliver','Tripp','Edgar','Ox','Bo','Finn','Rick','Patrick','Jude','Daniel'];
        let randoNumFirst = Math.floor(Math.random()*firstNames.length);
        return firstNames[randoNumFirst]
    }

    firstNameFemale() {
        const firstNames = ['Jan','Bree','Shalimar','Alice','Sally','Chica','Simone','Betty','Sangeline','Kiki','Deede','Mirabel','Rosie','Lottie','Riley','Savannah','Georgia','Harper','Simone','Natalie','Foxy','Amelia','Lady','Holly','Helga','Eva','Brooklyn','Ginger','Brandi','Alanah','Harper','Marisol','Greta','Zoey','Hadley','Madeline','Ruby','Charlotte','Denver','Eve','Rosalita','Misery','Lupa','Avery','Brooke','Lila','Abigail','Trixie', 'Akemi', 'Serenity','Fran','Frau','Mallory','Gertie','Tululah','Livi','Ashley','Norah','Carly','Macy','Abigail','Rhys','Rory','Annie','Daisy','Lucy','Moxie','Sarah','Madison','Heather','Lorelei','Gal','Hope','Hattie','Stella','Akira','Rumi','Ishi','Nomi','Sadie','Esther','Ainsley','Kelsie','Mabel','Parker','Sophie','Gladys','Dawn','Flora','Kate','Layla'];
        let randoNumFirst = Math.floor(Math.random()*firstNames.length);
        return firstNames[randoNumFirst]
    }

    lastName() {
        const lastNames = ['Phillips','Kupchak','Wolski','Jackson', 'Muldoon', 'Vargas', 'Martinez-Gates', 'Collinsworth','Ellington','Blaisdell','Gannon','Sanchez','Lee','Chin','McManus','Frontiero','McMahon','Hogan','Rickers','Van Fleet','Pinto','Samsonov','Sullivan','Vendici','Pantone-Smith','Sharpe','Lane-Stanton','Marlowe','Pascucci','Giacomo','Lane-Jones','Langone','Carney',"Marciano", "Antonio","Jones","Bigsby",'Parker','O\'Shaughnessy','Kinsington','Page','Hendrix','Moses','Vaughn','Brady','Zoots','Lattimore','Carbone','Abdul','Smith','Weir','Jett','Hopper','Zappa','Boone','Harry','Henry','Carp','Gonzalez','Mykonos','Scott','Halpert','Beasley','Mack','Taylor','Bolas','James','Nelson','Liu','Lee','Barishnakov','al-Bin','Suture','Green-Ellis','Aaron-Blake','Spinks','Parcheesi','Stein','Ramirez','Byrd','Orr','Tippett','Wise','Wheatley','Wags','O\'Rourke','Slater','Lansdowne','Abdul','D\'Antonio','Artemis','Fowley','Baker','Troubadour','Garcia','Vostov','Tran','Kowalski','Sanfiliopo','Gardner','Johnson','Tisdale','Jansen','Grant','Potts','Cooper','Adams','Coleman','Ballast-Gast','Simmons','Brooks','Hightower','Krenshaw','Scott','Halpert','Schrute','Beasley','Malone','Vance','Ludlow','Eastman','West','Dixon','Finbar','Patel','Jane-Curtis','Samsel','Dooley','Boone','Oakley','Wood','Tantino','de Leon','Jiminez','Stench','Abboud','Nassar','MacGregor','West']
        var randoNumLast = Math.floor(Math.random()*lastNames.length);
        return lastNames[randoNumLast]
      }  

    avatarFemale() {
        let avatars = ['f1.png','f2.png','f3.png','f4.png','f5.png','f6.png','f7.png','f8.png','f9.png','f10.png',
        'f11.png','f12.png','f13.png','f14.png','f15.png','f16.png','f17.png','f18.png','f19.png','f20.png',]
        let randoNum = Math.floor(Math.random()*avatars.length);
        let image = avatars[randoNum];
        let currentUrl = window.location.href.slice(0,-10) 
        return currentUrl + `images/${image}`
    }

    avatarMale() {
        let avatars = ['m1.png','m2.png','m3.png','m4.png','m5.png','m6.png','m7.png','m8.png','m9.png','m10.png',
        'm11.png','m12.png','m13.png','m14.png','m15.png','m16.png','m17.png','m18.png','m19.png','m20.png','m21.png','m22.png']
        let randoNum = Math.floor(Math.random()*avatars.length);
        let image = avatars[randoNum];
        let currentUrl = window.location.href.slice(0,-10) 
        return currentUrl + `images/${image}`
    }

    randoCharacterGen(e) {
        e.preventDefault()
        
        //clear container
        let charContainer = document.getElementById('temp-character-container')
        charContainer.innerHTML = ""

        // generating
        let gender = this.gender()
        let firstName = ""
        let lastName = ""
        let avatar = ""
        if (gender === "Male") {
            firstName += this.firstNameMale()
            lastName += this.lastName()
            avatar += this.avatarMale()
        }
        else {
            firstName += this.firstNameFemale()
            lastName += this.lastName()
            avatar += this.avatarFemale()
        }
        let age = Math.floor(Math.random() * 30) + 20;

        this.selectCharBtn.removeAttribute("hidden")

        // rendering
        let charCard = document.createElement('div')
        charCard.classList.add('character-card')
          
        let name = document.createElement('h4')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
    
        span1.id = "first-name"
        span2.id = "last-name"
        span1.innerHTML = `${firstName}`
        span2.innerHTML = ` ${lastName}`
        name.appendChild(span1)
        name.appendChild(span2)    

        let p = document.createElement('p')
        p.id  = "age"
        p.innerHTML = age

        let p2 = document.createElement('p')
        p2.setAttribute("hidden", true)
        p2.id = "gender"
        p2.innerHTML = gender

        let img = document.createElement('img')
        img.id = "avatar"
        img.src = avatar
        img.width = 80
        img.height = 100

        charCard.appendChild(name)
        charCard.appendChild(p)
        charCard.appendChild(img)
        charCard.appendChild(p2)
        charContainer.appendChild(charCard)

    }

    selectCharacter() {
            let selectedCharacters = document.getElementById("selected-characters")
            let gender = document.getElementById("gender").innerHTML
            let first = document.getElementById('first-name').innerHTML
            let last = document.getElementById('last-name').innerHTML
            let age = document.getElementById('age').innerHTML
            let avatar = document.getElementById('avatar').src
            // let storyId = document.getElementById('story-id').innerHTML.slice(4)
            let storyId = 0
            
            if (document.getElementById('new-story-id')) {
                let id = document.getElementById('new-story-id').innerHTML.slice(4)
                storyId += id
            }
            else  {
                alert("You must save story first!")
                return
            }
            
            let li = document.createElement('li')
            li.innerHTML = `${first}` + `${last}`
            selectedCharacters.appendChild(li)

            const character = {
                gender: gender,
                first_name: first,
                last_name: last,
                age: age,
                image : avatar,
                story_id: storyId
            }


            this.adapter.saveCharacterToRailsAPI(character)
    
         
           
    } // end selectCharacter

} // end Characters

    // fetchAndLoadCharacters() {
    //     this.adapter.getCharacters()
    //     .then( characters => {
    //         characters.forEach( character => this.characters.push(new Character(character)) )
    //     })
    //     .then( () => {
    //         this.render()
    //     })
    // }

    // render() {
    //     const charactersString = this.characters.map(character => character.renderLi()).join(" ")
    //     const savedCharacters = document.getElementById("saved-character-container")
    //     savedCharacters.innerHTML = `${charactersString}`
    // }

// }
//     return fetch("http://localhost:3000/api/v1/characters", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//         body: JSON.stringify({ character }),  
//     }).then(res => res.json())
//     .then((data) => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
// }


// function renderSavedCharacters() {
//     fetch("http://localhost:3000/api/v1/characters"
//     )
// }

// //}


// // :first_name, :last_name, :gender, :age, :image