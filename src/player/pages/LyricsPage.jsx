import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import Slider from "react-slick"

import {usePlayerStore} from '../../hooks'
import {PlayerHeading, LyricRow} from '../components'

import './css/LyricsPage.css'

export const LyricsPage = () => {

    const navigate = useNavigate()
    const {play, playingNow} = usePlayerStore()
    const { name , author, explicit, album } = playingNow
    const { image } = album

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        draggable: true,
        className: 'cursor-pointer',
        slidesToScroll: 3,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
    }

    return (
        <>
            <PlayerHeading
                play={play}
                image={image}
                songAuthor={author}
                songTitle={name}
                songExplicit={explicit}
                textLayoutId='player-heading-text'
                leftActions={
                    <motion.img
                        layoutId='player-album-image'
                        className="rounded-lg h-16 w-16 cursor-pointer"
                        src={image}
                        alt="album"
                        onClick={() => navigate('/player')}
                    />
                }
                rightActions={
                    <motion.div
                        textLayoutId='player-heading-toggle'
                        className="h-7 w-7 flex justify-center items-center rounded-full bg-white bg-opacity-20">
                        <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                    </motion.div>
                }
            />
            <motion.div
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 1
                }}
                className='flex flex-1 max-h-max flex-col pb-10 lg:pb-0'
            >

                <Slider {...settings}>
                    <LyricRow text="Nobody pray for me" active/>
                    <LyricRow text="It been that day for me"/>
                    <LyricRow text="Way (yeah, yeah!)"/>
                    <LyricRow text="Ayy, I remember syrup sandwiches and crime allowances"/>
                    <LyricRow text="Finesse a n**** with some counterfeits, but now I'm countin' this"/>
                    <LyricRow text="Parmesan where my accountant lives; in fact, I'm downin' this"/>
                    <LyricRow text="D'USSÉ with my boo bae tastes like Kool-Aid for the analysts"/>
                </Slider>

            </motion.div>

        </>
    )
}
