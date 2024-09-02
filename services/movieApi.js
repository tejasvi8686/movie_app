export const fetchMovies = async () => {
    try {
      const response = await fetch('https://ww4.yts.nz/api/v2/list_movies.json');
      const data = await response.json();
      return data.data.movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
  