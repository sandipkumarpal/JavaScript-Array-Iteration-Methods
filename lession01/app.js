const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
  ]

  const arrMovie = movies.reduce((array, movie) => [...array, ...movie], []);

  console.log(arrMovie);