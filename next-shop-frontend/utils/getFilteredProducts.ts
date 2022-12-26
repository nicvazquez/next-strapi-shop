/**
 *
 * @returns Docs: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
 */

import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

export async function getFilteredProducts(
	field: string,
	operator: string,
	value: string
) {
	// Example: ?filters[category][$eqi]=management
	// const response = await fetch(
	// 	`http://127.0.0.1:1337/api/products?filters[${field}][$${operator}]=${value}&populate=*`
	// );
	const client = new ApolloClient({
		uri: "http://127.0.0.1:1337/graphql/",
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetProduct {
				products(filters: { ${field}: { ${operator}: "${value}" } }) {
					data {
						id
						attributes {
							title
							description
							category
							image {
								data {
									attributes {
										name
										url
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	return data.products;
}
