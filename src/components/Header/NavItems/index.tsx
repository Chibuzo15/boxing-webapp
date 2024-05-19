import * as React from "react";

// import NavigationItem from "./NavItem";
import classes from "./navitems.module.css";

import Link from "next/link";

import * as TsSvgs from '@/TsSvgs'

import { usePathname } from 'next/navigation'


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
            icon: (props) => <TsSvgs.FeaturesIcon />,
        },
        {
            name: "Schedule",
            link: "/schedule",
            icon: (props) => <TsSvgs.ForumIcon />,
        },
        {
            name: "Results",
            link: "/results",
            icon: (props) => <TsSvgs.ResultsIcon />,
        },
        {
            name: "Rankings",
            link: "/rankings",
            icon: (props) => <TsSvgs.RankingsIcon />,
        },
        {
            name: "Videos",
            link: "/videos",
            icon: (props) => <TsSvgs.VideosIcon />,
        },
        {
            name: "Forum",
            link: "/forum",
            icon: (props) => <TsSvgs.ForumIcon />,
        },
        {
            name: "Search",
            link: "/search",
            icon: (props) => <TsSvgs.SearchIcon />,
        },
        {
            name: "Sign In/Join",
            link: "/",
            icon: (props) => <TsSvgs.UserIcon />,
        },
    ];

    //Navigation items array
    let NavigationItems = NavigationItemsARR.map((nav) => {
        const Icon = nav.icon
        return (
            <li onClick={props.clicked} key={nav.name}>
                <div className="flex flex-col items-center uppercase">
                    <Icon />
                    <Link
                        href={nav.link}
                        className="text-[14px] font-[500]"
                    >
                        {nav.name}
                    </Link>
                </div>
            </li>
        );
    });

    const renderMobileList = () => {
        const items = NavigationItemsARR;

        return (
            <ul>
                {items.map((nav, index) => {
                    const Icon = nav.icon
                    return (

                        <li onClick={props.clicked} key={nav.name}>
                            <Link
                                href={nav.link}
                                className="text-[14px] font-[500]"
                            >
                                <div>
                                    <Icon />
                                </div>
                                {nav.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
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
                className='bg-white pl-[25px]'
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
            <ul
                className={`${classes["NavigationItems"]} space-x-[8px]`}
            >
                {NavigationItems}
            </ul>

            <div className={mobileClasses.join(" ")}>{renderMobileMenu()}</div>
        </div>
    );
};

export default NavigationItems;