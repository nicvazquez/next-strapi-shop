import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Product, Products } from "../../interfaces/products"
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

        <ul className="d-flex justify-between">
            {
                products.data.map((product: Product) => (
                <li key={product.id}>
                    <Link href={`/products/${product.id}`} className="d-flex align-center gap-1">
                        <Image 
                            src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`} 
                            alt={`${product.attributes.image.data.attributes.alternativeText}`} 
                            width={50} 
                            height={50} 
                        />
                        {product.attributes.title}
                    </Link>
                </li>
                ))
            }
        </ul>
    </main>
  )
}
