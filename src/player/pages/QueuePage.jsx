import {useNavigate} from 'react-router-dom'
import {motion, Reorder} from 'framer-motion'

import {usePlayerStore} from '../../hooks'
import {PlayerHeading, QueueControls, QueueItem} from '../components'

export const QueuePage = () => {

    const navigate = useNavigate()
    const {playingNow, actualQueue, reorderMusic} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album


    return (
        <>
            <PlayerHeading
                active={true}
                image={image}
                songTitle={name}
                songAuthor={author}
                songExplicit={explicit}
                textLayoutId='player-heading-text'
                leftActions={
                    <motion.img
                        layoutId='player-album-image'
                        className="rounded-lg h-16 w-16 cursor-pointer"
                        src={image}
                        alt="album"
                        onClick={() => navigate('/player')}
                    />
                }
                rightActions={
                    <motion.div
                        textLayoutId='player-heading-toggle'
                        className="h-7 w-7 flex justify-center items-center rounded-full bg-white bg-opacity-20">
                        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                    </motion.div>
                }
            />
            <QueueControls />
            <Reorder.Group
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 1
                }}
                as='div'
                onReorder={(newOrder) => {
                    reorderMusic(newOrder)
                }}
                values={actualQueue} axis='y'
                className='flex flex-col gap-y-4 overflow-hidden'
            >

                {
                    actualQueue.map((item) => <QueueItem key={item.id} item={item} />)
                }

            </Reorder.Group>
        </>
    )
}
