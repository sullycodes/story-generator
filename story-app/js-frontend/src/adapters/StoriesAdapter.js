class StoriesAdapter {
    constructor() {
        this.baseUrl =
        "http://localhost:3000/api/v1/stories"
    }

    getStories() {
        return fetch(this.baseUrl)
        .then( response => response.json() )
    }

    saveStoryToRailsAPI(title, plot) {
        const story = {
            title: title,
            plot: plot
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify({ story }),  
        }).then(res => res.json())
    }

    deleteStoryFromRailsAPI(id) {

        // render spinner
   
        return fetch(this.baseUrl + "/" + id, {
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

    // deleteCharFromRailsAPI(id) {
   
    //     return fetch(this.baseUrl + "/" + id, {
    //         method: 'DELETE' 
    //     }).then(res => {
    //         if (!res.ok)  {
    //             throw res
    //         }
    //         return res.json()
    //     })
    //     .catch(err => {
    //         alert('Could not delete')
    //     })    
    // }    


}

