import * as React from "react";

// import NavigationItem from "./NavItem";
import classes from "./navitems.module.css";

import Link from "next/link";

import * as TsSvgs from '@/TsSvgs'

import { usePathname } from 'next/navigation'
import { addClassNames } from "@/utils/functions";
import MobileSearchBar from "../MobileSearchBar";


const Divider = ({ classes }) => <div className={addClassNames("h-[1px] w-full bg-black", classes)} />

const NavigationItems = (props) => {
    const pathname = usePathname()

    console.log('pathname ', pathname)

    // ...
    let mobileClasses = [classes["NavigationItemsMobile"], classes["Close"]];

    if (props.showMobile) {
        mobileClasses = [classes["NavigationItemsMobile"], classes["Open"]];
    }

    const NavigationItemsARR = [
        {
            name: "Features",
            link: "/features",
            icon: (props) => <TsSvgs.FeaturesIcon {...props} />,
        },
        {
            name: "Schedule",
            link: "/schedule",
            icon: (props) => <TsSvgs.ForumIcon {...props} />,
        },
        {
            name: "Results",
            link: "/results",
            icon: (props) => <TsSvgs.ResultsIcon {...props} />,
        },
        {
            name: "Rankings",
            link: "/rankings",
            icon: (props) => <TsSvgs.RankingsIcon {...props} />,
        },
        {
            name: "Videos",
            link: "/videos",
            icon: (props) => <TsSvgs.VideosIcon {...props} />,
        },
        {
            name: "Forum",
            link: "/forum",
            icon: (props) => <TsSvgs.ForumIcon {...props} />,
        },
        {
            name: "Search",
            link: "/search",
            icon: (props) => <TsSvgs.SearchIcon {...props} />,
        },
        {
            name: "Sign In/Join",
            link: "/",
            icon: (props) => <TsSvgs.UserIcon {...props} />,
        },
    ];

    //Navigation items array
    let NavigationItems = NavigationItemsARR.map((nav) => {
        const Icon = nav.icon
        const isActive = nav.link == pathname

        return (
            <Link
                href={nav.link}
                key={nav.name}
            >
                <div className="flex flex-col items-center uppercase">
                    <Icon
                        stroke={isActive ? 'red' : 'black'}
                    />
                    <div className="text-[14px] font-[500]">
                        {nav.name}
                    </div>
                </div>
            </Link>
        );
    });

    const renderMobileList = () => {
        const items = NavigationItemsARR?.filter((nav) => nav?.name?.toLowerCase() != 'search');

        return (
            <div>
                <MobileSearchBar />

                {items.map((nav, index) => {
                    const Icon = nav.icon
                    const isActive = nav.link == pathname
                    return (
                        <Link
                            href={nav.link}
                            key={nav.name}
                            className=" mb-[32px]  min-h-[30px] flex flex-col justify-center"
                        >
                            {/* <li onClick={props.clicked} > */}
                            {nav.name.includes('Join') ? <Divider classes={'mb-[32px]'} /> : undefined}
                            <div className="flex space-x-[24px] pl-[25px]">
                                <div className="">
                                    <Icon
                                        stroke={isActive ? 'red' : 'black'}
                                    />
                                </div>
                                <div className="text-[14px] font-[500] uppercase">
                                    {nav.name}
                                </div>
                            </div>
                            {/* </li> */}
                            {nav.name.includes('Join') ? <Divider classes={'mt-[32px]'} /> : undefined}

                        </Link>
                    );
                })}
            </div>
        );
    };

    const renderMobileMenu = () => {
        return (
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
                className='bg-white '
            >
                <div style={{ flex: 0.7 }}>{renderMobileList()}</div>
                <div
                    style={{
                        flex: 0.3,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                </div>
            </div>
        );
    };



    return (
        <div>
            <div
                className={`${classes["NavigationItems"]} space-x-[8px]`}
            >
                {NavigationItems}
            </div>

            <div className={mobileClasses.join(" ")}>{renderMobileMenu()}</div>
        </div>
    );
};

export default NavigationItems;