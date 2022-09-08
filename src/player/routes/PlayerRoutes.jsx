import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {PlayerPage} from '../pages/PlayerPage'
import {PlayerHeading} from '../components/PlayerHeading'
import {BackgroundPage, PlayerSlider} from '../components'
import {PlayerControls} from '../components/PlayerControls'
import {useState} from 'react'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
    const [slider, setSlider] = useState(10)
    const {playing} = usePlayerStore()
    const {song} = playing
    const {image} = song

    return (
        <BackgroundPage
            coverImage={image}
            className='h-screen flex flex-wrap justify-center items-stretch gap-y-5 md:gap-y-0 md:gap-x-14 px-8 py-8'
        >

            <div onClick={() => navigate('/browse')} className='absolute top-2 h-1.5 w-14 rounded-full bg-white bg-opacity-75 cursor-pointer'></div>

            <Routes>
                <Route path='/' element={<PlayerPage />} />
                <Route path='*' element={<Navigate to='/player' />} />
            </Routes>

            <div className="w-full md:max-w-xl flex flex-col items-center justify-center gap-6">
                <PlayerHeading />
                <PlayerSlider duration={100} actualTrackTime={slider} handleChangeTrackTime={(value) => setSlider(value)} />
                <PlayerControls />
            </div>
        </BackgroundPage>

    )
}
