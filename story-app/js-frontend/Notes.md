RENDER TEMP CHAR

function renderTempCharacter(gender, first, last, age, image) {
        const charContainer = document.getElementById("character-container")
        charContainer.innerHTML = ""
          
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
          
        let h3 = document.createElement('h3')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        span1.id = "first-name"
        span2.id = "last-name"
        span1.innerHTML = `${first}`
        span2.innerHTML = ` ${last}`
        h3.appendChild(span1)
        h3.appendChild(span2)
        cardDiv.appendChild(h3)
        charContainer.appendChild(cardDiv)

        let p = document.createElement('p')
        p.id  = "age"
        p.innerHTML = `${age}`
        cardDiv.appendChild(p)

        let img = document.createElement('img')
        img.classList.add("avatar")
        img.src = image
        img.width = 120
        img.height = 150
        cardDiv.appendChild(img)

    }
