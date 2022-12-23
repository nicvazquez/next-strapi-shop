import Head from "next/head"
import Link from "next/link"
import { DataProduct, Products } from "../../interfaces/products"
import { Header } from "../Header/Header"

interface Props {
    children: JSX.Element | JSX.Element[]
    title: string
    products: Products
}

export const ProductsPageLayout = ({children, title, products}: Props) => {
  return (
    <main>
        <Head>
            <title>{title}</title>
        </Head>
        
        <Header />

        <h1>{title}</h1>

        {children}

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
    </main>
  )
}
