import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import {FullToggleImage} from '../components'

export const PlayerPage = () => {

    const {playing} = usePlayerStore()
    const {play, song} = playing
    const {image} = song

    return (
        <FullToggleImage image={image} play={play}/>
    )
}
