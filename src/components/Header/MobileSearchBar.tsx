import * as TsSvgs from '@/TsSvgs'


const MobileSearchBar = (props) => {
    return (
        <div className='mb-[32px]'>
            <div className="h-[1px] w-full bg-black " />
            <div className="w-full h-[86px] pl-[32px] pr-[10px] flex items-center">
                <TsSvgs.SearchIcon
                    stroke='gray'
                />
                <input
                    placeholder="Search BoxingSite"
                    className='w-[75%] ml-[8px]'
                />
            </div>
            <div className="h-[1px] w-full bg-black" />
        </div>
    )
}

export default MobileSearchBar