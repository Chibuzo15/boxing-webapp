import Image from "../../../node_modules/next/image"
import { MdArrowForwardIos } from "react-icons/md";



const Featured = props => {

    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 h-[200px] md:h-[260px]">
                <Image
                    src={'/images/boxingDetailImg.jpeg'}
                    fill
                />
            </div>
            <div className="w-full md:w-1/2">
                <div className="font-bold">
                    Checkmate: Usyk Several Moves Ahead Of The Gypsy King
                </div>
                <div>
                    A good chess player, it has been said, is someone who can recall patterns,
                    understands tactics and strategies and can envision openings and endgames.
                    One might ask what that has to do with one of the great heavyweight fights of...
                </div>
                <div className="font-bold">
                    <span>READ MORE</span>
                    <MdArrowForwardIos
                        color="red"
                    />
                </div>
            </div>
        </div>
    )
}

export default Featured