//let buyTicket = document.getElementById("#button").addEventListener("click", purchase)

// This function is responsible for fetching movie data from a local server and displaying it.
function purchase(){
    // Fetch the data from the specified URL
    fetch("http://localhost:3000/films")
    .then(response => response.json()) // Extract the JSON data from the response
    .then(json => displayMovies(json)) // Call the displayMovies function with the JSON data as an argument
}

// This function is responsible for displaying movies on the webpage
function displayMovies(movies){
    // Find the element with id "MovieList" in the HTML document
    const movieList = document.querySelector("#MovieList")

    // Loop through each movie object in the array
    movies.forEach(element => {
        // Create a new div element to hold the movie information
        let div = document.createElement("div")

        // Create a title element for the movie and set its text content to the title value of the current movie object
        let movieTitle = document.createElement("h3")
        movieTitle.innerText = element.title
        div.appendChild(movieTitle)

        // Create an image element for the movie and set its source attribute to the poster value of the current movie object
        let image= document.createElement("img")
        image.src = element.poster
        div.appendChild(image)

        // Create a time element for the movie and set its text content to the showtime value of the current movie object
        let movieTime = document.createElement("h4")
        movieTime.innerText = element.showtime
        div.appendChild(movieTime)

        // Create a runtime element for the movie and set its text content to the runtime value of the current movie object
        let movieRuntime = document.createElement("h4")
        movieRuntime.innerText = element.runtime
        div.appendChild(movieRuntime)

        //Creating an element that shows the amount of tickets avaialble
        let movieCapacity = document.createElement("h4")
        movieCapacity.innerText = element.capacity
        div.appendChild(movieCapacity)
        
        // Append the created div to the movieList div
        movieList.appendChild(div);
    });
}

