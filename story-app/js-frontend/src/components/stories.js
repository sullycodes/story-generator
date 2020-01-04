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
        this.deleteBtn = document.getElementById('deleteBtn')
        this.deleteBtn.addEventListener('click', e => console.log('deleting') )
    }

    randoStoryGen() {
        // e.preventDefault()
        const stories = [
            {title: 'Forbidden Love', plot: 'Two young lovers From different social class struggle to be together. But their love will not be denied!'},
            {title: 'Bite Me', plot: 'An army of mailmen, sick of being bullied by the neighborhood pitbulls decide enough is enough. Woof goes the neighborhood.'},
            {title: 'Cheese Please', plot: 'A group of dairy farmers battle it out for control of the local cheese market.'},
            {title: 'Don\'t Call it A Comeback', plot: 'A struggling actor lands the role of his life.'}


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
            selectedStory.innerHTML = ""

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
            storyId.id = "story-id"
            storyId.innerHTML = `Id: ${story.id}`
            selectedStory.appendChild(storyId)

            //create delete button
            let deleteBtn = document.createElement('button') 
            deleteBtn.id = "delete-story-btn"
            deleteBtn.innerHTML = "Delete"
            deleteBtn.addEventListener('click', e => {
                let loader = document.createElement('div')
                loader.className = "loader"
                selectedStory.appendChild(loader)
                this.adapter.deleteStoryFromRailsAPI(story.id).then( obj => {
                    selectedStory.innerHTML = ""
                    //selectedStory.removeChild(loader)
                })
            }) 
            selectedStory.appendChild(deleteBtn)
           // 
            // this.deleteBtn.removeAttribute("hidden")

            console.log(`Still got ${story.id}`)
     
        })

        
    }

    fetchAndLoadStories() {
        this.storiesContainer.innerHTML = ""
        this.adapter.getStories()
        .then( stories => {
            stories.forEach( story => {
                const storyCharacters = this.characters.filter( ch =>  {
                const charIds = story.characters.map( ch =>  ch.id)
                return charIds.includes(ch.id)
            })
                this.stories.push(new Story(story, storyCharacters)) 
            })
        })
        .then( () => {
            this.render()
        })
    }

    render() {
        const storiesContainer = document.getElementById("story-container")

        let savedStory = document.createElement('div')
        let title = document.getElementById("title").textContent
        let plot = document.getElementById("plot").textContent



        // storiesContainer.append(this.stories.map(story => `Title: ${story.title}`)
        const storiesString = this.stories.map(story => story.renderLi()).join(" ")
        // const storiesContainer = document.getElementById("story-container")
        storiesContainer.innerHTML = ""
        storiesContainer.innerHTML = `${storiesString}`
    }

}

