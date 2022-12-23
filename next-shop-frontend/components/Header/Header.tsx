import Link from 'next/link'

export const Header = () => {
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Products",
            path: "/products"
        }
    ]
  return (
    <header>
        <nav className="d-flex gap-1">
            {
                links.map(({name, path}) => (
                    <Link key={name} href={path}>{name}</Link>
                ))
            }
        </nav>
    </header>
  )
}
