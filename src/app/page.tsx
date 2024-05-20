"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import Featured from "@/components/home/Featured";
import PostGridItem from "@/components/PostGridItem";
import Divider from "@/components/UI/Divider";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { addClassNames } from "@/utils/functions";
import NewsFeed from "@/components/NewsFeed";
import TrendingTopics from "@/components/Trending";

export default function Home() {

  const responsiveCarousel = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dummyBlogPosts = [
    {
      title: 'Tyson Fury-Oleksandr Usyk Fight',
      commentsCount: 3,
    },
    {
      title: 'Tyson Fury-Oleksandr Usyk Weigh-In',
      commentsCount: 0
    },
    {
      title: 'Conor Benn Discusses Decision Win Over Peter Dobson',
      commentsCount: 13,
    },
    {
      title: `Farrait: “Berlanga Will Be 'More Than Ready' for Canelo`,
      commentsCount: 5,
    },
  ]

  return (
    <main className="flex flex-col pt-5 max-w-[1100px]">
      <Featured />
      <div className="flex flex-wrap md:flex-nowrap p-[12px]">
        <div className="w-full md:w-[70%]  p-[12px]">
          <NewsFeed />
        </div>
        <div className="w-full md:w-[30%] p-[12px]">
          <TrendingTopics />
        </div>
      </div>
      <div className="p-[12px]">
        <Divider />
        <div
          className="p-[12px]"
        >
          <div className="text-[red] uppercase text-[18px] font-bold">photos</div>

          {/* <Carousel
            responsive={responsiveCarousel}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            arrows={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="w-full"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {
              dummyBlogPosts.map((post, index) => {
                return <PostGridItem
                  key={index}
                  {...post}
                  type="photo"
                />
              })
            }
          </Carousel> */}


        </div>
        <Divider />
        <div
          className="p-[12px]"
        >
          <div className="text-[red] uppercase text-[18px] font-bold">videos</div>
          {/* <Carousel
            responsive={responsiveCarousel}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            arrows={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="w-full"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {
              dummyBlogPosts.map((post, index) => {
                return <PostGridItem
                  key={index}
                  {...post}
                  type="video"
                />
              })
            }
          </Carousel> */}
        </div>
        <Divider />
        <Divider />

      </div>
    </main>
  );
}
