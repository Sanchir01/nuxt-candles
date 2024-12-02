import { GraphQLClient } from "graphql-request";

export const gqlRequest = new GraphQLClient(
	import.meta.dev ? "http://localhost:5000" : import.meta.env.SERVER_URL,
	{
		credentials: "include",
	},
);
