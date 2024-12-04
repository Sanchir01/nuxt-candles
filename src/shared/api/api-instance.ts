import { GraphQLClient } from "graphql-request";

export const gqlRequest = new GraphQLClient(
	"https://feature.backend.candles.emgushovs.ru",
	{
		credentials: "include",
	},
);
