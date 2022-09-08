import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import CrossfadeImage from 'react-crossfade-image'

export const PlayerPage = () => {

    const {playing} = usePlayerStore()
    const {play, song} = playing
    const {image} = song

    const coverSize = play ? 'w-full md:max-w-sm lg:max-w-md' : 'w-10/12 md:max-w-xs lg:max-w-sm'

    return (
        <div className={`flex items-center justify-center ${coverSize} transition-all duration-300 ease-in-out`}>
            <CrossfadeImage
                className='rounded-md'
                src={image}
                duration={1000}
                timingFunction={"ease-out"}
                alt="album-artist"
            />
        </div>
    )
}
