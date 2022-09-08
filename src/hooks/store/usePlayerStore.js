import {useDispatch, useSelector} from 'react-redux'
import {lastSong, nextSong, playToggle} from '../../store/player/playerSlice'

export const usePlayerStore = () => {

    const dispatch = useDispatch()
    const { playing } = useSelector(state => state.player)

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
        playing,
        //methods
        playMusic,
        nextMusic,
        lastMusic
    }
}
