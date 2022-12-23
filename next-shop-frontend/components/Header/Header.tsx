import Link from 'next/link'
import styles from './header.module.css'

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
    <header className={styles.header}>
        <nav>
            {
                links.map(({name, path}) => (
                    <Link key={name} href={path}>{name}</Link>
                ))
            }
        </nav>
    </header>
  )
}
