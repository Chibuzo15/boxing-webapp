import Link from "../../node_modules/next/link";
import Divider from "./UI/Divider";

const NewsFeed = (props) => {

    const dummyFeed = [
        {
            title: 'Fury-Usyk Fight Week Diary: Day Five',
            time: '30m'
        },
        {
            title: 'Agit Kabayel: I Hate Trash Talk, We Will See Who Is Next',
            time: '35m'
        },
        {
            title: 'Hernandez Open To Offers After Matchroom Contract Ends',
            time: '40m'
        },
        {
            title: 'Itauma Targets Schwarz And Calls Out Dacres',
            time: '50m'
        },
        {
            title: 'Khamukov Tops De La Cruz In Redwood',
            time: '60m'
        },
    ]

    return (
        <div className="">
            <div className="text-[18px] text-[red] uppercase my-3 font-bold">
                News Feed
            </div>
            {
                dummyFeed?.map((item, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className="my-[20px]"
                            >
                                <Link
                                    href="/blog/any-post-slug"
                                >
                                    <div>
                                        <div
                                            className="text-[22px] font-bold mb-1"
                                        >
                                            {item.title}
                                        </div>
                                        <div className="text-[14px] text-[#767676]">
                                            {item.time} ago
                                        </div>

                                    </div>
                                </Link>

                            </div>
                            <Divider />
                        </>
                    )
                })
            }
        </div>
    )
}

export default NewsFeed;