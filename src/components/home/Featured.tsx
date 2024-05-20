import Image from "../../../node_modules/next/image"
import { MdArrowForwardIos } from "react-icons/md";
import Divider from "../UI/Divider";



const Featured = props => {

    return (
        <div className="flex flex-wrap md:flex-nowrap p-[12px]">
            <div className="w-full md:w-1/2 h-[200px] md:h-[260px] relative p-[12px]">
                <Image
                    src={'/images/boxingDetailImg.jpeg'}
                    fill
                    alt="featured home image"
                />
            </div>
            <div className="w-full md:w-1/2 p-[12px]">
                <div className="font-bold text-[32px] mb-3">
                    Checkmate: Usyk Several Moves Ahead Of The Gypsy King
                </div>
                <Divider />
                <div className="my-3">
                    A good chess player, it has been said, is someone who can recall patterns,
                    understands tactics and strategies and can envision openings and endgames.
                    One might ask what that has to do with one of the great heavyweight fights of...
                </div>
                <div className="font-bold flex space-x-[4px] items-center">
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