import {useEffect, useState} from 'react'
import {usePlayerStore} from '../../hooks'
import {PlayerHeading} from '../components'
import {motion, Reorder, useDragControls} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

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
    const {playingNow, actualQueue} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    const [queue, setQueue] = useState([])

    useEffect(() => {
        setQueue(actualQueue)
    }, [actualQueue])


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
                as='div'
                onReorder={setQueue}
                values={queue} axis='y'
                className='flex flex-col gap-y-4'
            >

                {
                    queue.map((item) => <QueueItem key={item.id} item={item} />)
                }

            </Reorder.Group>
        </>
    )
}
