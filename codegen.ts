import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
	overwrite: true,
	schema: "https://feature.backend.candles.emgushovs.ru",
	documents: ["src/**/*.vue"],
	ignoreNoDocuments: true,
	generates: {
		"src/shared/graphql/gql/": {
			preset: "client",
			config: {
				documentMode: "string",
				useTypeImports: true,
			},
		},
		"./schema.graphql": {
			plugins: ["schema-ast"],
			config: {
				includeDirectives: true,
			},
		},
	},
};

export default config;
