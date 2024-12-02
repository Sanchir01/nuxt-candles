import { useQuery } from "@tanstack/vue-query";
import { CandlesSortEnum } from "../graphql/gql/graphql";
import { candlesService } from "../service/candles";

export const useAllCandles = () => {
	return useQuery({
		...candlesService.AllCandlesQueryOptions({
			sort: CandlesSortEnum.CreatedAtAsc,
			categoryId: null,
			colorId: null,
			pageNumber: 1,
			pageSize: 20,
		}),
		select: (data) =>
			data.candles?.allCandles.__typename === "AllCandlesOk"
				? data.candles.allCandles.candles
				: [],
	});
};
