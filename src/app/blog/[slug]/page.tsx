'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

import * as TsSvgs from '@/TsSvgs'

import { MdShare, MdMail } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";


import Divider from "@/components/UI/Divider";
import { addClassNames } from "@/utils/functions";

import { Bitter } from "next/font/google";
import NewsFeed from "@/components/NewsFeed";
import TrendingTopics from "@/components/Trending";


const tags = [
  'Tag1', 'tag2', 'tag3'
]

const comments = [
  {
    author: 'john',
    date: '05-19-2024',
    content: 'lorem ipsum dolor'
  },
  {
    author: 'jane',
    date: '05-19-2024',
    content: 'Blah, blah, blah....'
  },
  {
    author: 'doe',
    date: '05-19-2024',
    content: 'lorem ipsum dolor'
  },
]


export default function Page() {
  const router = useRouter();
  // const postSlug = router;

  const renderImage = () => {
    return (
      <div >
        <div className="w-full h-[350px] relative">
          <Image src={"/images/boxingDetailImg.jpeg"} fill />
        </div>
        <div className="mt-3">
          <div>
            BY <span className="underline uppercase">John Doe</span>
          </div>
          <div className="italic text-[#767676] text-[14px]">Published Sun May 19, 2024, 03:00 PM EDT</div>
        </div>
      </div>
    );
  };

  const renderCommentsStats = () => {
    return (
      <div>
        <div className="flex items-center justify-between my-4">
          <div className="flex space-x-[3px]">
            <TsSvgs.ForumIcon />
            <div> 5 comments</div>
          </div>

          <div className="flex space-x-[13px]">
            <div className="bg-[#a6a6a633] h-[35px] w-[35px] rounded-[100%] flex items-center justify-center">
              <MdMail />
            </div>
            <div className="bg-[#a6a6a633] h-[35px] w-[35px] rounded-[100%] flex items-center justify-center">
              <MdShare />
            </div>
          </div>
        </div>
        <Divider />
      </div>
    )
  }

  const renderComments = () => {
    return (
      <div >
        <div className="uppercase flex space-x-[3px] my-4">
          <TsSvgs.ForumIcon
            stroke="red"
          />
          <span>
            Comments
          </span>
        </div>
        <Divider
          classes={'!bg-[#a7a7a7]'}
        />
        <div className="my-4">
          {comments?.map((comment, index) => {
            return (
              <div key={index} >
                <div className="flex mb-2 ml-[16px]">
                  <div className="w-[40px] mr-2">
                    <TsSvgs.UserIcon />
                  </div>
                  <div>
                    <div className="flex space-x-[8px]">
                      <span className="font-bold">
                        {comment.author}
                      </span>
                      <span className="italic">
                        {comment.date}
                      </span>
                    </div>
                    <div className="mt-1">
                      {comment.content}
                    </div>
                  </div>
                </div>
                <Divider
                  classes={'!bg-[#a7a7a7]'}
                />
              </div>
            )
          })}
        </div>

      </div>
    )
  }

  const renderTags = () => {
    return (
      <div >
        <div className="uppercase flex space-x-[3px] my-4">
          <IoPricetagsOutline color='red' />

          <span>
            Tags
          </span>
        </div>

        <div className="flex space-x-[10px] flex-wrap mb-5">
          {
            tags.map((tag, index) => {
              return (
                <div
                  style={{ border: '1px solid #909090' }}
                  className="text-[#a7a7a7] h-[40px] px-[16px] flex items-center"
                  key={index}>
                  <span>{tag}</span>
                </div>
              )
            })
          }
        </div>

        <Divider />
      </div>
    )
  }

  return (
    <main className=" max-w-[1100px]">
      <div className="flex flex-wrap md:flex-nowrap m-[12px]">
        <div className="w-full md:w-[60%] p-[12px]">
          <div
            className={
              addClassNames(
                "mb-3 text-[32px] font-bold"
              )
            }
          >Checkmate: Usyk Several Moves Ahead Of The Gypsy King</div>
          {renderImage()}
          {renderCommentsStats()}
          <div className="py-4">
            A good chess player, it has been said, is someone who can recall patterns, understands tactics and strategies and can envision openings and endgames.
            <br />
            <br />
            One might ask what that has to do with one of the great heavyweight fights of modern times, but if you look behind the bloody display of skill, inspect the I.Q behind the desire and look at the shifts in momentum of a tumultuous struggle in Saudi Arabia, you could be excused for thinking the new undisputed heavyweight champion of the world, Oleksandr Usyk, might have been able to imitate his success in the ring while sat at a chessboard.
            <br />
            <br />
            For while Usyk was able to match bravery and brawn with the enormous Gypsy King, Tyson Fury, he was also able to think and scheme. And it appeared for the opening quarter of the fight that Usyk’s initial ideas about how he might win were enough.
            <br />
            <br />
            He picked, poked and prodded with persistent shots but, importantly, he landed a big early left hand that showed Fury that Usyk was a “middleweight” no more.
            <br />
            <br />
            There was a visible look of shock as Fury’s distorted face returned to its original shape as a consequence.
            <br />
            <br />
            But to Fury’s credit, he made his own adjustments. In that respect, he started to take some of Usyk’s pieces off the board.
          </div>
          {renderCommentsStats()}
          {renderTags()}
          {renderComments()}
          <NewsFeed />
        </div>
        <div className="w-full md:w-[40%] p-[12px]">
          <Divider />
          <TrendingTopics />
        </div>
      </div>
    </main>
  );
}
