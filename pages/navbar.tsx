import type { NextComponentType } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router';


const Navbar: NextComponentType = () => {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <ul className="navbar">

            <Link href="/"><a><li className={router.pathname == "/" ? "current-url" : ""}> PROJEKTID </li></a></Link>
            <Link href="/kontakt"><a><li className={router.pathname == "/kontakt" ? "current-url" : ""}> KONTAKT </li></a></Link>
            <Link href="https://github.com/Kaurikallaste" prefetch={false}><a target="_blank"><li> GITHUB </li></a></Link>
        </ul>
    );
}

export default Navbar;
