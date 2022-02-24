import type { NextComponentType } from 'next';
import Link from 'next/link';

const Navbar: NextComponentType = () => {
    return (
        <ul className="navbar">

            <Link href="/"><a><li> PROJEKTID </li></a></Link>
            <Link href="kontakt"><a><li> KONTAKT </li></a></Link>
            <Link href="https://github.com/Kaurikallaste" prefetch={false}><a target="_blank"><li> GITHUB </li></a></Link>
        </ul>
    );
}

export default Navbar;
