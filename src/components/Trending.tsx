import { useGetTrendingTopicsQuery } from "@/store/rtk-query/userApi";
import Link from "../../node_modules/next/link";
import Divider from "./UI/Divider";

const TrendingTopics = (props) => {
    const { data: trendingTopicsData } = useGetTrendingTopicsQuery()

    return (
        <div className="p-12px">
            {/* <Divider /> */}
            <div className="text-[18px] text-[red] uppercase my-3 font-bold">
                Trending Topics
            </div>
            <div className="flex items-center justify-between my-2">
                <div className="font-bold text-[22px]">
                    Fury vs. Usyk
                </div>
                <div></div>
            </div>
            <div className=" pl-[8px]">
                {
                    trendingTopicsData?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='py-[16px]'>
                                    <Link
                                        href="/blog/any-post-slug"

                                    >
                                        <div className="text-[#767676]">
                                            <div>
                                                {item.title}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {index + 1 < trendingTopicsData?.length ? <Divider classes={'!bg-[#767676]'} /> : undefined}
                            </div>
                        )
                    })
                }
            </div>
            <Divider />
            <div className="flex items-center justify-between my-2">
                <div className="font-bold text-[22px]">
                    Tyson Fury
                </div>
                <div></div>
            </div>
            {/* placeholder repitition */}
            <div className="pl-[12px]">
                {
                    trendingTopicsData?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='py-[16px]'>
                                    <Link
                                        href="/blog/any-post-slug"

                                    >
                                        <div className="text-[#767676]">
                                            <div>
                                                {item.title}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {index + 1 < trendingTopicsData?.length ? <Divider classes={'!bg-[#767676]'} /> : undefined}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendingTopics;