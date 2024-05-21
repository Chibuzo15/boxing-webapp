import Image from "../../../node_modules/next/image"

const NewsRoom = (props) => {
    const subItems = [
        {
            text: 'Exemplary Usyk An ‘Icon’ For Those Suffering In Ukraine',
            icon: undefined
        },
        {

            text: 'We Won. We Did It’: Usyk Discusses The Sacrifices He Made To Rule The World',
            icon: undefined
        },
        {
            text: 'Garcia Insists All Eyes Are On Estrada Amid Bam-Inoue Speculation',
            icon: undefined
        },
    ]

    const renderSubItems = () => {

        return subItems.map((item, index) => {
            return <>
                <div
                    className="font-bold my-3"
                    key={index}>
                    <div>
                        {item.text}
                    </div>
                </div>
                {
                    index + 1 < subItems.length ? <Divider /> : undefined
                }
            </>
        })
    }

    return (
        <div
            className="flex flex-wrap md:flex-nowrap w-full p-[12px]"
        >
            <div className="w-full md:w-1/2 md:mr-[12px] h-[215px] md:h-[270px]">
                <Image
                    src={'/images/boxingDetailImg.jpeg'}
                    fill
                />
            </div>
            <div className="w-full md:w-1/2 md:ml-[[12px]">
                <div className="flex items-center justify-between">
                    <div className="uppercase text-[32px] font-bold">John VS Doe</div>
                </div>
                <div
                    className="space-y-3 flex flex-col text-[22px]"
                >
                    {renderSubItems}
                </div>
            </div>
        </div>
    )
}

export default NewsRoom