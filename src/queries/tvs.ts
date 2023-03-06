import { useQuery } from "@tanstack/react-query";
import { getTvs, searchTvs } from "../api/tv";
import { IGeLatesttTv, IGetTvs, tvType } from "../types/tv";

export function queryAiringTodayTvs() {
  return useQuery<IGetTvs>(["tvs", tvType.airing_today], () =>
    getTvs(tvType.airing_today)
  );
}
export function queryLatestTvs() {
  return useQuery<IGeLatesttTv>(["tvs", tvType.latest], () =>
    getTvs(tvType.latest)
  );
}
export function queryTopRatedTvs() {
  return useQuery<IGetTvs>(["tvs", tvType.top_rated], () =>
    getTvs(tvType.top_rated)
  );
}
export function querySearchedTvs(keyword: string | null) {
  return useQuery<IGetTvs>(["searchedTv", keyword], () => searchTvs(keyword));
}
