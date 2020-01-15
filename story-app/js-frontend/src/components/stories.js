class Stories {
    constructor(characters) {
        this.characters  = characters
        this.stories = []
        this.adapter = new StoriesAdapter()
        this.charAdapter = new CharactersAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadStories()
    }



    initiBindingsAndEventListeners() {
        this.storiesContainer = document.getElementById('story-container')
        this.storyGenBtn = document.getElementById("storyGenBtn")
        this.storyGenBtn.addEventListener('click', this.randoStoryGen.bind(this)) 
        this.saveBtn = document.getElementById('saveBtn')
        this.saveBtn.addEventListener('click', this.saveStoryThenRender.bind(this))
        // this.deleteBtn = document.getElementById('deleteBtn')
    }

    randoStoryGen() {
        // e.preventDefault()
        const stories = [
            {title: 'Forbidden Love', plot: 'Two young lovers from different social class struggle to be together. But their love will not be denied!'},
            {title: 'Bite Me', plot: 'An army of mailmen, sick of being bullied by the neighborhood pitbulls decide enough is enough. Woof goes the neighborhood.'},
            {title: 'Cheese Please', plot: 'A group of dairy farmers battle it out for control of the local cheese market.'},
            {title: 'Don\'t Call it A Comeback', plot: 'A struggling actress lands the role of her life.'},
            {title: `Is Anybody Out There?`, plot: `A space crew sent to explore Mars loses all contact with Earth.`},
            {title: `Doggone Dog`, plot: `When St. Bernard Harry's owner starts spending more time with his new girlfriend, mischeivous Harry does whatever he can to keep the romance from surviving. `},
            {title: `Wings Over Walla Walla`, plot: `A new airport has the local residents all up in a tizzy.` },
            {title: `Fourth and Won`, plot: `The grittiest veterans on the lowest budget team band together to give it one last fight.` },
            {title: `Two for Angelo`, plot: `In this highly anticpated sequel, Angelo Pappas uses his chili dog hankering to his advantage.` },
            {title: "Granny Git Yer Gun" , plot: 'A young pack of punks moves into Granny\'s neighborhood. Well, Granny\'s got a little something to say about that!' },
            {title: 'Pies for Pablo' , plot: 'Ex-Cia Pablo Jones becomes a baker.' },
            {title: 'Jet' , plot: 'A wrongly convicted fighter jet pilot flees - in the thing he drives best.' }


        ]
        let randoNum = Math.floor(Math.random()*stories.length);
        
        let storyDiv = document.createElement('div')
        storyDiv.id = "temp-story-div"

        let storiesContainer = document.getElementById('temp-story-container')
        storiesContainer.innerHTML = ""
        
        let story = stories[randoNum]
        let storyTitle = document.createElement('h3') 
        storyTitle.id = "title"
        storyTitle.innerHTML = story.title
        storyDiv.appendChild(storyTitle)
    
        let storyPlot = document.createElement('p')
        storyPlot.id = "plot"
        storyPlot.innerHTML = story.plot
        storyDiv.appendChild(storyPlot)

        storiesContainer.appendChild(storyDiv)

        this.saveBtn.removeAttribute("hidden")

    }

    saveStoryThenRender(e) {
       
        e.preventDefault()

        let title = document.getElementById("title").textContent
        let plot = document.getElementById("plot").textContent

        this.adapter.saveStoryToRailsAPI(title, plot).then( story => {

            // grab saved story container
            let selectedStory = document.getElementById('selected-story')
            let selectedCharacters = document.getElementById('selected-characters')
            selectedStory.innerHTML = ""
            selectedCharacters.innerHTML = ""

            // print title
            let selectedStoryTitle = document.createElement('h4') 
            selectedStoryTitle.id = "selected-title"
            selectedStoryTitle.innerHTML = `Title: ${title}`
            selectedStory.appendChild(selectedStoryTitle)

             // print plot
             let selectedStoryPlot = document.createElement('p')
             selectedStoryPlot.id = "plot"
             selectedStoryPlot.innerHTML = plot
             selectedStory.appendChild(selectedStoryPlot)

            // print id
            let storyId = document.createElement('p')
            storyId.id = "new-story-id"
            storyId.innerHTML = `Id: ${story.id}`
            selectedStory.appendChild(storyId)
     
        }) // this.adapter.....
   
    }

    fetchAndLoadStories() {
        this.storiesContainer.innerHTML = ""
        this.adapter.getStories()
        .then( stories => { 
             stories.forEach( story => {
                this.stories.push(new Story(story, story.characters )) 
        
        })

    })
        .then( () => {
            this.render()
        })
    }

    deleteCharFromRailsAPI(id) {

        return fetch("http://localhost:3000/api/v1/characters" + "/" + id, {
            method: 'DELETE' 
        }).then(res => {
            if (!res.ok)  {
                throw res
            }
            return res.json()
        })
        .catch(err => {
            alert('Could not delete')
        })    
    }    

   

    render() {
        const storiesContainer = document.getElementById("story-container")
        const refreshBtn = document.getElementById("refresh-button")
        refreshBtn.addEventListener('click', e => location.reload())


        this.stories.forEach( story => {
            let string = ""
            let savedStory = document.createElement('div')
            savedStory.className = "saved-story"

            string += `<h4>${story.title}<span id="story-id" hidden>${story.id}</span></h4><ol>`
           
            story.characters.forEach( ch => {
                string += `<li>${ch.first_name}` + `${ch.last_name}<span id="character-id" hidden>${ch.id}</span></li>`
            })

            string += "</ol>"

            savedStory.innerHTML = string

            let deleteBtn = document.createElement('button') 
            deleteBtn.id = "delete-story-btn"
            deleteBtn.innerHTML = "Delete"

            deleteBtn.addEventListener('click', e => {
                story.characters.forEach( c => {
                    this.deleteCharFromRailsAPI(c.id)
                })
                this.adapter.deleteStoryFromRailsAPI(story.id)
                savedStory.remove()
            })

            savedStory.appendChild(deleteBtn)

            storiesContainer.appendChild(savedStory)


        }) 

    }
} // Stories
