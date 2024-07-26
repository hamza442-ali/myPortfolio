import Link from "next/link";

const Nav = () => {
  return (
    <div className="header">
      <Link href="/" className="logo">Hamza</Link>
      <nav className="navbar">
        <Link href="/">Home</Link> 
        <Link href="/projects">Projects</Link>  
        <Link href="/about">About</Link>      
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
