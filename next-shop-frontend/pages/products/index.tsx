import Head from "next/head"
import Link from "next/link"
import { DataProduct, Products } from "../../interfaces/products"
import { getProducts } from "../../utils"

interface Props {
  products: Products
}

function ProductsPage( { products }: Props ) {

  return (
    <>
    <Head> 
      <title>Next Shop | Products</title>
    </Head>
     <h1>Products</h1>

     <ul>
      {
        products.data.map((product: DataProduct) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.attributes.title}
            </Link>
          </li>
        ))
      }
     </ul>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()

  return { props: { products: products } }
}


export default ProductsPage