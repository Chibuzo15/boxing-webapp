'use client'

import { addClassNames } from '@/utils/functions';
import Link from 'next/link'

const Footer = () => {

    return <footer
        className="sm:mx-[60px] flex flex-col items-center"
    >
        <div className="bg-[#000000] h-[1px] w-full my-[37px] max-w-[575px]"></div>

        <div className='mx-[10px] max-w-[575px] px-[19px] sm:px-[0] w-full mt-[118px] justify-between items-center mt-[80px] mb-[30px]'>
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
    </footer>
}

export default Footer