import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

const Logo = (props) => {
    return (
        <Link
            href="/"
        >
            <Image
                src={'/images/logo.png'}
                alt="App logo"
                fill
            />
        </Link>
    )
}

export default Logo;