import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Product } from "../../interfaces/products";
import { getFilteredProducts, getProduct, getProducts } from "../../utils";

interface Props {
	product: Product;
	relatedProducts: Product[];
}
function ProductPage({ product, relatedProducts }: Props) {
	return (
		// TO-DO: Separate in components
		<>
			<Header />

			<div className="h-screen grid place-center mt-6">
				<main className="flex flex-col justify-center items-center">
					<div className="flex items-center mb-6">
						<Image
							src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
							alt={`${product.attributes.image.data.attributes.alternativeText}`}
							width={70}
							height={70}
						/>
						<div className="ml-4 flex flex-col items-start justify-center">
							<div className="flex items-center gap-2 font-bold mb-2">
								<h1 className="text-4xl">{product.attributes.title}</h1>{" "}
								<div>
									<span className="text-3xl">${product.attributes.price}</span>{" "}
									/mo
								</div>
							</div>
							<Tag name={product.attributes.category} />
						</div>
					</div>

					<div className="flex items-center flex-col">
						<p className="w-3/5 mb-6">{product.attributes.description}</p>

						<button
							type="button"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</div>
				</main>

				<hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

				{relatedProducts.length > 0 && (
					<section className="pl-3 md:pl-6">
						<h3 className="font-bold text-xl">Related products:</h3>
						<ul>
							{relatedProducts.map((product) => (
								<li key={product.id} className="mt-5">
									<Link
										href={`/products/${product.id}`}
										className="flex items-center gap-4"
									>
										<Image
											src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
											alt={`${product.attributes.image.data.attributes.alternativeText}`}
											width={35}
											height={35}
										/>

										<div>
											<div className="flex items-center gap-3">
												<h2 className="font-bold">
													{product.attributes.title}
												</h2>{" "}
												<Tag name={product.attributes.category} />
											</div>
											<p>{product.attributes.description.slice(0, 70)}...</p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</section>
				)}
			</div>
		</>
	);
}

export const getStaticPaths = async () => {
	const products = await getProducts();
	const productsLengthArray = [...Array(products.data.length)].map(
		(value, index) => `${index + 1}`
	);

	return {
		paths: productsLengthArray.map((id) => ({
			params: { id },
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const product = await getProduct(id);

	const filteredProducts = await getFilteredProducts(
		"category",
		"eqi",
		product.data.attributes.category
	);
	const relatedProducts = filteredProducts.data.filter(
		(filteredProduct: Product) =>
			filteredProduct.attributes.title !== product.data.attributes.title
	);

	return {
		props: {
			product: product.data,
			relatedProducts,
		},
		revalidate: 86400,
	};
};

export default ProductPage;
