import Image from "../../../node_modules/next/image"
import Divider from "../UI/Divider"

const CoverageItem = props => {

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
                        {item.icon}
                    </div>
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
            className="p-4"
        >
            <div className="flex justify-between py-3">
                <div>John Doe</div>
                <div></div>
            </div>
            <div className="w-full h-[152px] max-w-[200px] relative">
                <Image
                    src={'/images/blogImage2.jpeg'}
                    fill
                />
            </div>
            <div
                className="space-y-3 flex flex-col"
            >
                {
                    renderSubItems()
                }
            </div>
        </div>
    )
}

export default CoverageItem