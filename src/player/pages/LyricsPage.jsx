import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import Slider from "react-slick";

import {usePlayerStore} from '../../hooks'
import {FullToggleImage, PlayerHeading} from '../components'
import {LyricRow} from '../components/LyricRow'

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
            <div className='w-full flex flex-row gap-y-5 gap-x-2'>
                <FullToggleImage
                    small={true}
                    play={play}
                    image={image}
                    handleOnSmall={() => navigate('/player')}
                />
                <PlayerHeading
                    small={true}
                    author={author}
                    name={name}
                    explicit={explicit}
                />
            </div>
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
                        <LyricRow text="Now the tears dry and the pain takes over" active />
                        <LyricRow text="Let's talk this payola (payola)" />
                        <LyricRow text="You killed God's baby when it wasn't his will" />
                        <LyricRow text="And blood spill, we can't talk this shit over (this shit over)" />
                        <LyricRow text="The Lord is my shepherd, I am not sheep" />
                    </Slider>

            </motion.div>

        </>
    )
}
