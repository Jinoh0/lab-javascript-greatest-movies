// The `movies` array from the file `src/data.js`.
// console.log('movies:', movies);
const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movielist) {

  // const onlyDirectors= [];
  // for (i=0 ; i < movies.length ; i++) {
  //   onlyDirectors.push(movies[i].director);
  // } 
  //  return onlyDirectors

   const onlyD = movies.map ((currentMovie) => {
    return currentMovie.director ;
  })
  return onlyD
}
// console.log (getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(stevenspielberg) {
  let counter = 0
  
  if (stevenspielberg.length === 0) {
    return 0
  }
    else {
   
  const steven = getAllDirectors(movies).filter ((currentDirector) => {
    if (currentDirector === 'Steven Spielberg') {
      counter +=1
      
    }
  }
  )
} return counter;
}

// console.log (howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesavg) {
  const notas  = movies.map((currentElement) => {
    return currentElement.score  
  })  
  const avg = notas.reduce((getavg,a) => {    
    return getavg+a;
  }); 
  return parseFloat((avg/notas.length).toFixed(2))
}
// console.log (scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaScrAvg) {
  if (dramaScrAvg.length === 0) {
    return false;
  }

  const dramaMovies = movies.filter((currentMovie) => {
    if (currentMovie.genre.includes("Drama") === true) {
      return currentMovie;
    }   
  })
  
  const dramaMoviesScore = dramaMovies.map((currentDrama) => {
    return currentDrama.score;
  })
  
  const sum = dramaMoviesScore.reduce((total,nextValue) => {
    return total+nextValue;
  })
  const avg = parseFloat((sum/dramaMoviesScore.Length).toFixed(2))

  return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesByYear) {
  const allYr = movies.map((currentMovie) => {
    return currentMovie.score  
  }).sort((a,b) => a-b)


  return allYr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesTitles) {
  const allTitles = movies.map((currentMovie) => {
    return currentMovie.title  
  }).sort((a,b) => a.localeCompare(b));
  return allTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}




















































// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
