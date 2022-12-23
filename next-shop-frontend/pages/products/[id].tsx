import { GetStaticProps } from "next"
import Image from "next/image"
import { Header } from "../../components/Header/Header"
import { Product } from "../../interfaces/products"
import { getProduct, getProducts } from "../../utils"

interface Props {
    product: Product
}
function ProductPage({product}: Props) {
    return (
        <>
            <Header />

            <main>
                <div>
                    <h1>{product.attributes.title}</h1>
                    <Image
                        src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`} 
                        alt={`${product.attributes.image.data.attributes.alternativeText}`} 
                        width={30} 
                        height={30} 
                    />
                </div>
                <p>${product.attributes.price}</p>
                <p>{product.attributes.description}</p>
            </main>

            <h2>Related products:</h2>
        </>
    )

}

export const getStaticPaths = async () => {
    const products = await getProducts()
    const productsLengthArray = [...Array(products.data.length)].map((value, index) => `${index + 1}`)

    return {
        paths: productsLengthArray.map(id => ({
            params: { id }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as { id: string }
    const product = await getProduct(id)

    return {
        props: {
            product: product.data
        },
        revalidate: 86400
    }
}

export default ProductPage