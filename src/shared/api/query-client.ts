import { QueryClient } from "@tanstack/vue-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 5,
			retryDelay: 2000,

			staleTime: 0,
		},
	},
});
