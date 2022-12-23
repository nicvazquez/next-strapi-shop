import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
    const links = [
        {
            name: "Home",
            path: "/"
        }
    ]

    const routerPath = useRouter().asPath
  return (
    <header>
        <nav className="d-flex gap-1">
            {
                links.map(({name, path}) => (
                    routerPath !== path &&  <Link key={name} href={path}>{name}</Link>
                ))
            }
        </nav>
    </header>
  )
}
