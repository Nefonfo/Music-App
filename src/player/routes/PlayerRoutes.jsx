import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { extractColorsFromSrc } from 'extract-colors'
import {BackgroundLayout} from '../layout/BackgroundLayout'
import {FullToggleImage, PlayerControls, PlayerHeading, PlayerSlider} from '../components'


export const PlayerRoutes = () => {


    const {playing, playMusic, nextMusic, lastMusic} = usePlayerStore()
    const [seeLyrics, setSeeLyrics] = useState(false)
    const [gradientColors, setGradientColors] = useState([])

    const {song, play} = playing
    const {image, author, name} = song

    const getColors = async () => {
        let colorData = await extractColorsFromSrc(image)
        colorData = colorData.sort((a,b) => (b.area-a.area))
        colorData = colorData.slice(0, 3)
        setGradientColors(colorData)
    }

    useEffect(() => {
        getColors()
    }, [image])

    const variants = {
        'normal': {
            flexDirection: 'column',
            rowGap: '1.25rem',
            transition: {
                type: "spring",
                duration: 0.25,
            }
        },
        'lyrics': {
            flexDirection: 'row',
            columnGap: '1.25rem',
            alignItems: 'center',
            transition: {
                type: "spring",
                duration: 0.25,
            }
        }
    }
    //${seeLyrics ? 'flex-wrap flex-row gap-x-5 items-center': 'flex-col gap-y-5'}
    return (
        <BackgroundLayout
            className='w-full flex flex-wrap flex-col justify-evenly items-center lg:flex-row lg:justify-center'
            gradientColors={gradientColors}
        >
            <motion.div
                initial={false}
                animate={ !seeLyrics ? 'normal' : 'lyrics'}
                variants={variants}
                className={`w-full flex flex-wrap px-6 max-w-xl`}
            >
                <FullToggleImage play={play} image={image} lyricsImage={seeLyrics} />
                <PlayerHeading author={author} name={name} lyricsHeading={seeLyrics} />
            </motion.div>
            <div className='w-full flex flex-col px-6 max-w-2xl'>
                <PlayerSlider duration={100} actualTrackTime={100} handleChangeTrackTime={() => {}} />
                <PlayerControls
                    playing={play}
                    handlePlayClick={playMusic}
                    handleNextClick={nextMusic}
                    handleBackClick={lastMusic}
                    handleLyricsClick={() => {setSeeLyrics(!seeLyrics)}}
                    handleListClick={() => {}}
                />
            </div>
        </BackgroundLayout>
    )
}
