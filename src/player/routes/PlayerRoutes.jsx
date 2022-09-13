import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import {usePlayerStore, useGradient} from '../../hooks'
import {BackgroundLayout} from '../layout'
import {AlbumPage, LyricsPage} from '../pages'
import {PlayerControls, PlayerSlider} from '../components'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {play, playingNow, playMusic, nextMusic, nextItemExists, lastMusic, lastItemExists} = usePlayerStore()
    const { album } = playingNow
    const { image } = album

    const gradient = useGradient(image)

    const toggleLyrics = () => {
        const lyricsUrl = '/player/lyrics'
        if(location.pathname === lyricsUrl) {
            navigate('/player')
        } else {
            navigate(lyricsUrl)
        }
    }

    return (
        <BackgroundLayout
            className='w-full px-4 flex flex-wrap flex-col lg:flex-row lg:items-baseline'
            gradientColors={gradient}
        >
            <div className='w-full flex items-center justify-center py-2'>
                <div onClick={() => navigate('/browse/collection')} className="w-12 md:w-20 h-1 md:h-2 bg-white bg-opacity-50 cursor-pointer rounded-full"></div>
            </div>
            <div
                className='w-full flex flex-wrap flex-col justify-evenly items-center lg:flex-row lg:justify-center md:gap-x-7 lg:gap-x-10'
            >
                <div
                    className='w-full flex flex-col gap-y-5 max-w-xl'
                >
                    <Routes>
                        <Route path='/' element={<AlbumPage />} />
                        <Route path='/lyrics' element={<LyricsPage />} />
                        <Route path='/*' element={<Navigate to='/player' />} />
                    </Routes>
                </div>
                <div className='w-full flex flex-col max-w-xl'>
                    <PlayerSlider duration={100} actualTrackTime={100} handleChangeTrackTime={() => {}} />
                    <PlayerControls
                        playing={play}
                        handlePlayClick={playMusic}
                        handleNextClick={nextItemExists && nextMusic}
                        handleBackClick={lastItemExists && lastMusic}
                        handleLyricsClick={toggleLyrics}
                        handleListClick={() => {}}
                    />
                </div>
            </div>
        </BackgroundLayout>
    )
}
