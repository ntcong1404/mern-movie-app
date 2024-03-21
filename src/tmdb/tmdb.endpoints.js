import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  mediaTrending: ({ item, time }) =>
    tmdbConfig.getUrl(`trending/${item}/${time}`),

  mediaSearch: ({ item, query, page }) =>
    tmdbConfig.getUrl(`search/${item}`, { query, page }),

  mediaGenres: ({ item }) => tmdbConfig.getUrl(`genre/${item}/list`),
  mediaMain: ({ item, page }) =>
    tmdbConfig.getUrl(`${item}/now_playing`, { page }),

  mediaDiscover: ({ item, with_genres, with_keywords, page }) =>
    item === "movie"
      ? with_keywords
        ? tmdbConfig.getUrl(`discover/movie`, {
            with_keywords,
            page,
          })
        : with_genres === "now_playing"
        ? tmdbConfig.getUrl(`movie/now_playing`, { page })
        : with_genres === "popular"
        ? tmdbConfig.getUrl(`movie/popular`, { page })
        : with_genres === "top_rated"
        ? tmdbConfig.getUrl(`movie/top_rated`, { page })
        : with_genres === "upcoming"
        ? tmdbConfig.getUrl(`movie/upcoming`, { page })
        : tmdbConfig.getUrl(`discover/${item}`, {
            with_genres,
            page,
          })
      : with_keywords
      ? tmdbConfig.getUrl(`discover/tv`, {
          with_keywords,
          page,
        })
      : with_genres === "top_rated"
      ? tmdbConfig.getUrl(`tv/top_rated`, { page })
      : with_genres === "popular"
      ? tmdbConfig.getUrl(`tv/popular`, { page })
      : with_genres === "airing_today"
      ? tmdbConfig.getUrl(`tv/airing_today`, { page })
      : with_genres === "on_the_air"
      ? tmdbConfig.getUrl(`tv/on_the_air`, { page })
      : tmdbConfig.getUrl(`discover/${item}`, {
          with_genres,
          page,
        }),

  mediaDetails: ({ item, id }) => tmdbConfig.getUrl(`${item}/${id}`),
  mediaDetailsOptions: ({ item, id, option }) =>
    tmdbConfig.getUrl(`${item}/${id}/${option}`),
  mediaCollections: ({ id }) => tmdbConfig.getUrl(`collection/${id}`),
  mediaSeason: ({ id, number }) =>
    tmdbConfig.getUrl(`tv/${id}/season/${number}`),
};

const tmdbEndpointsPerson = {
  mediaPeople: ({ type, page }) =>
    tmdbConfig.getUrl(`person/${type}`, { page }),
};

export { tmdbEndpointsPerson, tmdbEndpoints };
