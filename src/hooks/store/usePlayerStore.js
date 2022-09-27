import {useDispatch, useSelector} from 'react-redux'
import {deleteSongFromQueue, lastSong, nextSong, playToggle, reorderQueue} from '../../store/player'

export const usePlayerStore = () => {

    const dispatch = useDispatch()
    const { play, queue } = useSelector(state => state.player)
    const {historical, current} = queue

    const playMusic = () => {
        dispatch(playToggle())
    }

    const nextMusic = () => {
        dispatch(nextSong())
    }

    const lastMusic = () => {
        dispatch(lastSong())
    }

    const reorderMusic = (newOrder) => {
        dispatch(reorderQueue([current[0], ...newOrder]))
    }

    const deleteMusic = (queueId) => {
        dispatch(deleteSongFromQueue(queueId))
    }

    return {
        // attributes
        playingNow: current[0],
        play: play,
        nextItemExists: current.length > 1,
        lastItemExists: historical.length >= 1,
        actualQueue: current.slice(1),
        //methods
        playMusic,
        nextMusic,
        lastMusic,
        reorderMusic
    }
}
