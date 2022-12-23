/**
 *
 * @returns Docs: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
 */
export async function getFilteredProducts(
	field: string,
	operator: string,
	value: string
) {
	// Example: ?filters[category][$eqi]=management
	const response = await fetch(
		`http://127.0.0.1:1337/api/products?filters[${field}][$${operator}]=${value}&populate=*`
	);
	const products = await response.json();

	return products;
}
