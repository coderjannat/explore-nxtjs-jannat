import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <p>Logo</p>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/explore"><a>Explore</a></Link>
        </nav>
    );
};

export default Navbar;