import {motion} from 'framer-motion'
import {usePlayerStore} from '../../hooks'
import {FullToggleImage, PlayerHeading} from '../components'

export const AlbumPage = () => {

    const {play, playingNow} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    return (
        <div className='w-full flex flex-col items-center gap-y-5 gap-x-2'>
            <FullToggleImage play={play} image={image} />
            <PlayerHeading
                image={image}
                songTitle={name}
                songAuthor={author}
                songExplicit={explicit}
                textLayoutId='player-heading-text'
                rightActions={
                    <motion.div
                        textLayoutId='player-heading-toggle'
                        className="h-7 w-7 flex justify-center items-center rounded-full bg-white bg-opacity-20">
                        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                    </motion.div>
                }
            />
        </div>
    )
}
