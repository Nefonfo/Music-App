import {useNavigate} from 'react-router-dom'
import {usePlayerStore} from '../../hooks'
import {FullToggleImage, PlayerHeading} from '../components'

export const LyricsPage = () => {

    const navigate = useNavigate()
    const {play, playingNow} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    return (
        <>
            <div className='w-full flex flex-row gap-y-5 gap-x-2'>
                <FullToggleImage
                    small={true}
                    play={play}
                    image={image}
                    handleOnSmall={() => navigate('/player')}
                />
                <PlayerHeading
                    small={true}
                    author={author}
                    name={name}
                    explicit={explicit}
                />
            </div>
        </>
    )
}
