// {
//     isFetching: false,
//     lastUpdated: action.received,
//     movies: [...state.movies, ...arrayOfData],
//     apiPage: action.data.page,
//     totalPage: action.data.total_pages,
//     totalResults: action.data.total_results,
//   }
let movie = [
  {
    vote_count: 1218,
    id: 299534,
    video: false,
    vote_average: 8.8,
    title: 'Avengers: Endgame',
    popularity: 287.525,
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    original_language: 'en',
    original_title: 'Avengers: Endgame',
    genre_ids: [12, 878, 28],
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    adult: false,
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    release_date: '2019-04-24',
  },
  {
    vote_count: 242,
    id: 456740,
    video: false,
    vote_average: 5.2,
    title: 'Hellboy',
    popularity: 267.105,
    poster_path: '/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg',
    original_language: 'en',
    original_title: 'Hellboy',
    genre_ids: [28, 12, 14],
    backdrop_path: '/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg',
    adult: false,
    overview:
      "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
    release_date: '2019-04-10',
  },
];

export const allMovies = {
  isFetching: false,
  lastUpdated: '',
};

