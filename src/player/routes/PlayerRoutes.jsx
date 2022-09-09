import {BackgroundPage, PlayerControls, PlayerHeading, PlayerSlider} from '../components'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {PlayerPage} from '../pages/PlayerPage'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
    const {playing, playMusic, nextMusic, lastMusic} = usePlayerStore()

    const {song, play} = playing
    const {image, author, name} = song

    return (
        <div>
            <div className="absolute bg-white dark:bg-black z-20 top-0 bottom-0 w-full"></div>
            <BackgroundPage coverImage={image}/>
            <div className="z-40 hidden lg:flex lg:absolute top-0 w-full justify-center pt-3">
                <div onClick={() => navigate(-1)} className="w-20 h-1 bg-white bg-opacity-90 rounded-full cursor-pointer"></div>
            </div>
            <div className="absolute z-30 top-0 bottom-0 w-full flex flex-col lg:flex-row gap-y-2 lg:gap-x-14 items-center justify-between lg:justify-center px-4 lg:px-0">
                <div onClick={() => navigate(-1)} className="mt-2 w-14 lg:hidden h-1 bg-white bg-opacity-90 rounded-full cursor-pointer"></div>
                <Routes>
                    <Route path='/' element={<PlayerPage />} />
                    <Route path='*' element={<Navigate to='/player' />} />
                </Routes>
                <div className="h-max w-10/12 md:w-full lg:max-w-xl">
                    <PlayerHeading author={author} name={name}/>
                    <PlayerSlider
                        duration={1000}
                        actualTrackTime={1000}
                        handleChangeTrackTime={() => {}}
                    />
                    <PlayerControls
                        handlePlayClick={playMusic}
                        handleBackClick={lastMusic}
                        handleNextClick={nextMusic}
                        handleListClick={() => {}}
                        handleLyricsClick={() => {}}
                        playing={play}
                    />
                </div>
            </div>
        </div>
    )
}
