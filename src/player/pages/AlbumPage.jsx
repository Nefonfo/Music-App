import {usePlayerStore} from '../../hooks'
import {FullToggleImage, PlayerHeading} from '../components'

export const AlbumPage = () => {

    const {play, playingNow} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    return (
        <div className='w-full flex flex-col items-center gap-y-5 gap-x-2'>
            <FullToggleImage play={play} image={image} />
            <PlayerHeading name={name} author={author} explicit={explicit} />
        </div>
    )
}
