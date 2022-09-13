import {useDispatch, useSelector} from 'react-redux'
import {lastSong, nextSong, playToggle} from '../../store/player'

export const usePlayerStore = () => {

    const dispatch = useDispatch()
    const { playing, queue } = useSelector(state => state.player)

    const playMusic = () => {
        dispatch(playToggle())
    }

    const nextMusic = () => {
        dispatch(nextSong())
    }

    const lastMusic = () => {
        dispatch(lastSong())
    }


    return {
        // attributes
        playingNow: playing ? {...playing.song} : null,
        play: playing.play,
        nextItemExists: queue.nextItemExists,
        lastItemExists: queue.lastItemExists,
        //methods
        playMusic,
        nextMusic,
        lastMusic
    }
}
