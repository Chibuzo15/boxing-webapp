import { useGetNewsFeedQuery } from "@/store/rtk-query/userApi";

import Link from "../../node_modules/next/link";
import Divider from "./UI/Divider";

const NewsFeed = (props) => {
    const { data: newsFeedData } = useGetNewsFeedQuery({})

    return (
        <div className="">
            <div className="text-[18px] text-[red] uppercase my-3 font-bold">
                News Feed
            </div>
            {
                newsFeedData?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div

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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewsFeed;