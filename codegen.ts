import type { CodegenConfig } from '@graphql-codegen/cli'
const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://feature.backend.candles.emgushovs.ru',
	documents: 'src/shared/graphql/mySchemas/**/*.gql',
	ignoreNoDocuments: true,
	generates: {
		'src/shared/graphql/gql/': {
			preset: 'client',
			config: {
				preset:"client",
				useTypeImports: true
			},
			
		}
	}
}

export default config
