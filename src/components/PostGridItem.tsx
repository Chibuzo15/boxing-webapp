import Image from "../../node_modules/next/image"

import * as TsSvgs from '@/TsSvgs'
import Link from "../../node_modules/next/link";


type PostGridItemProps = {
    type: 'video' | 'photo';
    title: string;
    commentsCount: number
}

const PostGridItem = (props: PostGridItemProps) => {
    const renderPlayIcon = () => {
        if (props.type !== 'video') return
        return (
            <div
                style={{ border: '2px solid #fff' }}
                className="p-[8px] absolute bottom-[18px] left-[18px] ">
                <TsSvgs.VideosIcon stroke="white" />
            </div>
        )
    }

    const slug = props.title?.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove all characters except letters, numbers, spaces, and hyphens
        .replace(/\s+/g, '-'); // Replace multiple spaces with a single hyphen

    return (
        <Link
            href={"/blog/" + slug}
            className='w-[230px] '
        >
            <div className="h-[130px] w-[230px] relative mb-2">
                <Image
                    src={'/images/blogImage2.jpeg'}
                    fill
                    alt="post grid image"
                />
                {renderPlayIcon()}
            </div>
            <div className="mb-2">
                {props.title}
            </div>
            <div className="flex space-x-[3px]">
                <TsSvgs.ForumIcon />
                <div> {props.commentsCount} comments</div>
            </div>
        </Link>
    )
}

export default PostGridItem