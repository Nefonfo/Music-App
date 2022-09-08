import {Navigate, Route, Routes} from 'react-router-dom'
import {PlayerPage} from '../pages/PlayerPage'
import {PlayerHeading} from '../components/PlayerHeading'
import {BackgroundPage, PlayerSlider} from '../components'
import {PlayerControls} from '../components/PlayerControls'
import {useState} from 'react'

export const PlayerRoutes = () => {

    const albumImage = `${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`
    const [slider, setSlider] = useState(10)

    return (
        <BackgroundPage
            coverImage={albumImage}
            className='h-screen flex flex-wrap justify-center items-stretch gap-y-5 md:gap-y-0 md:gap-x-14 px-8 py-8'
        >

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
