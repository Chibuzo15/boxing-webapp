import { addClassNames } from '@/utils/functions';
import Image from '../../../node_modules/next/image';
import styles from './scorecard.module.css';

const ScoreCardItem = (props) => {

    return (
        <div
            className="border border-[#a7a7a7] max-w-[312px]"
        >
            <div className="p-2 border-b">
                <div className="flex justify-between text-[18px] font-bold">
                    <div>
                        John
                    </div>
                    <div className="text-[#a7a7a7]">
                        Doe
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-1/2 h-[100px]'>
                        <Image
                            src="/images/fighter-placeholder.svg"
                            fill
                        />
                    </div>
                    <div className='w-1/2 h-[100px]'>
                        <Image
                            src="/images/fighter-placeholder.svg"
                            fill
                        />
                    </div>
                </div>
                <div className={
                    addClassNames(
                        styles['slant-label'],
                    )
                }>
                    Winner
                </div>
            </div>
            <div className='flex space-x2'>
                <div className='font-bold uppercase'>
                    Full Scoreboard
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ScoreCardItem;