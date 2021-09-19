// Add DOM selectors to target input and UL movie list
const inp = document.querySelector("input");
const myMovieList = document.querySelector("ul");
const Movie = []
const movie_dict = {}


// SetItem and getItem values using localStorage
const SetGetItem = () => {
    if (localStorage.length > 0) {
        let num = 0
        while (num < localStorage.length) {
            // localStorage Movie Lists
            let key_value = localStorage.key(num);
            let viewed_value = localStorage.getItem(key_value)
            const li = document.createElement("li"); // <li></li>
            const textToInsert = document.createTextNode(key_value)
            li.appendChild(textToInsert);
            myMovieList.appendChild(li);
            Movie.push(key_value)
            console.log(Movie)

            // localStorage Movie History
            movie_dict[key_value] = Number(viewed_value);
            console.log(movie_dict)
            num++;
            

        }
        
        
    }
}

SetGetItem();


// Example of a simple function that clears the input after a user types something in
const clearInput = () => {
    inp.value = "";
    
}

const clearMovies = () => {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

const Movie_lower = () => {
    // create Movie_toLower array that convert Movie array to lowercase
    Movie_toLower = []
    for (num in Movie) {
        Movie_toLower.push(Movie[num].toLowerCase())
    }
}

// This function is executed when the user clicks [ADD MOVIE] button.
const addMovie = () => {
    // Step 1: Get value of input
    Movie_lower();
    const li = document.createElement("li"); // <li></li>
    const userTypedText = inp.value;
    if (userTypedText.length === 0) {
        alert('The input cannot be blank, please enter again!')
    } else {
        if (localStorage.getItem(userTypedText) == null && Movie_toLower.includes(userTypedText.toLowerCase()) === true) {
            console.log('test')
            for (check in Movie) {
                if (Movie[check].toLowerCase() === userTypedText.toLowerCase()) {
                    const add = movie_dict[Movie[check]] + 1
                    
                    const storedMovie = localStorage.setItem([Movie[check]], `${add}`)
                    movie_dict[userTypedText] = Number(add)
                    console.log(movie_dict)
                }
            }
            
            
        } else if (localStorage.getItem(userTypedText) == null && Movie_toLower.includes(userTypedText.toLowerCase()) === false) {
            li;
            const storedMovie = localStorage.setItem(userTypedText, 1);
            movie_dict[userTypedText] = 1;
            Movie.push(userTypedText);
            console.log(movie_dict);
            const textToInsert = document.createTextNode(userTypedText);
            li.appendChild(textToInsert);
            myMovieList.appendChild(li);
            console.log(storedMovie)

        } else if (movie_dict[userTypedText] >= 1) {
            const add = movie_dict[userTypedText] + 1
            const storedMovie = localStorage.setItem(userTypedText, `${add}`)
            movie_dict[userTypedText] = Number(add)
            console.log(movie_dict)
        }

 
        MovieHistory();
        Add_Movie_History();
    
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
                if (filter[0].toLowerCase() === Movie[num].toLowerCase()) {
                    document.querySelectorAll('li')[num].innerText = Movie[num]
                } else if (filter[num] != Movie[num]) {
                    document.querySelectorAll('li')[num].innerText = ''
                }
            }

        } else if (Movie.includes(filter[0]) === false) {
            const Movie_li = document.querySelectorAll('li')
            for (count in Movie_li) {
                Movie_li[count].innerHTML = ''
            }

        } else if (filterInner.length === 0) {
    
            for (count in Movie) {
                console.log(Movie[count])
                let filter_replace = Movie[count]
                document.querySelectorAll('li')[count].innerHTML = filter_replace 

            }

        }

    }
    console.log(filter)
}


const MovieHistory = () => {
    let i = 0
    while (i < Movie.length) {
      for (const num in Movie) {
        if (Movie[num] in movie_dict) {
          movie_dict[Movie[num]] = Number(num) + 1;
          i++;
        } else {
          movie_dict[Movie[num]] = 1;
          
          i++;
        }
       
    }
    
}
}

const Add_Movie_History = () => {
    let table = document.createElement('table')
    table.setAttribute("width", "100%");

    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')
    const Movie_history = document.querySelector('#movieHistoryCard')
    const style = document.querySelector('table')


    Movie_history.appendChild(table)
    table.appendChild(tr)
    const Title = document.createTextNode('Title')
    const Times = document.createTextNode('Views')
    
    tr.appendChild(th)
    th.appendChild(Title)
    th.appendChild(Times)
    
    // let count = 0
    // while (count < Movie.length) {
    //     for (const num in Movie) {
    //         if (movie_dict[Movie[num]] > 1) {
    //             console.log('More than once')
    //             conut++ ;
    //         } else {
    //             let valueToInsert = document.createTextNode(`${Movie[num]}`)
    //             th.appendChild(valueToInsert)
    //             let keyToInsert = document.createTextNode(movie_dict[Movie[num]])
    //             th.appendChild(keyToInsert)
    //             count++ ;
    //         }
    
            
    //     }

    // }
}
