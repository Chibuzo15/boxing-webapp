'use client'

import { addClassNames } from '@/utils/functions';
import Link from 'next/link'
import Divider from './UI/Divider';

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";


import {
    Accordion,
    AccordionSummary,
    AccordionDetails

} from '@mui/material';

const Footer = () => {

    const legalColumn = [
        {
            title: 'Privacy Policy',
            link: '#'
        },
        {
            title: 'Terms of Use',
            link: '#'
        },
        {
            title: 'Cookie Policy',
            link: '#'
        },
    ]

    const inTouchColumn = [
        {
            title: 'Contact Us',
            link: '#'
        },
        {
            title: 'Submit News',
            link: '#'
        },
    ]

    const whoWeAreColumn = [
        {
            title: 'Team',
            link: '#'
        },
    ]

    return <footer
        className="pb-6 w-full"
    >
        <Divider />

        <div className='flex flex-wrap md:flex-nowrap px-3 pt-3'>

            {/* column 1 */}
            <div className='w-full md:w-[25%]'>
                {/* mobile view */}
                <div className=' md:hidden'>
                    <Accordion elevation={0}>
                        <AccordionSummary
                            expandIcon={<IoChevronDownSharp />
                            }
                        >
                            <div className='uppercase underline font-bold'>legal</div>
                        </AccordionSummary>
                        <AccordionDetails >
                            {
                                legalColumn?.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                        >
                                            <div className='text-[#a7a7a7] font-bold'>
                                                {item.title}
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* large screen */}
                <div className='hidden md:block'>
                    <div className='uppercase underline font-bold'>legal</div>
                    <div className='space-y-[4px]'>
                        {
                            legalColumn?.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={item.link}
                                    >
                                        <div className='text-[#a7a7a7] font-bold'>
                                            {item.title}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* column 2 */}
            <div className='w-full md:w-[25%]'>
                {/* mobile view */}
                <div className=' md:hidden'>
                    <Accordion elevation={0}>
                        <AccordionSummary
                            expandIcon={<IoChevronDownSharp />
                            }
                        >
                            <div className='uppercase underline font-bold'>get in touch</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="space-y-[5px] flex flex-col">
                                {
                                    inTouchColumn?.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.link}
                                            >
                                                <div className='text-[#a7a7a7] font-bold'>
                                                    {item.title}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* large screen */}
                <div className='hidden md:block'>
                    <div className='uppercase underline font-bold'>get in touch</div>
                    {
                        inTouchColumn?.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.link}
                                >
                                    <div className='text-[#a7a7a7] font-bold'>
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            {/* column 3 */}
            <div className='w-full md:w-[25%]'>
                <div>
                    {/* mobile view */}
                    <div className=' md:hidden'>
                        <Accordion elevation={0}>
                            <AccordionSummary
                                expandIcon={<IoChevronDownSharp />
                                }
                            >
                                <div className='uppercase underline font-bold'>who we are</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    whoWeAreColumn?.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.link}
                                            >
                                                <div className='text-[#a7a7a7] font-bold'>
                                                    {item.title}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    {/* large screen */}
                    <div className='hidden md:block'>
                        <div className='uppercase underline font-bold'>who we are</div>
                        {
                            whoWeAreColumn?.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={item.link}
                                    >
                                        <div className='text-[#a7a7a7] font-bold'>
                                            {item.title}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex md:flex-wrap items-center px-[14px] md:px-0 justify-between my-2'>
                    <div className='uppercase underline font-bold md:w-full'>follow us</div>
                    <div className='flex space-x-[10px]'>
                        <Link href='#'>
                            <FaFacebookF color='#a7a7a7' />
                        </Link>
                        <Link href='#'>
                            <FaXTwitter color='#a7a7a7' />
                        </Link>
                    </div>
                </div>
            </div>


            {/* column 4 */}
            <div className='w-full md:w-[25%] mt-3 md:mt-0 px-[12px] md:px-0 mb-2'>
                <div className='text-[#928B8B] font-[500] text-[13px] mb-2 '>
                    This website may contain adult language
                </div>
                <div className='text-[#928B8B] font-[500] text-[13px] '>
                    @2024 Boxing Site
                </div>
                <div className='flex items-center text-[#928B8B] font-[500] text-[13px] '>
                    <span>All Rights reserved</span>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer