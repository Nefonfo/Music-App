import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import {usePlayerStore, useGradient} from '../../hooks'
import {BackgroundLayout} from '../layout'
import {AlbumPage, LyricsPage, QueuePage} from '../pages'
import {PlayerControls, PlayerSlider} from '../components'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {play, playingNow, playMusic, nextMusic, nextItemExists, lastMusic, lastItemExists} = usePlayerStore()
    const { album } = playingNow
    const { image } = album

    const gradient = useGradient(image)

    const toggleNavigation = (match, redirect) => {
        if(location.pathname === match) {
            navigate(redirect)
        } else {
            navigate(match)
        }
    }

    return (
            <>
                <div className='absolute inset-x-0 flex flex-col items-center justify-center pt-1'>
                    <div
                        className="w-10 md:w-20 h-1 bg-cupertino-label-dark opacity-70 rounded-full cursor-pointer"
                        onClick={() => navigate('/browse/collection')}
                    ></div>
                </div>
                <BackgroundLayout
                    className='w-full px-4 pt-6 md:pt-10 lg:pt-16 flex flex-wrap flex-row justify-between'
                    $gradientColor={gradient}
                >
                    <div
                        className='w-full flex flex-wrap flex-col justify-evenly items-center lg:flex-row lg:justify-center md:gap-x-7 lg:gap-x-10'
                    >
                        <div
                            className='lg:h-full w-full flex flex-1 flex-col justify-center gap-y-5 max-w-xl'
                        >
                            <Routes>
                                <Route path='/' element={<AlbumPage />} />
                                <Route path='/lyrics' element={<LyricsPage />} />
                                <Route path='/queue' element={<QueuePage />} />
                                <Route path='/*' element={<Navigate to='/player' />} />
                            </Routes>
                        </div>
                        <div className='w-full flex flex-col max-w-xl'>
                            <PlayerSlider duration={100} actualTrackTime={100} handleChangeTrackTime={() => {}} />
                            <PlayerControls
                                playing={play}
                                handlePlayClick={playMusic}
                                handleNextClick={nextItemExists ? nextMusic : null}
                                handleBackClick={lastItemExists ? lastMusic : null}
                                handleLyricsClick={() => toggleNavigation('/player/lyrics', '/player')}
                                handleListClick={() => toggleNavigation('/player/queue', '/player')}
                            />
                        </div>
                    </div>
                </BackgroundLayout>
            </>
    )
}
