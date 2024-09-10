import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul className="xl:flex hidden">
                <li className="relative group">
                    <Link className="menu-item" href="/">Home</Link>
                    {/* <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/" className="menu-sub-item">Home page 01</Link></li>
                        <li><Link href="/index-2" className="menu-sub-item">Home page 02</Link></li>
                        <li><Link href="/index-3" className="menu-sub-item">Home page 03</Link></li>
                    </ul> */}
                </li>
                {/* <li className="relative group">
                    <Link className="menu-item" href="/#">Blog</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/category" className="menu-sub-item">Category 01</Link></li>
                        <li><Link href="/category-2" className="menu-sub-item">Category 02</Link></li>
                        <li><Link href="/category-3" className="menu-sub-item">Category 03</Link></li>
                        <li><Link href="/category-4" className="menu-sub-item">Category 04</Link></li>
                        <li><Link href="/single" className="menu-sub-item">Single 01</Link></li>
                        <li><Link href="/single-2" className="menu-sub-item">Single 02</Link></li>
                    </ul>
                </li> */}
                <li className="relative group">
                    <Link className="menu-item" href="/#">Pages</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/" className="menu-sub-item">Home Page</Link></li>
                        <li><Link href="/product" className="menu-sub-item">Product Page</Link></li>
                        <li><Link href="/careers" className="menu-sub-item">Careers Page</Link></li>
                        <li><Link href="/about" className="menu-sub-item">About Page</Link></li>
                        <li><Link href="/contacts" className="menu-sub-item">Contact</Link></li>
                    </ul>
                </li>
                <li className="relative"><Link href="/product" className="menu-item">Products</Link></li>
                <li className="relative"><Link href="/careers" className="menu-item">Careers</Link></li>
                <li className="relative"><Link href="/about" className="menu-item">About Us</Link></li>
                <li className="relative"><Link href="/contacts" className="menu-item">Contact</Link></li>
            </ul>
        </>
    )
}
