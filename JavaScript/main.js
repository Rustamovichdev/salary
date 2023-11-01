const container = document.querySelector(".container")
const planets = document.querySelector("#select")
const input = document.querySelector("input")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const a = document.querySelector(".main")
    if(a) {
        a.remove()
    }

    const main = document.createElement("div")
    main.classList.add("main")
    // main.textContent = ""
    
    if(planets.value === "MERCURY") {
        const cardImg = document.createElement("div")
        cardImg.classList.add("card-img")
        cardImg.style.width = "520px"
        cardImg.style.height = "400px"
        cardImg.style.objectFit = "cover"
        
        const img = document.createElement("img")
        img.classList.add("img")
        img.setAttribute("src", "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png")
        img.style.width = "100%"
        img.style.height = "100%"
        cardImg.appendChild(img)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 3.7)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardImg)
        main.appendChild(text)
    } else if (planets.value === "VENUS") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/93/Venus_globe_-_transparent_background.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 8.87)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    }  else if (planets.value === "EARTH") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 9.81)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "MOON") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://www.freeiconspng.com/uploads/moon-png-no-background-15.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 1.625)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "MARS") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 3.71)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "JUPITER") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_%28transparent%29.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 24.79)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "SATURN") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/011/178/727/non_2x/saturn-on-space-background-elements-of-this-image-furnished-by-nasa-free-png.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 10.44)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "URANUS") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://cdn.pixabay.com/photo/2021/04/05/15/54/uranus-6153865_1280.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 8.69)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "NEPTUNE") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://cdn.pixabay.com/photo/2021/04/05/15/55/neptune-6153867_1280.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 11.15)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if (planets.value === "PLUTO") { 
        const cardEarthImg = document.createElement("div")
        cardEarthImg.classList.add("card-img")
        
        const Earthimg = document.createElement("img")
        Earthimg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/94/Pluto-transparent.png")
        Earthimg.classList.add("img")
        cardEarthImg.appendChild(Earthimg)
        
        const text = document.createElement("div")
        text.classList.add("text")
        const weightText = document.createElement("h2")
        weightText.textContent = `${"The weight of the object on"} ${planets.value}`
        
        const weight = document.createElement("h1")
        weight.textContent = `${Math.round(input.value.trim() * 0.063)} ${"N"}`
        weight.classList.add("weight")
        
        text.appendChild(weightText)
        text.appendChild(weight) 
        
        
        main.appendChild(cardEarthImg)
        main.appendChild(text)   
    } else if(input.value.length = 0) {
        const title = document.createElement("h1")
        title.textContent = "Mass is not given :("
        
        main.appendChild(title)
    } else {
        const title = document.createElement("h1")
        title.textContent = "Planet is not given :("

        main.appendChild(title)
    }
    container.appendChild(main)
}
)