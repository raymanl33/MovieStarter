// Add DOM selectors to target input and UL movie list
const inp = document.querySelector("input");
const myMovieList = document.querySelector("ul");
let Movie = []

// Example of a simple function that clears the input after a user types something in
const clearInput = () => {
    inp.value = "";
}

const clearMovies = () => {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
const addMovie = () => {
    // Step 1: Get value of input
    userTypedText = inp.value;
    if (userTypedText.length === 0) {
        alert('The input cannot be blank, please enter again!')
    } else {
        const li = document.createElement("li"); // <li></li>
        Movie.push(userTypedText)
        console.log(Movie)
    
    // Step 2: Create an empty <li></li>
    

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    const textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);

    // Step 6: Call the clearInput function to clear the input field
    clearInput();
    }
}

const filterSearch = () => {
    const filterInput = document.querySelector('#filter')
    const filterInner = filterInput.value;
    
    const filter = Movie.filter(word => (word.includes(filterInner)) );
    filterInput.addEventListener("keyup", filter)
    console.log(Movie.length)
    for (i = 0; i < Movie.length; i++) {
        if (Movie.includes(filter[0]) && filterInner.length != 0) {
            
            for (num in Movie) {
                if (filter[0] === Movie[num]) {
                    document.querySelectorAll('li')[num].innerText = Movie[num]
                } else if (filter[num] != Movie[num]) {
                    document.querySelectorAll('li')[num].innerText = ''
                }
                // const li = document.createElement("li"); 
                // const textToInsert = document.createTextNode(Movie[num]);
                // li.appendChild(textToInsert);


                // myMovieList.appendChild(li);



                // if (filter[num] === Movie[num]) {
                //     let filter_replace = filter[num]
                //     document.querySelectorAll('li')[num].innerHTML = filter_replace
                // }
                // else {
                    // document.querySelectorAll('li')[num].innerHTML = '' 
                
                // console.log(filter)
                // let filter_replace = filter[num]
                // document.querySelectorAll('li')[num].innerHTML = filter_replace 


         

            }
          
            // filterInput.insertBefore(filterul);

            // const quick_filter = document.createElement('li');
            
            // const word_suggestion = document.createTextNode(Movie)
            // quick_filter.appendChild(word_suggestion)
            // document.querySelector('#filterli').appendChild(word_suggestion)

        } else if (Movie.includes(filter[0]) === false || filterInner.length === 0) {
            
            // li_del.remove()
            // Movie.splice([i], [i])
            // console.log(Movie)
            for (count in Movie) {
                console.log(Movie[count])
                let filter_replace = Movie[count]
                document.querySelectorAll('li')[count].innerHTML = filter_replace 

                // const filter_li = document.createElement('li');
                // filter_li.textContent = word
                // document.querySelector('li').appendChild(filter_li)

            }
            // const textToInsert = document.createTextNode(userTypedText);

            // Step 4: Insert text into li
            // <li>Harry Potter </li>
            // li.appendChild(textToInsert);
        
            // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
            // myMovieList.appendChild(li);
        }
            
     

        
    }
    console.log(filter)
}
// const filterInput = document.querySelector('#filter')
// const filter = Movie.filter(word => word.length >= 0);
// filterInput.addEventListener("keyup", filter)


// console.log(filter)



// *** use local storage to remember the last used 

// localStorage.setItem()
// localStorage.getItem()