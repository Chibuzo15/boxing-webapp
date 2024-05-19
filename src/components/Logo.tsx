import Image from "../../node_modules/next/image";

const Logo = (props) => {
    return (
        <div>
            <Image
                src={'/images/logo.png'}
                alt="App logo"
                fill
            />
        </div>
    )
}

export default Logo;