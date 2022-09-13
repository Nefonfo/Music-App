import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import {usePlayerStore, useGradient} from '../../hooks'
import {BackgroundLayout} from '../layout'
import {AlbumPage, LyricsPage} from '../pages'
import {PlayerControls, PlayerSlider} from '../components'
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'

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
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }}
                className='w-full px-4 pt-6 md:pt-0 flex flex-wrap flex-row justify-between'
                gradientColors={gradient}
            >
                <div className='absolute inset-x-0 flex flex-col items-center justify-center pt-1 md:pt-2'>
                    <div
                        className="w-10 md:w-20 h-1 bg-cupertino-label-dark opacity-70 rounded-full cursor-pointer"
                        onClick={() => navigate('/browse/collection')}
                    ></div>
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
