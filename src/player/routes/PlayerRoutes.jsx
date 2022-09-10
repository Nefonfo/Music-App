import {BackgroundPage, FullToggleImage, PlayerControls, PlayerHeading, PlayerSlider} from '../components'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {PlayerPage} from '../pages/PlayerPage'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
    const {playing, playMusic, nextMusic, lastMusic} = usePlayerStore()

    const {song, play} = playing
    const {image, author, name} = song

    return (
        <BackgroundPage className='w-full flex flex-wrap md:gap-x-10 justify-center items-center' coverImage={image} >
            <FullToggleImage play={play} image={image} />
            <div className='w-full flex flex-col px-6 md:px-12 max-w-xl'>
                <PlayerHeading author={author} name={name}/>
                <PlayerSlider duration={100} actualTrackTime={100} handleChangeTrackTime={() => {}} />
                <PlayerControls handlePlayClick={playMusic} handleBackClick={lastMusic} handleListClick={() => {}} handleLyricsClick={() => {}} handleNextClick={nextMusic} playing={play} />
            </div>
        </BackgroundPage>
    )
}
