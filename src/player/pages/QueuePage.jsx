import {useNavigate} from 'react-router-dom'
import {motion, Reorder, useDragControls} from 'framer-motion'

import {usePlayerStore} from '../../hooks'
import {PlayerHeading} from '../components'

const QueueItem = ({item}) => {

    const dragControls = useDragControls()
    const {id, name, author, explicit, album} = item
    const {image} = album

    return (
        <Reorder.Item
            as='div'
            value={item}
            id={id}
            dragListener={false}
            dragControls={dragControls}
        >
            <PlayerHeading
                image={image}
                songTitle={name}
                songAuthor={author}
                songExplicit={explicit}
                leftActions={
                    <img
                        className="rounded-md h-12 w-12"
                        src={image}
                        alt="album"
                    />
                }
                rightActions={
                    <i
                        className="fa-solid fa-bars fa-xl text-white opacity-40 cursor-pointer"
                        onPointerDown={(event) => dragControls.start(event)}
                    >
                    </i>
                }
            />
        </Reorder.Item>
    )
}

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
                className='flex flex-col gap-y-4'
            >

                {
                    actualQueue.map((item) => <QueueItem key={item.id} item={item} />)
                }

            </Reorder.Group>
        </>
    )
}
