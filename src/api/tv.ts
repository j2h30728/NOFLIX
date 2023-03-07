import { tvType } from "../types/tv";
import { API_KEY, BASE_PATH } from "../utils/apiUtils";

export async function getTvs(type: tvType) {
  const response = await fetch(`${BASE_PATH}/tv/${type}?api_key=${API_KEY}`);
  return await response.json();
}

export async function searchTvs(keyword: string | null) {
  const response = await fetch(
    `${BASE_PATH}/search/tv?api_key=${API_KEY}&query=${keyword}`
  );
  return await response.json();
}
export async function getGeneresOfMovies() {
  const reponse = await fetch(
    `${BASE_PATH}/genre/movie/List?api_key=${API_KEY}`
  );
  return await reponse.json();
}
