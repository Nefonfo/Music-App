import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { extractColorsFromSrc } from 'extract-colors'
import { Swiper, SwiperSlide } from 'swiper/react';

import {usePlayerStore} from '../../hooks/store/usePlayerStore'
import {BackgroundLayout} from '../layout/BackgroundLayout'
import {FullToggleImage, PlayerControls, PlayerHeading, PlayerSlider} from '../components'
import 'swiper/css';
import {LyricRow} from '../components/LyricRow'
import {AnimatePresence} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

export const PlayerRoutes = () => {

    const navigate = useNavigate()
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


    return (
        <BackgroundLayout
            className='w-full px-4 flex flex-wrap flex-col lg:flex-row lg:items-baseline'
            gradientColors={gradientColors}
        >
            <div className='w-full flex items-center justify-center py-2'>
                <div onClick={() => navigate('/browse')} className="w-12 md:w-20 h-1 md:h-2 bg-white bg-opacity-50 cursor-pointer rounded-full"></div>
            </div>
            <div
                className='w-full flex flex-wrap flex-col justify-evenly items-center lg:flex-row lg:justify-center md:gap-x-7 lg:gap-x-10'
            >
                <div
                    className={`w-full flex flex-col gap-y-5 max-w-xl`}
                >
                    <div className={`w-full flex ${seeLyrics ? 'flex-row': 'flex-col'} gap-y-5 gap-x-2`}>
                        <FullToggleImage handleOnLyricsMode={() => setSeeLyrics(false)} play={play} image={image} lyricsImage={seeLyrics} />
                        <PlayerHeading author={author} name={name} lyricsHeading={seeLyrics} />
                    </div>
                    <AnimatePresence>
                        {
                            seeLyrics && (
                                <motion.div
                                    key='lyrics'
                                    initial={{height: '0rem'}}
                                    animate={{height: '12rem'}}
                                    exit={{height: '0rem'}}
                                    className='w-full flex h-48'
                                >
                                    <Swiper
                                        className='w-full'
                                        spaceBetween={1}
                                        slidesPerView={4}
                                        direction='vertical'
                                    >
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' active /></SwiperSlide>
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' /></SwiperSlide>
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' /></SwiperSlide>
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' /></SwiperSlide>
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' /></SwiperSlide>
                                        <SwiperSlide><LyricRow text='Lorem ipsum aset' /></SwiperSlide>
                                    </Swiper>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                <div className='w-full flex flex-col max-w-2xl'>
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
            </div>
        </BackgroundLayout>
    )
}
