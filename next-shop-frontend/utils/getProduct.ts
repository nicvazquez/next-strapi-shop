import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

export async function getProduct(id: number | string) {
	const client = new ApolloClient({
		uri: "http://127.0.0.1:1337/graphql/",
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetProduct {
				product(id: ${id}) {
				data {
					id,
					attributes {
						title,
						description,
						price,
						category
						image {
							data {
							attributes {
								name,
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

	return data.product;
}
