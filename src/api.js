import axios from "axios";

const tvPopularParams = {
  api_key: "e6e0dd53c79220875187320b4265f3d6",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing", { params: tvPopularParams }),
  upComing: () => api.get("movie/upcoming", { params: tvPopularParams }),
  popular: () => api.get("movie/popular", { params: tvPopularParams }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        api_key: "e6e0dd53c79220875187320b4265f3d6",
        language: "en-US",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        api_key: "e6e0dd53c79220875187320b4265f3d6",
        language: "en-US",
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", { params: tvPopularParams }),
  popular: () => api.get("tv/popular", { params: tvPopularParams }),
  airingToday: () => api.get("tv/airing_today", { params: tvPopularParams }),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        api_key: "e6e0dd53c79220875187320b4265f3d6",
        language: "en-US",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "e6e0dd53c79220875187320b4265f3d6",
        language: "en-US",
        query: encodeURIComponent(term)
      }
    })
};
