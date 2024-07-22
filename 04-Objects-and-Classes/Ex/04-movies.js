function movies(movieArr) {
    movieArr.reduce((acc, curr) => {
        if (curr.startsWith("addMovie")) {
            const [movieName] = curr.split("addMovie ").filter(Boolean);
            acc.push({
                name: movieName,
            });
        } else if (curr.includes("directedBy")){
            const [movieName, director] = curr.split(" directedBy ");
            const movie = acc.find((x) => x.name === movieName);

            if(movie?.name) { 
                movie.director = director;
            }
        } else if(curr.includes("onDate")) {
            const [movieName, date] = curr.split(" onDate ");
            const movie = acc.find((x) => x.name === movieName);

            if(movie?.name) {
                movie.date = date;
            }
        }

        return acc       
    }, [])

    .filter((x) => x.name && x.director && x.date)
    .forEach((movie) => {
      console.log(JSON.stringify(movie));
    });
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])