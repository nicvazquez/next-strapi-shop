export async function getProducts() {
    const response = await fetch('http://127.0.0.1:1337/api/products?populate=*')
    const products = await response.json()
    
    return products
}