import {motion, Reorder, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion'
import PropTypes from 'prop-types'
import {PlayerHeading} from './PlayerHeading'
import {usePlayerStore} from '../../hooks'

export const QueueItem = ({item}) => {


    const {deleteMusic} = usePlayerStore()
    const xInput = [0, 150]
    const x = useMotionValue(0)
    const dragControls = useDragControls()
    const swipeControls = useAnimation();
    const width = useTransform(x, xInput, ['0rem', '15rem'])
    const spaceSizing = useTransform(x, xInput, ['0rem', '1rem'])

    const {id, name, author, explicit, album} = item
    const {image} = album

    async function handleDragEnd(_, info) {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        console.log({offset, velocity})
        if (offset > 150 || velocity > 500) {
            await swipeControls.start({ x: "100%", transition: { duration: 0.2 } });
            deleteMusic(id)
        } else {
            await swipeControls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
        }
    }

    return (
        <Reorder.Item
            as='div'
            value={item}
            id={id}
            dragListener={false}
            dragControls={dragControls}
        >
            <motion.div
                className='flex items-center'
                style={{x}}
                drag='x'
                dragConstraints={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
                onDragEnd={handleDragEnd}
                animate={swipeControls}
            >
                <motion.div
                    style={{width, paddingRight: spaceSizing, marginRight: spaceSizing}}
                    className="h-12  bg-red-600 flex justify-end items-center overflow-x-hidden"
                >
                    <i className="fa-solid fa-trash text-white"></i>
                </motion.div>
                <PlayerHeading
                    image={image}
                    songTitle={name}
                    songAuthor={author}
                    songExplicit={explicit}
                    leftActions={
                        <>
                            <img
                                className="rounded-md h-12 w-12"
                                src={image}
                                alt="album"
                            />
                        </>
                    }
                    rightActions={
                        <div>
                            <i
                                className="fa-solid fa-bars fa-xl text-white opacity-40 cursor-pointer"
                                onPointerDown={(e) => dragControls.start(e)}
                            >
                            </i>
                        </div>
                    }
                />
            </motion.div>
        </Reorder.Item>
    )
}

QueueItem.propTypes = {
    item: PropTypes.object.isRequired
}