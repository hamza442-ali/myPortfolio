import Link from "next/link";
import Image from "next/image";


const nav = () => {
  return (
    <div className="header">
        <Link href="/" className="logo">Hamza</Link>
    <nav className="navbar">
        <Link href="/"> Home </Link>
        <Link href="/projects"> Projects </Link>
        <Link href="/services"> Services </Link>
        <Link href="/contact"> Contact </Link>
        <Link href="/about"> About </Link>

    </nav>
    </div>
  )
}

export default nav